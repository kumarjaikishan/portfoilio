import { useEffect, useRef } from 'react'

// Theme-aware colour palettes. Dark mode reads as a bright starfield on a
// near-black backdrop; light mode swaps in deeper, richer tones so the
// particles stay legible against a cream background.
const PALETTES = {
  dark: {
    base: [255, 255, 255],
    warm: [255, 205, 130],
    cool: [196, 184, 255],
    shadow: 'rgba(255, 255, 255, 0.45)',
    haloOuter: 'rgba(94, 234, 212, 0.9)',
    haloInner: 'rgba(255, 255, 255, 0.95)',
    coreInner: 'rgba(196, 184, 255, 0.30)',
    coreOuter: 'rgba(245, 166, 35, 0.16)',
  },
  light: {
    base: [58, 44, 84],
    warm: [199, 120, 16],
    cool: [98, 76, 176],
    shadow: 'rgba(98, 76, 176, 0.28)',
    haloOuter: 'rgba(201, 120, 15, 0.85)',
    haloInner: 'rgba(139, 124, 246, 0.85)',
    coreInner: 'rgba(245, 166, 35, 0.16)',
    coreOuter: 'rgba(139, 124, 246, 0.12)',
  },
}

export default function DotsCanvas({ theme = 'dark' }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const applyDpr = () => {
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    applyDpr()

    // ---- Particle galaxy setup -------------------------------------------------
    const PARTICLE_COUNT = 460
    const particles = []
    const baseRadius = Math.max(width, height) * 0.85

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
      const r = baseRadius * (0.65 + Math.random() * 0.7)

      const px = r * Math.sin(phi) * Math.cos(theta)
      const py = r * Math.sin(phi) * Math.sin(theta)
      const pz = r * Math.cos(phi)

      const rand = Math.random()
      let particleSize
      if (rand < 0.6) particleSize = Math.random() * 2.0 + 1.5
      else if (rand < 0.85) particleSize = Math.random() * 3.5 + 4.0
      else particleSize = Math.random() * 6.0 + 8.0

      // Cylindrical distance from the spin axis (Y) drives differential
      // rotation, just like a real galaxy's rotation curve: particles near
      // the core sweep around faster than particles out on the rim, so the
      // whole field slowly winds and shears instead of spinning as one
      // rigid, static-looking sphere.
      const cylR = Math.sqrt(px * px + pz * pz) / baseRadius
      const speedMul = 1.5 - Math.min(cylR, 1) * 0.85

      const colorRand = Math.random()
      const colorKey = colorRand < 0.68 ? 'base' : colorRand < 0.87 ? 'warm' : 'cool'

      particles.push({
        origX: px,
        origY: py,
        origZ: pz,
        size: particleSize,
        alpha: Math.random() * 0.7 + 0.3,
        isSquare: Math.random() > 0.65,
        speedMul,
        selfAngle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.4 + Math.random() * 1.4,
        twinklePhase: Math.random() * Math.PI * 2,
        colorKey,
      })
    }

    // Halo ring (randomised each mount so it never looks identical on refresh)
    const baseHaloRadius = Math.random() * 30 + 55
    const initialOrbitAngle = Math.random() * Math.PI * 2
    const initialSelfAngleX = Math.random() * Math.PI * 2
    const initialSelfAngleY = Math.random() * Math.PI * 2

    let globalAngleY = 0
    let targetSpeedY = 0.0017
    let lastTime = performance.now()

    const handleMouseMove = (e) => {
      const x = e.clientX - width / 2
      targetSpeedY = 0.0015 + (x / width) * 0.0025
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      applyDpr()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const startTime = performance.now()
    const fov = 600

    const render = (now) => {
      const elapsed = now - startTime
      const dt = Math.min(now - lastTime, 48) // clamp so a tab switch doesn't cause a jump
      lastTime = now

      const palette = PALETTES[themeRef.current] || PALETTES.dark
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      globalAngleY += targetSpeedY
      const angleX = 0.1
      const angleY = globalAngleY

      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)

      // A safety floor on the perspective denominator: nothing in this scene
      // should ever get close to the camera plane, but clamping removes any
      // chance of a divide-by-near-zero spike flinging a point across the
      // screen if the numbers ever line up unexpectedly.
      const project = (x, y, z) => {
        const denom = Math.max(fov + z + baseRadius, fov * 0.4)
        const scale = fov / denom
        return { x: cx + x * scale, y: cy + y * scale, scale }
      }

      const rotateY = (x, y, z, c, s) => ({ x: x * c - z * s, y, z: x * s + z * c })
      const rotateX = (x, y, z, c, s) => ({ x, y: y * c - z * s, z: y * s + z * c })

      // ---- 1. Halo ring ------------------------------------------------------
      // Fix for the old "roaming glitch": rather than independently
      // re-projecting each of the ring's sample points with its own
      // perspective division (which, at grazing/edge-on angles, let tiny
      // per-vertex depth differences reorder points and zig-zag a stray
      // line across the canvas), we now derive the ring's two 3D basis
      // vectors, rotate those, and project with ONE shared scale. That
      // guarantees the result is always a clean ellipse (or a smooth
      // sliver when viewed edge-on) and can never self-intersect.
      const selfAngleX = initialSelfAngleX + elapsed * 0.0002
      const selfAngleY = initialSelfAngleY + elapsed * 0.0003
      const sCosX = Math.cos(selfAngleX)
      const sSinX = Math.sin(selfAngleX)
      const sCosY = Math.cos(selfAngleY)
      const sSinY = Math.sin(selfAngleY)

      const orbitR = baseRadius * 0.65
      const orbitAngle = initialOrbitAngle + elapsed * 0.00015
      const orbitX = Math.cos(orbitAngle) * orbitR
      const orbitY = Math.sin(orbitAngle * 0.7) * (baseRadius * 0.25)
      const orbitZ = Math.sin(orbitAngle) * orbitR

      const haloScale = 1 + Math.sin(elapsed * 0.0008) * 0.18
      const currentHaloRadius = baseHaloRadius * haloScale

      // Local ring basis vectors (in the ring's own plane) rotated by the
      // ring's self-spin, then by the same global rotation as everything else.
      const rotateBasis = (vx, vy, vz) => {
        let s1 = rotateY(vx, vy, vz, sCosY, sSinY)
        let s2 = rotateX(s1.x, s1.y, s1.z, sCosX, sSinX)
        let g1 = rotateY(s2.x, s2.y, s2.z, cosY, sinY)
        return rotateX(g1.x, g1.y, g1.z, cosX, sinX)
      }

      const centerLocal = rotateY(orbitX, orbitY, orbitZ, cosY, sinY)
      const centerRotated = rotateX(centerLocal.x, centerLocal.y, centerLocal.z, cosX, sinX)
      const centerProj = project(centerRotated.x, centerRotated.y, centerRotated.z)

      const uAxis = rotateBasis(currentHaloRadius, 0, 0)
      const vAxis = rotateBasis(0, currentHaloRadius, 0)
      const u2d = { x: uAxis.x * centerProj.scale, y: uAxis.y * centerProj.scale }
      const v2d = { x: vAxis.x * centerProj.scale, y: vAxis.y * centerProj.scale }

      const RING_SEGMENTS = 56
      const tracePath = () => {
        ctx.beginPath()
        for (let i = 0; i <= RING_SEGMENTS; i++) {
          const a = (i / RING_SEGMENTS) * Math.PI * 2
          const ca = Math.cos(a)
          const sa = Math.sin(a)
          const px = centerProj.x + u2d.x * ca + v2d.x * sa
          const py = centerProj.y + u2d.y * ca + v2d.y * sa
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
      }

      ctx.save()
      ctx.shadowBlur = 0
      tracePath()
      ctx.lineWidth = 6
      ctx.strokeStyle = palette.haloOuter
      ctx.stroke()

      tracePath()
      ctx.lineWidth = 3
      ctx.strokeStyle = palette.haloInner
      ctx.stroke()
      ctx.restore()

      // ---- 2. Spherical star field with differential rotation ---------------
      const projectedParticles = []

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // Each particle accumulates its own rotation at a speed scaled by
        // its distance from the spin axis, producing a genuine shearing
        // "galaxy winding" motion rather than one rigid rotation for
        // every point.
        p.selfAngle += targetSpeedY * p.speedMul * (dt / 16.67)

        const c = Math.cos(p.selfAngle)
        const s = Math.sin(p.selfAngle)
        const spun = rotateY(p.origX, p.origY, p.origZ, c, s)

        const tilted = rotateX(spun.x, spun.y, spun.z, cosX, sinX)
        const proj = project(tilted.x, tilted.y, tilted.z)

        const depthAlpha = Math.max(0.15, Math.min(1, (tilted.z + baseRadius) / (2 * baseRadius)))
        const twinkle = 0.72 + 0.28 * Math.sin(elapsed * 0.0012 * p.twinkleSpeed + p.twinklePhase)

        const [r, g, b] = palette[p.colorKey]

        projectedParticles.push({
          x: proj.x,
          y: proj.y,
          size: Math.max(0.6, p.size * proj.scale),
          alpha: p.alpha * depthAlpha * twinkle,
          z: tilted.z,
          isSquare: p.isSquare,
          color: `${r}, ${g}, ${b}`,
        })
      }

      projectedParticles.sort((a, b) => a.z - b.z)

      for (let i = 0; i < projectedParticles.length; i++) {
        const p = projectedParticles[i]
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha.toFixed(2)})`
        ctx.shadowColor = palette.shadow
        ctx.shadowBlur = p.z > 0 ? 3 : 0

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size * 1.2, p.size * 1.2)
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" ref={containerRef}>
      <canvas className="block w-full h-full" ref={canvasRef} />
    </div>
  )
}

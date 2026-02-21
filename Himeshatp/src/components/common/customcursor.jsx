import { useEffect, useState } from 'react'

const CustomCursor = ({ isDarkMode }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const dark = isDarkMode

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const checkTouch = () =>
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    let ringX = -100
    let ringY = -100
    let animFrame

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      const target = e.target
      const hoverable = target.closest('a, button, [data-hover]')
      setIsHovered(!!hoverable)
    }

    const animate = () => {
      setRing(prev => {
        ringX += (prev.targetX - ringX) * 0.12
        ringY += (prev.targetY - ringY) * 0.12
        return { x: ringX, y: ringY, targetX: prev.targetX, targetY: prev.targetY }
      })
      animFrame = requestAnimationFrame(animate)
    }

    const onMoveRing = (e) => {
      setRing(prev => ({ ...prev, targetX: e.clientX, targetY: e.clientY }))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', onMoveRing)
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onMoveRing)
      cancelAnimationFrame(animFrame)
    }
  }, [isTouchDevice])

  const accent = '#2563eb'

  // On touch/mobile: restore default cursor, render nothing
  if (isTouchDevice) {
    return <style>{`* { cursor: auto !important; }`}</style>
  }

  return (
    <>
      {/* Hide default cursor globally — desktop only */}
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Outer ring — lags behind */}
      <div
        style={{
          position: 'fixed',
          left: ring.x,
          top: ring.y,
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? accent : dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)'}`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          mixBlendMode: 'normal',
        }}
      />

      {/* Inner dot — snaps to cursor exactly */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: isHovered ? accent : dark ? '#ffffff' : '#000000',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background 0.2s ease, transform 0.1s ease',
        }}
      />
    </>
  )
}

export default CustomCursor
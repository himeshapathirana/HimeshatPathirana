import { useState } from 'react'
import { SunIcon, MoonIcon } from '../common/Icons'
import { navLinks } from '../../data'

const Navbar = ({ activeSection, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dark = isDarkMode

  return (
    <nav
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: dark ? 'rgba(2,6,23,0.88)' : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${dark ? '#1e293b' : '#f1f5f9'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <style>{`
        .nav-desktop   { display: flex !important; }
        .nav-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 76 }}>

          <a href="#home" style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.05em', color: dark ? '#fff' : '#0f172a', textDecoration: 'none' }}>
            HT<span style={{ color: '#2563eb' }}>.</span>Pathirana
          </a>

          {/* ── Desktop nav ── */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', gap: 28 }}>
              {navLinks.map((link) => (
                <a key={link.id} href={link.href}
                  style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none', color: activeSection === link.id ? '#2563eb' : dark ? '#94a3b8' : '#64748b', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === link.id ? '#2563eb' : dark ? '#94a3b8' : '#64748b')}
                >{link.name}</a>
              ))}
            </div>
            <button onClick={toggleTheme} aria-label="Toggle dark mode"
              style={{ position: 'relative', width: 56, height: 28, borderRadius: 9999, background: dark ? 'linear-gradient(135deg, #1e3a8a, #1e293b)' : 'linear-gradient(135deg, #e0e7ff, #dbeafe)', border: `1.5px solid ${dark ? 'rgba(37,99,235,0.4)' : 'rgba(37,99,235,0.2)'}`, cursor: 'pointer', padding: 0, transition: 'background 0.4s ease, border-color 0.4s ease', flexShrink: 0 }}
            >
              <div style={{ position: 'absolute', top: 3, left: dark ? 'calc(100% - 25px)' : '3px', width: 20, height: 20, borderRadius: '50%', background: dark ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #60a5fa, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)', boxShadow: dark ? '0 2px 8px rgba(251,191,36,0.5)' : '0 2px 8px rgba(37,99,235,0.4)' }}>
                {dark ? <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#fff' }}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                  : <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#fff' }}><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>}
              </div>
            </button>
          </div>

          {/* ── Mobile: theme + hamburger ── */}
          <div className="nav-hamburger" style={{ alignItems: 'center', gap: 10 }}>
            <button onClick={toggleTheme} aria-label="Toggle dark mode"
              style={{ position: 'relative', width: 48, height: 26, borderRadius: 9999, background: dark ? 'linear-gradient(135deg, #1e3a8a, #1e293b)' : 'linear-gradient(135deg, #e0e7ff, #dbeafe)', border: `1.5px solid ${dark ? 'rgba(37,99,235,0.4)' : 'rgba(37,99,235,0.2)'}`, cursor: 'pointer', padding: 0, flexShrink: 0 }}
            >
              <div style={{ position: 'absolute', top: 2, left: dark ? 'calc(100% - 23px)' : '2px', width: 18, height: 18, borderRadius: '50%', background: dark ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #60a5fa, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                {dark ? <svg width="9" height="9" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#fff' }}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                  : <svg width="9" height="9" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#fff' }}><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>}
              </div>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
              style={{ width: 40, height: 40, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, padding: 0 }}
            >
              <span style={{ width: 18, height: 1.5, background: dark ? '#94a3b8' : '#64748b', display: 'block', borderRadius: 2, transition: 'all 0.3s', transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ width: 18, height: 1.5, background: dark ? '#94a3b8' : '#64748b', display: 'block', borderRadius: 2, transition: 'all 0.3s', opacity: isOpen ? 0 : 1 }} />
              <span style={{ width: 18, height: 1.5, background: dark ? '#94a3b8' : '#64748b', display: 'block', borderRadius: 2, transition: 'all 0.3s', transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{ background: dark ? 'rgba(2,6,23,0.98)' : 'rgba(255,255,255,0.98)', borderTop: `1px solid ${dark ? '#1e293b' : '#f1f5f9'}`, padding: '8px 0 16px' }}>
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '14px 24px', fontSize: 15, fontWeight: 500, textDecoration: 'none', color: activeSection === link.id ? '#2563eb' : dark ? '#94a3b8' : '#64748b', borderLeft: activeSection === link.id ? '3px solid #2563eb' : '3px solid transparent', transition: 'all 0.2s' }}
            >{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
import { useState } from 'react'
import { GitHubIcon, ExternalIcon } from '../common/Icons'
import { projects } from '../../data'

const ChevronLeft = () => (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>)
const ChevronRight = () => (<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>)

const Projects = ({ isDarkMode }) => {
  const dark = isDarkMode
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(null)
  const total = projects.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visibleProjects = [
    projects[current % total],
    projects[(current + 1) % total],
    projects[(current + 2) % total],
  ]

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '120px 0 80px', background: dark ? '#020617' : '#f8fafc', transition: 'background 0.3s', overflow: 'hidden' }}>
      <style>{`
        .proj-cards { flex: 1; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
        .proj-card-2 { opacity: 0.6; }
        .proj-card-3 { opacity: 0.35; }
        .proj-header-row { display: flex; justify-content: space-between; align-items: flex-end; }
        @media (max-width: 900px) {
          .proj-cards { grid-template-columns: 1fr 1fr; }
          .proj-card-3 { display: none !important; }
        }
        @media (max-width: 600px) {
          .proj-cards { grid-template-columns: 1fr; }
          .proj-card-2 { display: none !important; }
          .proj-card-3 { display: none !important; }
          .proj-header-row { flex-direction: column; align-items: flex-start; gap: 16px; }
          .proj-arrow { width: 40px !important; height: 40px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', textTransform: 'uppercase', marginBottom: 10 }}>MY WORK</p>
          <div className="proj-header-row">
            <div>
              <h2 style={{ fontSize: 44, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 12, lineHeight: 1.1 }}>Selected Projects</h2>
              <div style={{ width: 48, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', marginBottom: 14 }} />
              <p style={{ color: dark ? '#475569' : '#94a3b8', fontSize: 15 }}>A curated list of my latest technical work and research.</p>
            </div>
            <a href="https://github.com/himeshapathirana" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: dark ? '#94a3b8' : '#64748b', textDecoration: 'none', padding: '10px 20px', borderRadius: 10, border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderColor = '#2563eb' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = dark ? '#94a3b8' : '#64748b'; e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}
            ><GitHubIcon /> View GitHub</a>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="proj-arrow" onClick={prev}
            style={{ flexShrink: 0, width: 52, height: 52, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.04)' : '#fff', border: `1.5px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: dark ? '#64748b' : '#94a3b8', cursor: 'pointer', boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.25s ease', zIndex: 2 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.04)' : '#fff'; e.currentTarget.style.color = dark ? '#64748b' : '#94a3b8'; e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.boxShadow = dark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)' }}
          ><ChevronLeft /></button>

          <div className="proj-cards">
            {visibleProjects.map((project, i) => (
              <div key={`${current}-${i}`} className={i === 1 ? 'proj-card-2' : i === 2 ? 'proj-card-3' : ''}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{ background: dark ? 'rgba(255,255,255,0.03)' : '#fff', border: `1px solid ${hovered === i ? dark ? 'rgba(37,99,235,0.4)' : 'rgba(37,99,235,0.3)' : dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, borderRadius: 20, overflow: 'hidden', transform: hovered === i ? 'translateY(-6px)' : i === 0 ? 'translateY(0)' : i === 1 ? 'translateY(6px)' : 'translateY(14px)', transition: 'all 0.35s ease', boxShadow: hovered === i ? dark ? '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.2)' : '0 24px 60px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.15)' : dark ? '0 2px 20px rgba(0,0,0,0.3)' : '0 2px 20px rgba(0,0,0,0.05)' }}
              >
                <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', transform: hovered === i ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s ease', filter: hovered === i ? 'brightness(0.7)' : 'brightness(0.85)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: '20px 24px', gap: 10 }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 9999, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}><GitHubIcon /> Code</a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 9999, background: '#2563eb', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}><ExternalIcon /> Live</a>
                  </div>
                  <div style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff' }}>{String((current + i) % total + 1).padStart(2, '0')}</div>
                </div>
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: dark ? '#f1f5f9' : '#0f172a', marginBottom: 8 }}>{project.title}</h3>
                  <p style={{ color: dark ? '#64748b' : '#94a3b8', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{project.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.tags.map((tag) => (<span key={tag} style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6, background: dark ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.07)', color: dark ? '#60a5fa' : '#2563eb', border: `1px solid ${dark ? 'rgba(37,99,235,0.2)' : 'rgba(37,99,235,0.15)'}`, fontFamily: 'monospace', letterSpacing: '0.02em' }}>{tag}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="proj-arrow" onClick={next}
            style={{ flexShrink: 0, width: 52, height: 52, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.04)' : '#fff', border: `1.5px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: dark ? '#64748b' : '#94a3b8', cursor: 'pointer', boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.25s ease', zIndex: 2 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.04)' : '#fff'; e.currentTarget.style.color = dark ? '#64748b' : '#94a3b8'; e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.boxShadow = dark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)' }}
          ><ChevronRight /></button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 36 }}>
          {projects.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 7, height: 7, borderRadius: 9999, background: i === current ? '#2563eb' : dark ? '#1e293b' : '#e2e8f0', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />))}
        </div>
      </div>
    </section>
  )
}

export default Projects
import { useState } from 'react'
import { experience } from '../../data'

const BriefcaseIcon = () => (<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>)
const LeaderIcon = () => (<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>)
const CheckIcon = () => (<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>)

const Experience = ({ isDarkMode }) => {
  const dark = isDarkMode
  const [hovered, setHovered] = useState(null)

  return (
    <section id="experience" style={{ minHeight: '100vh', padding: '120px 0 80px', background: dark ? '#020617' : '#f8fafc', transition: 'background 0.3s' }}>
      <style>{`
        .exp-card { display: grid; grid-template-columns: 260px 1fr; border-radius: 20px; overflow: hidden; }
        .exp-left  { padding: 36px 32px; border-right: 1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}; display: flex; flex-direction: column; justify-content: space-between; }
        .exp-right { padding: 36px 40px; }
        .exp-number { font-size: 56px; font-weight: 900; line-height: 1; user-select: none; }
        @media (max-width: 768px) {
          .exp-card  { grid-template-columns: 1fr; }
          .exp-left  { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 24px 20px 16px; flex-direction: row; flex-wrap: wrap; gap: 12px; justify-content: flex-start; align-items: center; }
          .exp-right { padding: 20px !important; }
          .exp-number { display: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', textTransform: 'uppercase', marginBottom: 10 }}>CAREER PATH</p>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 12, lineHeight: 1.1 }}>Professional Experience</h2>
          <div style={{ width: 48, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', marginBottom: 16 }} />
          <p style={{ color: dark ? '#475569' : '#94a3b8', fontSize: 16 }}>Work and leadership roles that define my career path.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {experience.map((exp, i) => {
            const isPurple = exp.typeVariant === 'purple'
            const isHovered = hovered === i
            const accent = isPurple ? '#7c3aed' : '#2563eb'
            const accentBg = isPurple ? dark ? 'rgba(124,58,237,0.12)' : 'rgba(243,232,255,0.6)' : dark ? 'rgba(37,99,235,0.1)' : 'rgba(219,234,254,0.5)'

            return (
              <div key={exp.title} className="exp-card" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{ background: dark ? isHovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)' : isHovered ? '#fff' : 'rgba(255,255,255,0.7)', border: `1px solid ${isHovered ? isPurple ? 'rgba(124,58,237,0.35)' : 'rgba(37,99,235,0.35)' : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`, boxShadow: isHovered ? dark ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${isPurple ? 'rgba(124,58,237,0.2)' : 'rgba(37,99,235,0.2)'}` : `0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px ${isPurple ? 'rgba(124,58,237,0.15)' : 'rgba(37,99,235,0.15)'}` : dark ? '0 2px 20px rgba(0,0,0,0.2)' : '0 2px 20px rgba(0,0,0,0.04)', transition: 'all 0.3s ease', transform: isHovered ? 'translateY(-3px)' : 'translateY(0)' }}
              >
                <div className="exp-left" style={{ background: isHovered ? accentBg : 'transparent', transition: 'background 0.3s' }}>
                  <div>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: isHovered ? isPurple ? 'rgba(124,58,237,0.2)' : 'rgba(37,99,235,0.15)' : dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isHovered ? accent : dark ? '#475569' : '#94a3b8', marginBottom: 20, transition: 'all 0.3s', border: `1px solid ${isHovered ? `${accent}30` : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
                      {isPurple ? <LeaderIcon /> : <BriefcaseIcon />}
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: isHovered ? accent : dark ? '#475569' : '#94a3b8', marginBottom: 12, letterSpacing: '0.04em', transition: 'color 0.3s' }}>{exp.period}</p>
                    <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 9999, background: isPurple ? dark ? 'rgba(124,58,237,0.2)' : '#f3e8ff' : dark ? 'rgba(37,99,235,0.15)' : '#dbeafe', color: accent, border: `1px solid ${accent}30`, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{exp.type}</span>
                  </div>
                  <div className="exp-number" style={{ color: isHovered ? `${accent}20` : dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                </div>

                <div className="exp-right">
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: dark ? '#f1f5f9' : '#0f172a', marginBottom: 4, lineHeight: 1.2 }}>{exp.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: accent, marginBottom: 24, transition: 'color 0.3s' }}>{exp.company}</p>
                  <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', marginBottom: 24 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                    {exp.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, background: isHovered ? isPurple ? 'rgba(124,58,237,0.12)' : 'rgba(37,99,235,0.1)' : dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isHovered ? accent : dark ? '#475569' : '#94a3b8', marginTop: 1, transition: 'all 0.3s' }}><CheckIcon /></div>
                        <span style={{ fontSize: 14, lineHeight: 1.7, color: dark ? '#94a3b8' : '#475569' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {exp.tags.map((t) => (<span key={t} style={{ fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 8, background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`, color: dark ? '#64748b' : '#64748b', fontFamily: 'monospace', letterSpacing: '0.02em' }}>{t}</span>))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
import { education } from '../../data'

const GraduationIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const SchoolIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const Education = ({ isDarkMode }) => {
  const dark = isDarkMode

  return (
    <section id="education" style={{ minHeight: '100vh', padding: '120px 0 80px', background: dark ? '#020617' : '#fff', transition: 'background 0.3s' }}>
      <style>{`
        .edu-row { display: grid; grid-template-columns: 1fr 64px 1fr; align-items: center; gap: 0; }
        .edu-left { padding-right: 40px; }
        .edu-right { padding-left: 40px; }
        .edu-period-left  { text-align: right; padding-right: 40px; }
        .edu-period-right { text-align: left;  padding-left: 40px; }

        @media (max-width: 768px) {
          /* Single column: dot on left, card on right */
          .edu-row {
            grid-template-columns: 48px 1fr !important;
            grid-template-rows: auto;
          }

          /* Hide period labels — no room */
          .edu-period-left  { display: none !important; }
          .edu-period-right { display: none !important; }

          /* Dot always in column 1 */
          .edu-center { grid-column: 1 !important; grid-row: 1 !important; }

          /* Both .edu-left (even cards) and .edu-right (odd cards) go to column 2 */
          .edu-left {
            display: block !important;
            grid-column: 2 !important;
            grid-row: 1 !important;
            padding-left: 20px !important;
            padding-right: 0 !important;
          }
          .edu-right {
            grid-column: 2 !important;
            grid-row: 1 !important;
            padding-left: 20px !important;
            padding-right: 0 !important;
          }
          .edu-right-col { grid-column: 2 !important; }

          /* Shift the vertical timeline line to align with the dot */
          .edu-vline { left: 24px !important; transform: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', textTransform: 'uppercase', marginBottom: 10 }}>MY BACKGROUND</p>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 12, lineHeight: 1.1 }}>Education</h2>
          <div style={{ width: 48, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', marginBottom: 16 }} />
          <p style={{ fontSize: 16, color: dark ? '#475569' : '#94a3b8', marginTop: 0 }}>A strong academic foundation that fuels my professional drive.</p>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="edu-vline" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: dark ? 'linear-gradient(180deg, transparent, rgba(37,99,235,0.4) 20%, rgba(124,58,237,0.4) 80%, transparent)' : 'linear-gradient(180deg, transparent, rgba(37,99,235,0.2) 20%, rgba(124,58,237,0.2) 80%, transparent)', transform: 'translateX(-50%)', zIndex: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="edu-row">
                  {/* Left col */}
                  <div className={isLeft ? 'edu-left' : 'edu-period-left'}>
                    {isLeft
                      ? <Card edu={edu} dark={dark} />
                      : <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: dark ? '#334155' : '#cbd5e1', textTransform: 'uppercase' }}>{edu.period}</span>
                    }
                  </div>

                  {/* Center dot */}
                  <div className="edu-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: dark ? '#020617' : '#fff', border: `2px solid ${dark ? 'rgba(37,99,235,0.5)' : 'rgba(37,99,235,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', boxShadow: dark ? '0 0 0 6px rgba(37,99,235,0.08)' : '0 0 0 6px rgba(37,99,235,0.06)' }}>
                      {i === 0 ? <GraduationIcon /> : <SchoolIcon />}
                    </div>
                  </div>

                  {/* Right col */}
                  <div className={!isLeft ? 'edu-right edu-right-col' : 'edu-period-right'}>
                    {!isLeft
                      ? <Card edu={edu} dark={dark} />
                      : <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: dark ? '#334155' : '#cbd5e1', textTransform: 'uppercase' }}>{edu.period}</span>
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({ edu, dark }) => (
  <div style={{ background: dark ? 'rgba(255,255,255,0.03)' : '#fff', border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, borderRadius: 20, padding: '32px 36px', textAlign: 'left', boxShadow: dark ? '0 4px 40px rgba(0,0,0,0.3)' : '0 4px 32px rgba(0,0,0,0.05)', position: 'relative', transition: 'box-shadow 0.3s' }}>
    <h3 style={{ fontSize: 19, fontWeight: 800, color: dark ? '#f1f5f9' : '#0f172a', marginBottom: 6, lineHeight: 1.3 }}>{edu.degree}</h3>
    <p style={{ fontSize: 14, fontWeight: 500, color: dark ? '#60a5fa' : '#2563eb', marginBottom: 20 }}>{edu.school}</p>
    {edu.gpa && (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: dark ? 'rgba(245,158,11,0.08)' : 'rgba(254,243,199,0.9)', border: `1px solid ${dark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.25)'}`, borderRadius: 8, padding: '4px 12px', marginBottom: 20 }}>
        <span style={{ color: '#f59e0b', fontSize: 12 }}>★</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: dark ? '#fbbf24' : '#92400e' }}>GPA {edu.gpa}</span>
      </div>
    )}
    <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', marginBottom: 16 }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {edu.highlights.map((h, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2563eb', marginTop: 7, flexShrink: 0 }} />
          <span style={{ fontSize: 13, lineHeight: 1.65, color: dark ? '#94a3b8' : '#64748b' }}>{h}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Education
import { useState } from 'react'
import { skills } from '../../data'

const categoryIcons = { LANGUAGES: '{ }', FRAMEWORKS: '⚡', MOBILE: '📱', DEVOPS: '⚙', DATABASES: '🗄', TOOLS: '🛠' }
const categoryDesc  = { LANGUAGES: 'Core programming languages', FRAMEWORKS: 'Libraries & frameworks', MOBILE: 'Mobile development', DEVOPS: 'DevOps & infrastructure', DATABASES: 'Database technologies', TOOLS: 'Development tools' }
const skillColors   = [
  { bg: 'rgba(37,99,235,0.1)',   border: 'rgba(37,99,235,0.2)',   text: '#2563eb' },
  { bg: 'rgba(124,58,237,0.1)',  border: 'rgba(124,58,237,0.2)',  text: '#7c3aed' },
  { bg: 'rgba(5,150,105,0.1)',   border: 'rgba(5,150,105,0.2)',   text: '#059669' },
  { bg: 'rgba(234,88,12,0.1)',   border: 'rgba(234,88,12,0.2)',   text: '#ea580c' },
  { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   text: '#0891b2' },
  { bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.2)',  text: '#db2777' },
]

const Skills = ({ isDarkMode }) => {
  const dark = isDarkMode
  const categories = Object.entries(skills)
  const [activeCategory, setActiveCategory] = useState(categories[0][0])

  const activeCatIndex = categories.findIndex(([cat]) => cat === activeCategory)
  const activeColor = skillColors[activeCatIndex % skillColors.length]
  const activeItems = skills[activeCategory] || []

  return (
    <section id="skills" style={{ minHeight: 'auto', padding: '100px 0 80px', background: dark ? '#020617' : '#f8fafc', transition: 'background 0.3s' }}>
      <style>{`
        .skills-layout  { display: grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: start; }
        .skills-sidebar { display: flex; flex-direction: column; gap: 10px; }
        .skills-summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

        /* Skill pill area — wraps normally on desktop */
        .skills-pills { display: flex; flex-wrap: wrap; gap: 10px; }

        @media (max-width: 900px) {
          .skills-layout  { grid-template-columns: 1fr; }
          .skills-sidebar { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .skills-summary { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 600px) {
          /* Sidebar: single column so buttons aren't squished */
          .skills-sidebar { grid-template-columns: 1fr; }

          /* Summary: 2 cols max to avoid cropping */
          .skills-summary { grid-template-columns: repeat(2, 1fr); gap: 8px; }

          /* Right panel: tighter padding */
          .skills-right-panel { padding: 20px 16px !important; }

          /* Pills: allow horizontal scroll if they still overflow */
          .skills-pills {
            flex-wrap: wrap;
            gap: 8px;
          }
          .skills-pills > div {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }

          /* Summary cards: smaller padding */
          .skills-summary button {
            padding: 12px 10px !important;
            gap: 8px !important;
          }
          .skills-summary button > div:last-child > div:first-child {
            font-size: 18px !important;
          }
        }

        @media (max-width: 380px) {
          .skills-summary { grid-template-columns: repeat(2, 1fr); }
          .skills-sidebar { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', textTransform: 'uppercase', marginBottom: 10 }}>WHAT I KNOW</p>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 12, lineHeight: 1.1 }}>Technical Skills</h2>
          <div style={{ width: 48, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', marginBottom: 16 }} />
          <p style={{ color: dark ? '#475569' : '#94a3b8', fontSize: 16 }}>A comprehensive toolkit spanning development, DevOps, and infrastructure.</p>
        </div>

        <div className="skills-layout">
          {/* Category list */}
          <div className="skills-sidebar">
            {categories.map(([cat], i) => {
              const color = skillColors[i % skillColors.length]
              const isActive = activeCategory === cat
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 14, background: isActive ? color.bg : dark ? 'rgba(255,255,255,0.02)' : '#fff', border: `1px solid ${isActive ? color.border : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`, cursor: 'pointer', textAlign: 'left', boxShadow: isActive ? `0 4px 20px ${color.bg}` : 'none', transition: 'all 0.25s ease', width: '100%', boxSizing: 'border-box' }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: isActive ? color.bg : dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', border: `1px solid ${isActive ? color.border : dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: isActive ? color.text : dark ? '#475569' : '#94a3b8', fontFamily: 'monospace', fontWeight: 800, transition: 'all 0.25s' }}>{categoryIcons[cat] || '#'}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: isActive ? color.text : dark ? '#cbd5e1' : '#334155', marginBottom: 2, transition: 'color 0.25s' }}>{cat}</div>
                    <div style={{ fontSize: 11, color: dark ? '#334155' : '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{categoryDesc[cat] || ''}</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: isActive ? color.text : dark ? '#334155' : '#cbd5e1', background: isActive ? color.bg : 'transparent', border: `1px solid ${isActive ? color.border : 'transparent'}`, borderRadius: 9999, padding: '2px 8px', transition: 'all 0.25s', flexShrink: 0 }}>{skills[cat].length}</div>
                </button>
              )
            })}
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, minWidth: 0 }}>
            <div
              className="skills-right-panel"
              style={{ background: dark ? 'rgba(255,255,255,0.02)' : '#fff', border: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`, borderRadius: 20, padding: '32px 36px', boxShadow: dark ? 'none' : '0 2px 20px rgba(0,0,0,0.04)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg, ${activeColor.text}30, transparent)` }} />
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', color: activeColor.text, textTransform: 'uppercase' }}>{activeCategory}</span>
                <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg, transparent, ${activeColor.text}30)` }} />
              </div>

              {/* Pills */}
              <div className="skills-pills">
                {activeItems.map((skill) => (
                  <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 12, background: dark ? 'rgba(255,255,255,0.03)' : '#f8fafc', border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`, transition: 'all 0.2s', cursor: 'default' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = activeColor.bg; e.currentTarget.style.borderColor = activeColor.border; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.03)' : '#f8fafc'; e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: activeColor.text, boxShadow: `0 0 6px ${activeColor.text}80`, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: dark ? '#cbd5e1' : '#334155' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary grid */}
            <div className="skills-summary">
              {categories.map(([cat, items], i) => {
                const color = skillColors[i % skillColors.length]
                const isActive = cat === activeCategory
                return (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    style={{ padding: '18px 20px', borderRadius: 14, background: isActive ? color.bg : dark ? 'rgba(255,255,255,0.02)' : '#fff', border: `1px solid ${isActive ? color.border : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s', boxShadow: isActive ? `0 4px 20px ${color.bg}` : 'none', width: '100%', boxSizing: 'border-box' }}
                    onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = color.border; e.currentTarget.style.background = color.bg } }}
                    onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.02)' : '#fff' } }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: color.bg, border: `1px solid ${color.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: color.text, fontFamily: 'monospace', fontWeight: 800 }}>{categoryIcons[cat] || '#'}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1, color: isActive ? color.text : dark ? '#f1f5f9' : '#0f172a', transition: 'color 0.25s' }}>{items.length}</div>
                      <div style={{ fontSize: 10, fontWeight: 700, marginTop: 2, color: dark ? '#334155' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
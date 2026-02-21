import { useState, useRef } from 'react'
import pic1 from '../../assets/images/pic1.jpg'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'
import pic5 from '../../assets/images/pic5.jpg'
import pic6 from '../../assets/images/pic6.jpg'
import pic7 from '../../assets/images/pic7.jpg'
import { hobbies } from '../../data'

// ── Sample data ────────────────────────────────────────────────────────────────
const travelData = [
  { country: 'Sri Lanka', emoji: '🇱🇰', year: 2001, highlight: 'Home country' },
  { country: 'Australia', emoji: '🇦🇺', year: 2025, highlight: 'Perth, Western Australia' },
  { country: 'Singapore', emoji: '🇸🇬', year: 2025, highlight: 'City exploration' },
  { country: 'Malaysia', emoji: '🇲🇾', year: 2017, highlight: 'Kuala Lumpur city visit' },
]

// Photography grid: 4-col grid, rows carefully balanced to never leave gaps
// Row 1: landscape(2) + portrait(1) + portrait(1) = 4
// Row 2: landscape(2) + landscape(2)              = 4
// Row 3: landscape(2) + landscape(2)              = 4
const photoData = [
  { title: 'ht_pathirana',  category: 'captured by',    color: '#f59e0b', type: 'landscape', img: pic1 },
    { title: 'ht_pathirana',  category: 'captured by',  color: '#06b6d4', type: 'portrait',  img: pic2 },
   { title: 'ht_pathirana',  category: 'captured by',     color: '#8b5cf6', type: 'portrait',  img: pic3 },
   { title: 'ht_pathirana',  category: 'captured by',      color: '#6366f1', type: 'landscape', img: pic4 },
   { title: 'ht_pathirana',  category: 'captured by',   color: '#10b981', type: 'landscape', img: pic5 },
  { title: 'ht_pathirana',  category: 'captured by',     color: '#3b82f6', type: 'landscape', img: pic6 },
  { title: 'ht_pathirana',  category: 'captured by',     color: '#a855f7', type: 'landscape', img: pic7 },
]

const bookData = [
  { title: 'Anna Karenina',  author: 'Leo Tolstoy ',   genre: 'Novel', rating: 5, color: '#6366f1' },
  { title: 'Roman Stories', author: 'Jhumpa Lahiri',      genre: 'short stories',       rating: 5, color: '#06b6d4' },
  { title: 'Amma',                  author: 'maxim gorky ',  genre: 'Novel (Sinhala)',    rating: 5, color: '#f59e0b' },
  { title: 'Atomic Habits',            author: 'James Clear',        genre: 'Self-help',  rating: 5, color: '#10b981' },
  { title: 'Guru Geethaya',      author: 'Chinghiz Aitmatov',           genre: 'Novel',       rating: 5, color: '#8b5cf6' },
  { title: 'How the Steel Was Tempered',                author: ' Nikolai Ostrovsky',        genre: 'Novel',  rating: 5, color: '#f43f5e' },
  { title: 'Steve Jobs',              author: 'Steve Jobs',    genre: 'biography', rating: 5, color: '#0ea5e9' },
  { title: 'Crime & PunCrime and Punishment',         author: 'Fyodor Dostoevsky',          genre: 'Novel',   rating:5, color: '#d97706' },
]


// ── Gallery sub-components ─────────────────────────────────────────────────────
const TravelGallery = ({ dark }) => (
  <div>
    <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
      <div style={{
        padding: '6px 16px', borderRadius: 999,
        background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
        fontSize: 13, fontWeight: 700, color: '#10b981',
      }}>✈️ {travelData.length} Countries Visited</div>
      <div style={{
        padding: '6px 16px', borderRadius: 999,
        background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
        fontSize: 13, fontWeight: 700, color: '#818cf8',
      }}>🌍 4 Continents</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
      {travelData.map((c, i) => (
        <div
          key={i}
          style={{
            background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
            borderRadius: 14, padding: '16px 14px',
            transition: 'all 0.25s ease', cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = dark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.06)'
            e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'
            e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div style={{ fontSize: 28, marginBottom: 8 }}>{c.emoji}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: dark ? '#f1f5f9' : '#0f172a', marginBottom: 4 }}>{c.country}</div>
          <div style={{ fontSize: 11, color: dark ? '#475569' : '#94a3b8', marginBottom: 6, fontFamily: 'monospace' }}>{c.year}</div>
          <div style={{ fontSize: 11, color: dark ? '#64748b' : '#94a3b8', lineHeight: 1.5 }}>{c.highlight}</div>
        </div>
      ))}
    </div>
  </div>
)

// Aspect ratio — landscape uses 16/9, portrait stretches to row height
const ASPECT = {
  landscape: '16 / 9',
}

// Column span — landscape takes 2 cols, portrait takes 1
const COL_SPAN = {
  portrait:  'span 1',
  landscape: 'span 2',
}

const PhotoGallery = ({ dark }) => (
  <div>
    <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
      <div style={{
        padding: '6px 16px', borderRadius: 999,
        background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)',
        fontSize: 13, fontWeight: 700, color: '#a78bfa',
      }}>📷 {photoData.length} Featured Shots</div>
    </div>

    <div className="photo-grid-4" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
    }}>
      {photoData.map((p, i) => (
        <div
          key={i}
          style={{
            gridColumn: COL_SPAN[p.type],
            alignSelf: p.type === 'portrait' ? 'stretch' : 'auto',
          }}
        >
          <div
            style={{
              width: '100%',
              height: p.type === 'portrait' ? '100%' : 'auto',
              aspectRatio: p.type === 'portrait' ? undefined : ASPECT[p.type],
              minHeight: p.type === 'portrait' ? 200 : undefined,
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'default',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              background: `linear-gradient(135deg, ${p.color}22, ${p.color}55)`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.boxShadow = `0 16px 40px ${p.color}44`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Actual photo — protected against right-click save */}
            <img
              src={p.img}
              alt={p.title}
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                pointerEvents: 'none',
              }}
            />
            {/* Transparent overlay — blocks right-click reaching the image */}
            <div
              style={{ position: 'absolute', inset: 0, zIndex: 1 }}
              onContextMenu={e => e.preventDefault()}
            />

            {/* Label overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.72))',
              padding: '32px 14px 14px',
            }}>
              <div style={{
                fontSize: 10, fontWeight: 700, color: p.color,
                marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>
                {p.category}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{p.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const BookGallery = ({ dark }) => (
  <div>
    <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
      <div style={{
        padding: '6px 16px', borderRadius: 999,
        background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
        fontSize: 13, fontWeight: 700, color: '#fbbf24',
      }}>📚 {bookData.length} Books Read</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
      {bookData.map((b, i) => (
        <div
          key={i}
          style={{
            background: dark ? 'rgba(255,255,255,0.03)' : '#fff',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
            borderRadius: 16, overflow: 'hidden',
            transition: 'all 0.25s ease', cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = `0 12px 32px ${b.color}22`
            e.currentTarget.style.borderColor = `${b.color}44`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
          }}
        >
          <div style={{ height: 5, background: `linear-gradient(90deg, ${b.color}, ${b.color}88)` }} />
          <div style={{ padding: '18px 16px' }}>
            <div style={{
              display: 'inline-block', padding: '3px 10px', borderRadius: 999,
              background: `${b.color}18`, border: `1px solid ${b.color}33`,
              fontSize: 10, fontWeight: 700, color: b.color,
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10,
            }}>{b.genre}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: dark ? '#f1f5f9' : '#0f172a', lineHeight: 1.4, marginBottom: 6 }}>
              {b.title}
            </div>
            <div style={{ fontSize: 12, color: dark ? '#64748b' : '#94a3b8', marginBottom: 12 }}>{b.author}</div>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ fontSize: 12, color: s <= b.rating ? '#f59e0b' : dark ? '#1e293b' : '#e2e8f0' }}>★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// ── Gallery map ────────────────────────────────────────────────────────────────
const GALLERIES = { Travel: TravelGallery, Photography: PhotoGallery, Reading: BookGallery }

// ── Main ──────────────────────────────────────────────────────────────────────
const Interests = ({ isDarkMode }) => {
  const dark = isDarkMode
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [openGallery, setOpenGallery] = useState(null)
  const panelRef = useRef(null)

  const handleExplore = (title) => {
    if (!GALLERIES[title]) return
    if (openGallery === title) {
      setOpenGallery(null)
    } else {
      setOpenGallery(title)
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }
  }

  const activeHobby = hobbies.find(h => h.title === openGallery)
  const activeCardIdx = hobbies.findIndex(h => h.title === openGallery)
  const CARD_COUNT = hobbies.length

  return (
    <section
      id="hobbies"
      style={{
        minHeight: '100vh',
        padding: '120px 0 80px',
        background: dark ? '#020617' : '#f8fafc',
        transition: 'background 0.3s',
      }}
    >
      <style>{`
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.08); }
        }
        .hobby-card {
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        .hobby-card:hover { transform: translateY(-8px) scale(1.02); }
        .gallery-panel {
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
        }
        .gallery-panel.open  { max-height: 2400px; opacity: 1; }
        .gallery-panel.closed { max-height: 0; opacity: 0; pointer-events: none; }
        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hobby-cards-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .photo-grid-4  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .hobby-cards-4 { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .photo-grid-4  { grid-template-columns: 1fr !important; }
          .photo-grid-4 > div { grid-column: span 1 !important; }
        }
        @media (max-width: 400px) {
          .hobby-cards-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 12 }}>
            Interests & Hobbies
          </h2>
          <p style={{ color: dark ? '#64748b' : '#94a3b8', fontSize: 17 }}>
            Beyond the code: what keeps me curious and inspired in my downtime.
          </p>
        </div>

        {/* Cards */}
        <div className="hobby-cards-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {hobbies.map((hobby, idx) => {
            const isHovered = hoveredIdx === idx
            const isOpen = openGallery === hobby.title
            const hasGallery = !!GALLERIES[hobby.title]
            const active = isHovered || isOpen

            return (
              <div
                key={hobby.title}
                className="hobby-card"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => hasGallery && handleExplore(hobby.title)}
                style={{
                  cursor: hasGallery ? 'pointer' : 'default',
                  background: active ? '#0f172a' : dark ? '#0f172a' : '#fff',
                  border: `1px solid ${active ? '#1e3a8a' : dark ? '#1e293b' : '#e2e8f0'}`,
                  borderRadius: 20,
                  padding: '40px 28px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: active
                    ? '0 24px 60px rgba(30,58,138,0.4), 0 0 0 1px rgba(59,130,246,0.2)'
                    : dark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                {/* Top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: active ? 'linear-gradient(90deg,#1e3a8a,#3b82f6,#6366f1)' : 'transparent',
                  transition: 'all 0.3s', borderRadius: '20px 20px 0 0',
                }} />

                {/* Grid overlay */}
                {active && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)',
                    backgroundSize: '24px 24px', pointerEvents: 'none', borderRadius: 20,
                  }} />
                )}

                {/* Corner glow */}
                <div style={{
                  position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%',
                  background: active ? 'radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)' : 'transparent',
                  transition: 'all 0.4s', pointerEvents: 'none',
                }} />

                {/* Emoji */}
                <div style={{
                  fontSize: 40, marginBottom: 16, display: 'inline-block',
                  animation: active ? 'floatEmoji 2s ease-in-out infinite' : 'none',
                  filter: active ? 'drop-shadow(0 4px 12px rgba(59,130,246,0.4))' : 'none',
                  transition: 'filter 0.3s',
                }}>{hobby.emoji}</div>

                {/* Title */}
                <h3 style={{
                  fontSize: 18, fontWeight: 700, marginBottom: 12,
                  color: active ? '#fff' : dark ? '#fff' : '#0f172a',
                  transition: 'color 0.3s', position: 'relative',
                }}>
                  {hobby.title}
                  <div style={{
                    position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
                    width: active ? 40 : 0, height: 2, borderRadius: 999,
                    background: 'linear-gradient(90deg,#3b82f6,#6366f1)', transition: 'width 0.35s',
                  }} />
                </h3>

                {/* Desc */}
                <p style={{
                  color: active ? '#94a3b8' : dark ? '#64748b' : '#94a3b8',
                  fontSize: 13, lineHeight: 1.65, transition: 'color 0.3s', position: 'relative', zIndex: 1,
                }}>{hobby.desc}</p>

                {/* Explore btn */}
                {hasGallery && (
                  <button
                    onClick={() => handleExplore(hobby.title)}
                    style={{
                      marginTop: 20,
                      opacity: active ? 1 : 0,
                      transform: active ? 'translateY(0)' : 'translateY(6px)',
                      transition: 'all 0.3s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      width: '100%', background: 'transparent', border: 'none',
                      cursor: 'pointer', padding: 0,
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#3b82f6', textTransform: 'uppercase' }}>
                      {isOpen ? 'Close' : 'Explore'}
                    </span>
                    <svg width="12" height="12" fill="none" stroke="#3b82f6" strokeWidth={2.5} viewBox="0 0 24 24"
                      style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Triangle + Panel wrapper ── */}
        <div style={{ position: 'relative', marginTop: openGallery ? 20 : 0, transition: 'margin-top 0.3s' }}>

          {/* Speech-bubble triangle pointer */}
          {openGallery && (() => {
            const arrowLeft = `calc(${activeCardIdx} * (100% / ${CARD_COUNT}) + (100% / ${CARD_COUNT} / 2))`
            const borderCol = dark ? '#1e3a8a' : 'rgba(99,102,241,0.35)'
            const fillCol   = dark ? '#080e1c' : '#f1f5f9'
            return (
              <>
                <div style={{
                  position: 'absolute', top: 0, left: arrowLeft,
                  transform: 'translateX(-50%) translateY(-100%)',
                  width: 0, height: 0,
                  borderLeft:   '18px solid transparent',
                  borderRight:  '18px solid transparent',
                  borderBottom: `18px solid ${borderCol}`,
                  zIndex: 11, pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', top: 1, left: arrowLeft,
                  transform: 'translateX(-50%) translateY(-100%)',
                  width: 0, height: 0,
                  borderLeft:   '15px solid transparent',
                  borderRight:  '15px solid transparent',
                  borderBottom: `15px solid ${fillCol}`,
                  zIndex: 12, pointerEvents: 'none',
                }} />
              </>
            )
          })()}

          {/* Expandable gallery panel */}
          <div ref={panelRef} className={`gallery-panel ${openGallery ? 'open' : 'closed'}`}>
            {openGallery && GALLERIES[openGallery] && (() => {
              const GalleryComp = GALLERIES[openGallery]
              return (
                <div style={{
                  background: dark ? '#080e1c' : '#f1f5f9',
                  border: `1px solid ${dark ? '#1e3a8a' : 'rgba(99,102,241,0.15)'}`,
                  borderRadius: 20,
                  padding: '40px 48px 48px',
                  position: 'relative',
                }}>
                  {/* Panel header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ fontSize: 32 }}>{activeHobby?.emoji}</span>
                      <div>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: dark ? '#f1f5f9' : '#0f172a', letterSpacing: '-0.02em' }}>
                          My {openGallery}
                        </h3>
                        <p style={{ fontSize: 13, color: dark ? '#64748b' : '#94a3b8', marginTop: 2 }}>
                          {openGallery === 'Travel'      && "Places I've been lucky enough to explore"}
                          {openGallery === 'Photography' && "Moments I've captured through the lens"}
                          {openGallery === 'Reading'     && "Books that have shaped how I think"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenGallery(null)}
                      style={{
                        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                        background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: dark ? '#94a3b8' : '#64748b', fontSize: 16, transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.12)'}
                      onMouseLeave={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}
                    >✕</button>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', marginBottom: 32 }} />

                  <GalleryComp dark={dark} />
                </div>
              )
            })()}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Interests
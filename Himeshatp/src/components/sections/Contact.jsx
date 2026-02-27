import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EmailIcon, LinkedInIcon, GitHubIcon } from '../common/Icons'

// ── Replace these with your actual EmailJS credentials ──────────────────────
const EMAILJS_SERVICE_ID  = 'service_56xz16l'  
const EMAILJS_TEMPLATE_ID = 'template_iucpujs'  
const EMAILJS_PUBLIC_KEY  = 'R-YIfh_xhAk9UZ-R4'   
// ────────────────────────────────────────────────────────────────────────────

const EyeIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const Contact = ({ isDarkMode }) => {
  const dark = isDarkMode
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [viewCount, setViewCount] = useState(null)
  const [countLoaded, setCountLoaded] = useState(false)

  useEffect(() => {
    const trackView = async () => {
      try {
        let current = 0
        try {
          const result = await window.storage.get('portfolio_view_count', true)
          current = parseInt(result.value, 10) || 0
        } catch { current = 0 }
        const newCount = current + 1
        await window.storage.set('portfolio_view_count', String(newCount), true)
        setViewCount(newCount)
        setCountLoaded(true)
      } catch (err) {
        setViewCount(null)
        setCountLoaded(true)
      }
    }
    trackView()
  }, [])

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    setError(null)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          Subject:    `Portfolio contact from ${form.name}`,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  const inputStyle = { width: '100%', padding: '14px 18px', borderRadius: 12, fontSize: 15, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s' }
  const labelStyle = { display: 'block', fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: 8 }

  return (
    <section id="contact" style={{ padding: '80px 0', background: dark ? '#020617' : '#fff', transition: 'background 0.3s' }}>
      <style>{`
        .contact-inner { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); border-radius: 28px; padding: 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; position: relative; overflow: hidden; }
        @media (max-width: 900px) { .contact-inner { grid-template-columns: 1fr; gap: 40px; padding: 36px 24px; border-radius: 20px; } }
        @media (max-width: 480px) { .contact-inner { padding: 28px 16px; } }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="contact-inner">
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', top: -200, right: -100, background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Left – info */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', marginBottom: 28 }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.75 }} />
                <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              </span>
              <EyeIcon />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.02em' }}></span>
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>Let's build something extraordinary together.</h2>
            <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>Whether you have a project in mind, a potential partnership, or just want to say hi, my inbox is always open.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
        
             
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[{ Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/himesha-pathirana-aa3659214/' }, { Icon: GitHubIcon, href: 'https://github.com/himeshapathirana' }].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                ><Icon /></a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: 36, position: 'relative', zIndex: 1 }}>
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'flex-start', justifyContent: 'center',
                height: '100%', gap: 24, padding: '8px 0',
              }}>
                {/* Icon */}
                <div style={{
                  width: 64, height: 64, borderRadius: 18,
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))',
                  border: '1px solid rgba(16,185,129,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <p style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                    Message received!
                  </p>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                  </p>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)' }} />

                {/* Send another */}
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '11px 20px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8', cursor: 'pointer', fontSize: 13, fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8' }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                  Send another message
                </button>
              </div>
            ) : (
              <div ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>NAME</label>
                  <input style={inputStyle} placeholder="Enter Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)')} onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                </div>
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input style={inputStyle} type="email" placeholder="Enter Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)')} onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                </div>
                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea style={{ ...inputStyle, height: 130, resize: 'vertical' }} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)')} onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                </div>

                {/* Error message */}
                {error && (
                  <p style={{ color: '#f87171', fontSize: 13, margin: 0, padding: '10px 14px', background: 'rgba(239,68,68,0.1)', borderRadius: 8, border: '1px solid rgba(239,68,68,0.2)' }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSend}
                  disabled={sending}
                  style={{ width: '100%', padding: 15, borderRadius: 12, background: sending ? 'rgba(99,102,241,0.5)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: sending ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.opacity = '0.9' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  {sending ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                        <path strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default Contact
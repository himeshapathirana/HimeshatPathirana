import { useState } from 'react'
import { EyeIcon, BoltIcon } from '../common/Icons'
import aboutMe from '../../assets/images/aboutme.jpg'

const About = ({ isDarkMode }) => {
  const dark = isDarkMode
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" style={{ minHeight: '100vh', padding: '120px 0 80px', background: dark ? '#020617' : '#fff', transition: 'background 0.3s' }}>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; min-height: 600px; }
        .about-img  { position: relative; height: 580px; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-img  { height: 360px; }
        }
        @media (max-width: 480px) {
          .about-img  { height: 260px; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="about-grid">

          {/* Image side */}
          <div className="about-img">
            <div style={{ position: 'absolute', top: 24, left: 24, width: '100%', height: '100%', borderRadius: 24, background: dark ? 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)' : 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', zIndex: 0 }} />
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 24, overflow: 'hidden', zIndex: 1, cursor: 'pointer' }}
            >
              <img src={aboutMe} alt="About Me" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: isHovered ? 'grayscale(0%) brightness(1.03)' : 'grayscale(100%) brightness(0.85)', transition: 'filter 0.7s ease' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: dark ? 'linear-gradient(to top, rgba(2,6,23,0.6), transparent)' : 'linear-gradient(to top, rgba(255,255,255,0.4), transparent)', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Text side */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: dark ? '#60a5fa' : '#2563eb', textTransform: 'uppercase', marginBottom: 12 }}>WHO I AM</p>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: dark ? '#fff' : '#0f172a', marginBottom: 20, lineHeight: 1.15 }}>About Me</h2>
            <div style={{ width: 56, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', marginBottom: 28 }} />
            <p style={{ fontSize: 16, lineHeight: 1.85, color: dark ? '#94a3b8' : '#475569', marginBottom: 36 }}>
          I am a free minded individual who enjoys embracing adventures in life. In my free time, I love reading, photography, and exploring research based content that helps me grow both personally and intellectually.

Professionally, I have been working in mobile application development for over three years, starting from my internship journey. Throughout this experience, I have gained valuable hands on knowledge, technical skills, and industry exposure.

Beyond my professional growth, these years have also shaped me personally, helping me develop confidence, adaptability, and a strong understanding of real-world and industry environments.
            </p>
            {[
              { Icon: EyeIcon, label: 'Vision', desc: "My vision is to build meaningful and reliable digital solutions based on strong foundations. I aim to continuously grow as a technology professional while creating value through innovation and quality work." },
              { Icon: BoltIcon, label: 'Expertise', desc: 'My expertise is in mobile application development, backed by hands on experience gained over several years. I focus on building user friendly, efficient, and scalable applications while continuously improving my technical skills' },
            ].map(({ Icon, label, desc }) => (
              <div key={label} style={{ display: 'flex', gap: 20, marginBottom: 24, padding: '16px 20px', borderRadius: 14, background: dark ? 'rgba(30,58,138,0.1)' : 'rgba(219,234,254,0.4)', border: `1px solid ${dark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.1)'}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, padding: 10, background: dark ? '#1e3a8a' : '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}><Icon /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: dark ? '#fff' : '#0f172a', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 13, color: dark ? '#64748b' : '#94a3b8', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
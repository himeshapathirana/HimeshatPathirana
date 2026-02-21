import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Interests from '../components/sections/Interests'
import Contact from '../components/sections/Contact'

const Home = ({ isDarkMode, toggleTheme, activeSection }) => {
  return (
    <>
      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Interests isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />

      <footer
        style={{
          textAlign: 'center',
          padding: '32px',
          fontSize: 13,
          color: isDarkMode ? '#334155' : '#94a3b8',
          background: isDarkMode ? '#020617' : '#fff',
          borderTop: `1px solid ${isDarkMode ? '#1e293b' : '#f1f5f9'}`,
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        © {new Date().getFullYear()} himesha_tp. All rights reserved.
      </footer>
    </>
  )
}

export default Home
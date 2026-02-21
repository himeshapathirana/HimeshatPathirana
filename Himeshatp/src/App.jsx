import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import Home from './pages/Home'
import CustomCursor from './components/common/Customcursor'




const App = () => {
  const { isDark, toggleTheme } = useTheme()
  const activeSection = useActiveSection()

  return (
    <div
      style={{
        background: isDark ? '#020617' : '#fff',
        transition: 'background 0.3s',
      }}
    >
      <CustomCursor isDarkMode={isDark} />
      <Home
        isDarkMode={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
    </div>
  )
}

export default App
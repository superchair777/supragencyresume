import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'
import Landing from './pages/Landing'
import Terminal from './pages/Terminal'
import Admin from './pages/Admin'
import Help from './pages/Help'
import AuthProvider from './components/AuthProvider'
import LanguageToggle from './components/LanguageToggle'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-black text-green-400 font-mono">
            <LanguageToggle />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/terminal" element={<Terminal />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App

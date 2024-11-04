import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSectiom'
import ContactSection from './components/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
  </StrictMode>,
)

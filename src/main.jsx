import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSectiom'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
  </StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Background } from './components/background'

function App() {
  return (
    <Background 
      src={heroImg}
      overlay={true}
      overlayOpacity={0.4}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Hello Tailwind CSS! 🎨
        </h1>
        <p className="text-lg text-gray-200">
          Bienvenue sur votre app
        </p>
      </div>
    </Background>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <svg
        className="-z-10 absolute left-0 top-0 hidden md:flex"
        width="100vw"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />  {/* violet-500 */}
            <stop offset="100%" stop-color="#d946ef" /> {/* fuchsia-500 */}
          </linearGradient>
        </defs>
        <path
          d="
            M0,20
            C12.5,18 25,20 37.5,22
            C50,24 62.5,22 75,20
            C87.5,18 93,19 100,20
            L100,-20
            L0,-20
            Z"
          transform="rotate(270, 50, 50) scale(1, 2)"
          fill="url(#waveGradient)"
        />
      </svg>
      <div className="flex flex-col md:flex-row m-5 md:m-20">
        <div className="items-center md:basis-1/2 mb-10 md:mb-0 md:mr-20 md:max-w-[40%] text-center md:text-left mx-auto md:mx-0">
          <h1 className="mb-10 5xl:my-16 3xl:my-12 lg:my-4 4xl:text-[6rem] 3xl:text-[4rem] xl:text-[2rem] text-white">
            Takun Purba
          </h1>
          <p className="text-white 3xl:text-3xl xl:text-lg">
            My dream is to be able to create something amazing for the people who believe in me. 
          </p>
        </div>
        <div className="basis-1/2 flex flex-col items-center md:ml-12 mb-10 md:mb-0">
          <h1 className="mb-10 text-black 4xl:text-[6rem] 3xl:text-[4rem] xl:text-[2rem] text-center md:text-right mx-auto md:mx-0">
            Intermountain Health Clinic 
          </h1>
        </div>
      </div>
      
      

    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import ImageCircle from './components/main/ImageCircle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ImageCircle urlImage='https://live.staticflickr.com/8258/8683827826_7345599262_b.jpg' borderColor='red'  />
    </>
  )
}

export default App

import React from 'react'
import HomePage from './pages/Home/HomePage'
import { Routes ,Route} from 'react-router-dom'
import HeaderSection from './components/headerSection/HeaderSection'

const App = () => {
  return (
    <>
    <HeaderSection/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
    
  )
}

export default App
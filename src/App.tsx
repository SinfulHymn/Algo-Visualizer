import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-screen bg-slate-100'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App

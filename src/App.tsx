import { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentRouter from 'components/ContentRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-screen '>
      <Header />
      <ContentRouter />
      <Footer />
    </div>
  )
}

export default App

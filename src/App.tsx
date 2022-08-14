import { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentRouter from 'components/ContentRouter'

function App() {
  return (
    <div className='flex flex-col h-screen '>
      <Header />
      <ContentRouter />
      <Footer />
    </div>
  )
}

export default App

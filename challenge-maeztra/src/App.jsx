

import './App.css'
import Header from './components/Header'

import Infocard from './components/Infocard'
import Tips from './components/Tips'
import Brands from './components/Brands'
function App() {

  return (
    <section className='bg-[#353535] h-screen w-screen'>
      {/* Cabeçalho */}
      <Header></Header>

      <main className='bg-white'>
        <Infocard />

        <Tips />

        <Brands />

      </main>
    </section>

  )
}

export default App

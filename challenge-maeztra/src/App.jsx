

import './App.css'
import Header from './components/Header'
import MainBanner from './assets/main-banner.png'
function App() {

  return (


    <main className='bg-[#353535] h-screen w-screen'>


      {/* Cabeçalho */}
      <Header></Header>

      <section>

        <img className='w-full' src={MainBanner} alt="Main banner" srcset="" />
      </section>
    </main>

  )
}

export default App

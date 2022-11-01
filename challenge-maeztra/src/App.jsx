

import './App.css'
import Header from './components/Header'
import World from './assets/world.png'
import InforCard from './components/InforCard'
function App() {

  return (


    <section className='bg-[#353535] h-screen w-screen'>


      {/* Cabeçalho */}
      <Header></Header>

      <main className='bg-white'>
        <InforCard />

        <section className='my-6'>
          <h2 className='text-[#353535] font-bold text-base text-center'>Porque comprar na Maeztra?</h2>
          <div className='my-[21px] bg-[#efefef] py-4 px-[1.6rem]'>
            <img src={World} alt="" />
          </div>
        </section>
      </main>
    </section>

  )
}

export default App

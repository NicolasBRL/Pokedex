import React from 'react'
import Navbar from '../components/Navbar'
import PokemonList from '../components/PokemonList'
import Waves from '../components/Waves'

const Home = () => {
  console.log('Home');
  return (
    <div>
        <section id="hero">
            <Navbar />

            <div className='inner-header flex'>
                <h1>Bienvenue sur la page d'accueil</h1>
            </div>
            <Waves />
        </section>

        <section id="content" className='flex'>
            <PokemonList />
        </section>
    </div>
  )
}

export default Home
import React from 'react'
import"./App.css"
import { NavBar } from './componentes/navbar'
import { ExtensionCard } from './componentes/ExtensionCard'
import { LoginForm } from './componentes/LoginForm'
import { ProductCard } from './componentes/ProductCard'
export const App = () => {
  return (
    <>
    <h1>PAGIA PRINCIPAL App.jsx </h1>
    <NavBar/>
    <div className='containerCards'>
          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

          <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

        <ExtensionCard
        cardTitle="SPOTIFY"
        cardImage=""
        cardDescription="/>"
        ExtensionCard/>

      </div>
      <LoginForm/>
      <ProductCard/>
    </>
    
  )
}



































































































/* import { InfoCard } from "./componentes/infoCard"

import { UserCard } from "./componentes/UserCard"
import { InfoPelicula } from "./componentes/InfoPelicula"
import "./App.css"

 
export function App(){
  return (
    <div>
      <h1>App</h1>
      <InfoCard />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/11.jpeg"
        userName="Rick Sanchez"
      />
      <InfoPelicula 
        nombrepelicula="Titanes del Pacífico"
        imagen="https://images.justwatch.com/poster/265513452/s166/pacific-rim.avif"
        peliculadescripcion="Titanes del Pacífico (Pacific Rim) trata sobre una guerra entre la humanidad y monstruos gigantes llamados Kaiju, que emergen de una brecha interdimensional en el océano. Para enfrentarlos, los humanos crean enormes robots llamados Jaegers, pilotados por dos personas conectadas mentalmente. La historia sigue a un expiloto y a una joven novata que deben unirse para pilotar un viejo Jaeger y salvar al mundo de la destrucción total."
        button="Ver Mas Sobre la Pelicula"

      />
      <InfoPelicula 
        nombrepelicula="Avatar"
        imagen="https://images.justwatch.com/poster/300326654/s166/avatar.avif"
        peliculadescripcion="Avatar es una película de ciencia ficción dirigida por James Cameron que se desarrolla en el año 2154 en Pandora, una luna exuberante habitada por una especie nativa llamada los Na'vi. La historia sigue a Jake Sully, un ex-marine parapléjico que se une al programa Avatar para interactuar con los Na'vi y acaba involucrándose en un conflicto entre los humanos y los habitantes de Pandora."
        button="Ver Mas Sobre la Pelicula"

      />
      <InfoPelicula 
        nombrepelicula="Zathura"
        imagen="https://images.justwatch.com/poster/239970618/s166/zathura-una-aventura-espacial.avif"
        peliculadescripcion="Zathura: Una aventura espacial es una película de aventuras y ciencia ficción que sigue a dos hermanos, Danny y Walter, quienes descubren un antiguo juego de mesa llamado Zathura. Al comenzar a jugar, se ven transportados al espacio exterior, enfrentándose a peligros cósmicos y criaturas alienígenas mientras intentan completar el juego para regresar a casa."
        button="Ver Mas Sobre la Pelicula"

      />
      <InfoPelicula 
        nombrepelicula="La Liga de la Justicia"
        imagen="https://images.justwatch.com/poster/243943467/s166/zack-snyders-justice-league.avif"
        peliculadescripcion="La Liga de la Justicia es una película de superhéroes que reúne a varios personajes icónicos de DC Comics, como Batman, Superman"
        button="Ver Mas Sobre la Pelicula"

      />

    </div>

  )
} */
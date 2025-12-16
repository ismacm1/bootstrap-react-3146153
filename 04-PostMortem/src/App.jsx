
import Colapso from './Componentes/Colapso.jsx';
import Tienda from './Componentes/Tienda.jsx';
import Personajes from './Componentes/Personajes.jsx';
import Footer from './Componentes/Footer.jsx';

const App = () => {
  return ( 
    <>
     
      <Colapso />
      <Personajes />
      <Tienda titulo="TIENDA" 
              texto= "Post Mortem es más que una tienda: es el inicio del fin. Elige lo esencial y sé parte de Colapso."/>
      <Footer />
    </>
  );
};

export default App;


/* Post Mortem es más que una tienda: es el inicio del fin. Elige lo esencial y sé parte de Colapso. */
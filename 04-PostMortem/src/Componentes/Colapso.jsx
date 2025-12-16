export default function Colapso() {
  
  return (
    <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor: '#000000', padding: '80px 0', color: '#ffffff', minHeight: '100vh' }}>
      <div className="container">
        
        <div className="row text-center mb-5">
          <div className="col-12">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bolder', letterSpacing: '5px', color: '#ffffff', marginBottom: '5px', display: 'inline-block' }}>COLAPS</h1>
                <img src="/PLANETA.jpeg" style={{ width: '35px', height: '35px', objectFit: 'contain', marginTop: '-5px' }} />
            </div>
            <p className="text-white text-uppercase" style={{ fontSize: '0.9rem' }}>
              conoce nuestro proyecto insignia. <span style={{ fontSize: '0.9rem', fontWeight:'bold' }} >COLAPSO</span>
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <p className="text-white" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Este cómic nació de nuestras experiencias con la vida digital y de preguntarnos qué pasaría si un día todo eso desapareciera. Usamos el arte, la escritura y la imaginación para crear un mundo que, aunque ficticio, refleja muchas realidades actuales.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid #ffffff', paddingBottom: '10px', marginBottom: '40px' }}>IMÁGENES ALUCIVAS</h2>
            
            <div 
              style={{ backgroundColor: '#ffffffff', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '800px', margin: '0 auto' }} 
              className="d-flex flex-row"
            >
              
              <div style={{ fontSize: '3rem', color: '#ff0000', cursor: 'pointer', padding: '0 10px' }}></div>

              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap flex-md-nowrap ">
                 <img src="/PRIMERA.jpeg" className="img-fluid rounded-5"  style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover',  }} />
                <img src="/TERCERA.jpeg" className="img-fluid rounded-5"  style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover', }}  />
                <img src="/SEGUNDA.jpeg" className="img-fluid rounded-5" style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover', }} />
              </div>
              
              <div style={{ fontSize: '3rem', color: '#ff0000', cursor: 'pointer', padding: '0 10px' }}></div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-5 pt-5">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center align-items-center mb-4">
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold',  }}>CONTEXTO DEL MUNDO</h2>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff0000', marginLeft: '10px' }}>( EN EL CÓMIC )</h2>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <img src="/LOGO.jpeg" style={{ width: '40px', height: 'auto' }} /> 
            </div>
          </div>
          <div className="col-12 col-lg-8 text-center">
            <p className="text-white" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Este cómic se desarrolla en un mundo post-apocalíptico, después de un colapso tecnológico que dejó a la ciudad de Medellín en ruinas. No hay luz, no hay señal, y la mayoría de las personas han desaparecido. Las calles están vacías, los edificios destruidos y la naturaleza empieza a invadir todo. En este ambiente, los pocos sobrevivientes tienen que aprender a vivir sin tecnología y volver a lo esencial: el fuego, la comida y la compañía de otros.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default function Personajes() {
  
  return (
    <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor: '#000000', padding: '80px 0', minHeight: '100vh', color: '#ffffff' }}>
      <div className="container">
        
        
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 style={{ fontSize: '3rem', fontWeight: 'bolder', color: '#ff0000', textTransform: 'uppercase', letterSpacing: '5px' }}>PERSONAJES</h1>
          </div>
        </div>

        
        <div className="row justify-content-center text-center g-5 mb-5 pb-5">
            
          
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src="/ALEJANDRO.jpeg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '20px' }} className="img-fluid" />
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px', maxWidth: '300px' }}>Adolescente introvertido, adicto a los videojuegos y al principio es un desconectado del mundo real, pero tras el colapso comienza una transformación interna hacia la empatía y la supervivencia. Representa la transición entre la virtualidad y el instinto humano.</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase' }}>Alejandro</h3>
            </div>

           
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src="/ABRIL.jpeg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '20px' }} className="img-fluid" />
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px', maxWidth: '300px' }}>Adolescente callada, observadora y empática. Representa la serenidad en medio del caos. Ayuda a Alejandro a adaptarse, y establece un vínculo emocional que humaniza la historia. Valiente a su manera, conecta con la naturaleza y el conocimiento ancestral.</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase' }}>Abril</h3>
            </div>

         
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src="/ALEJANDRO.jpeg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '20px' }} className="img-fluid" />
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px', maxWidth: '300px' }}>Hombre rudo, protector y con un pasado posiblemente militar o rural. Armado con machete, actúa como figura de autoridad en el nuevo orden. Desconfiado al inicio, se convierte en un mentor para Alejandro, guiándolo con firmeza.</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase' }}>Dario</h3>
            </div>

        </div>

        
        <div className="row text-center pt-5">
            <div className="col-12">
                <p style={{ fontSize: '2rem', color: '#9e4e4eff', marginBottom: '30px' }}>Cuando la tecnología cae, lo único que queda es sobrevivir... y sentir.</p>
                <button style={{ backgroundColor: '#000000', color: '#ffffff', border: '2px solid #ffffff', padding: '10px 30px', textTransform: 'uppercase', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}>VER COMIC INTERACTIVO</button>
            </div>
        </div>

      </div>
    </div>
  );
}
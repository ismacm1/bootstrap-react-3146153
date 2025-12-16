import { useState } from "react";
export default function Footer() {

  const [email, setEmail] = useState("");
  const [mostrarPrompt, setMostrarPrompt] = useState(false);


  return (
    <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor: '#D3D3D3', padding: '60px 0', color: '#000000' }}>
      <div className="container">
        
        <div className="row justify-content-between g-5">
            
            
            <div className="col-12 col-md-4">
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px' }}>Contáctanos</h2>
                
              
                <div className="d-flex align-items-center mb-3">
                    
                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📞</span>
                    <p style={{ margin: '0', fontSize: '1rem' }}>Llama al 321 3434248</p>
                </div>
                
                
                <div className="d-flex align-items-center mb-3">
                  
                  
                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}> <i className="bi bi-whatsapp"></i>  </span> 
                    <p style={{ margin: '0', fontSize: '1rem' }}>Escríbenos al WhatsApp</p>
                </div>
                
                
                <div className="d-flex align-items-center mb-3">
                    
                    <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>✉️</span> 
                    <p style={{ margin: '0', fontSize: '1rem' }}>Envíanos un Correo Electrónico</p>
                </div>
            </div>

           
            <div className="col-12 col-md-7">
                
                
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px' }}>
                    Síguenos en <span style={{ color: '#ff0000' }}>Nuestras Redes</span>
                </h2>
                <div className="d-flex mb-5">
                   
                    <span style={{ fontSize: '2.5rem', marginRight: '20px', cursor: 'pointer', color: '#25D366' }}>
                        <i className="bi bi-whatsapp"></i> 
                        
                    </span> 

                    
                    <span style={{ fontSize: '2.5rem', marginRight: '20px', cursor: 'pointer', color: '#1877F2' }}>
                        <i className="bi bi-facebook"></i> 
                        
                    </span> 

                    
                    <span style={{ fontSize: '2.5rem', marginRight: '20px', cursor: 'pointer', color: '#C13584' }}>
                        <i className="bi bi-instagram"></i> 
                       
                    </span>
                </div>

               
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000000', marginBottom: '10px' }}>Dirección de Correo Electrónico</h3>
                <div style={{ paddingBottom: '5px', borderBottom: '1px solid #000000', maxWidth: '350px' }}>
                    <input
                         type="email"
                         placeholder="Introduce tu correo"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         onBlur={() => setMostrarPrompt(true)}
                         style={{ 
                         background: 'transparent', 
                         border: 'none', 
                         width: '100%', 
                         padding: '5px 0', 
                         fontSize: '1rem', 
                         outline: 'none' 
                         }}
                        />

                 </div>
                 {mostrarPrompt && (
                 <p
                 style={{
                 fontSize: '0.9rem',
                 marginTop: '10px',
                 color: email.includes("@") ? "green" : "red"
                  }}
                 >
                  {email.includes("@")
                  ? "✔ Correo registrado correctamente"
                  : "✖ Correo inválido"}
                 </p>
                 )}

            </div>

        </div>
        
      </div>
    </div>
  );
}
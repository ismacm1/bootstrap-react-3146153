import React from 'react'
import "../stylesheats/ExtensionCard.css"

export const ExtensionCard = ({cardTitle, cardImage, cardDescripcion}) => {
  return (        
    <>
    <h1 className='title'>Card Extension</h1>
    
    <div className="card">
    <div className="info">
    <div className="icon">🧭</div>
    <div>
      <h3 className='titulo'>{cardTitle}</h3>
      <p className='desc'>{cardDescripcion}</p>
    </div>
    </div>
    <div className="actions">
    <button>Remove</button>
    <label className="switch">
      <input type="checkbox" checked />
      <span className="slider"></span>
    </label>
    </div>
    </div>
    </>
  )
}

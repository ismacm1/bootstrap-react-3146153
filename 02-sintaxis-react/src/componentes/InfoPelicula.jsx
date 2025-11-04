export function InfoPelicula ({nombrepelicula,imagen,peliculadescripcion,button}) {
    return (
        <div>
            <h1>{nombrepelicula}</h1>
            <img src={imagen} alt="" />
            <p>{peliculadescripcion}</p>
            <button>{button}</button>
        </div>
    )
}
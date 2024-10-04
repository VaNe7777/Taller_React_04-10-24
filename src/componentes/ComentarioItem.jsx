import {React, useState} from 'react'

const ComentarioItem = ({ comentario, calificacion }) => {
  

    // Manejo del estado en un comentario:
    // comentario y calificación como atributos 
    // mediante el uso de Estados

    const [ comment, setComment ] = useState(comentario)
    const [ rating, setRating ] = useState(calificacion) 



    const cambiarRating = () => {
        setRating((prev) => prev + 1)
    }


  
    return (
    <div className='card'>
        <div className='num-display'>{ rating }</div>
        <div className='text-display'>{ comment }</div>
        <button onClick={cambiarRating}>
            Cambiar Calificación
        </button>
    </div>
    
  )
}

export default ComentarioItem
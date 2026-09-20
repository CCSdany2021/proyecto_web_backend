import React, { useState } from 'react';

const FormularioComentarios = ({ dispositivoId, onComentarioAgregado }) => {
    const [autor, setAutor] = useState('');
    const [contenido, setContenido] = useState('');
    const [calificacion, setCalificacion] = useState(5);
    const [enviando, setEnviando] = useState(false);

    const handleEnviar = async (e) => {
        e.preventDefault();
        
        if (!autor.trim() || !contenido.trim()) {
            alert('Por favor completa todos los campos');
            return;
        }

        try {
            setEnviando(true);
            
            // Aquí irá la lógica para enviar el comentario al backend
            const nuevoComentario = {
                dispositivo_id: dispositivoId,
                autor: autor,
                contenido: contenido,
                calificacion: parseInt(calificacion),
                fecha_creacion: new Date().toISOString()
            };

            console.log('Comentario a enviar:', nuevoComentario);
            
            // Por ahora solo limpiamos el formulario
            setAutor('');
            setContenido('');
            setCalificacion(5);
            
            if (onComentarioAgregado) {
                onComentarioAgregado(nuevoComentario);
            }
            
            alert('Comentario enviado correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar comentario');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h3>Agregar Comentario</h3>
            <form onSubmit={handleEnviar}>
                <div>
                    <label>Nombre: </label>
                    <input 
                        type="text" 
                        value={autor} 
                        onChange={(e) => setAutor(e.target.value)}
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label>Comentario: </label>
                    <textarea 
                        value={contenido} 
                        onChange={(e) => setContenido(e.target.value)}
                        placeholder="Tu comentario..."
                        rows="4"
                    />
                </div>

                <div>
                    <label>Calificación: </label>
                    <select value={calificacion} onChange={(e) => setCalificacion(e.target.value)}>
                        <option value="1">⭐ 1 - Muy malo</option>
                        <option value="2">⭐⭐ 2 - Malo</option>
                        <option value="3">⭐⭐⭐ 3 - Regular</option>
                        <option value="4">⭐⭐⭐⭐ 4 - Bueno</option>
                        <option value="5">⭐⭐⭐⭐⭐ 5 - Excelente</option>
                    </select>
                </div>

                <button type="submit" disabled={enviando} style={{ marginTop: '10px', padding: '10px 20px' }}>
                    {enviando ? 'Enviando...' : 'Enviar Comentario'}
                </button>
            </form>
        </div>
    );
};

export default FormularioComentarios;
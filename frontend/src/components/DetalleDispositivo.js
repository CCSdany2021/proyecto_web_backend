import React, { useState, useEffect } from 'react';
import { obtenerDispositivoPorId, obtenerComentariosPorDispositivo } from '../services/api';

const DetalleDispositivo = ({ dispositivoId, onVolver, marcas = [], categorias = [] }) => {
    const [dispositivo, setDispositivo] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        cargarDetalles();
    }, [dispositivoId]);

    const cargarDetalles = async () => {
        try {
            setCargando(true);
            const dispositivo = await obtenerDispositivoPorId(dispositivoId);
            setDispositivo(dispositivo);
            
            const comentarios = await obtenerComentariosPorDispositivo(dispositivoId);
            setComentarios(comentarios);
        } catch (err) {
            setError('Error al cargar detalles');
            console.error(err);
        } finally {
            setCargando(false);
        }
    };

    if (cargando) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (!dispositivo) return <div>Dispositivo no encontrado</div>;

    const nombreMarca = marcas.find((m) => String(m.id) === String(dispositivo.marca_id))?.nombre || 'Sin marca';
    const nombreCategoria = categorias.find((c) => String(c.id) === String(dispositivo.categoria_id))?.nombre || 'Sin categoría';

    return (
        <div>
            <button onClick={onVolver}>← Volver</button>

            {dispositivo.imagen && (
                <img src={dispositivo.imagen} alt={dispositivo.nombre} style={{ width: '100%', maxWidth: '400px', height: '260px', objectFit: 'cover', borderRadius: '8px', display: 'block', margin: '15px 0' }} />
            )}

            <h1>{dispositivo.nombre}</h1>
            <p><strong>Precio:</strong> ${dispositivo.precio}</p>
            <p><strong>Descripción:</strong> {dispositivo.descripcion}</p>
            <p><strong>Fecha de Lanzamiento:</strong> {new Date(dispositivo.fecha_lanzamiento).toLocaleDateString()}</p>
            <p><strong>Marca:</strong> {nombreMarca}</p>
            <p><strong>Categoría:</strong> {nombreCategoria}</p>

            <h3>Comentarios ({comentarios.length})</h3>
            {comentarios.map((comentario) => (
                <div key={comentario.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px' }}>
                    <p><strong>{comentario.autor}</strong> - ⭐ {comentario.calificacion}/5</p>
                    <p>{comentario.contenido}</p>
                    <small>{new Date(comentario.fecha_creacion).toLocaleDateString()}</small>
                </div>
            ))}
        </div>
    );
};

export default DetalleDispositivo;
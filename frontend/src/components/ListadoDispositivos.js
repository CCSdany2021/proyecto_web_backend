import React, { useState, useEffect, useMemo } from 'react';
import { obtenerDispositivos } from '../services/api';

const ImagenDispositivo = ({ dispositivo }) => {
    if (!dispositivo.imagen) return null;
    return <img src={dispositivo.imagen} alt={dispositivo.nombre} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />;
};

const ListadoDispositivos = ({ onSeleccionar, marcas = [], categorias = [], filtros = {}, busqueda = '', ordenPor = 'fecha_desc' }) => {
    const [dispositivos, setDispositivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        cargarDispositivos();
    }, []);

    const cargarDispositivos = async () => {
        try {
            setCargando(true);
            const datos = await obtenerDispositivos();
            setDispositivos(datos);
        } catch (err) {
            setError('Error al cargar dispositivos');
            console.error(err);
        } finally {
            setCargando(false);
        }
    };

    const nombreMarca = useMemo(
        () => (marcaId) => marcas.find((m) => String(m.id) === String(marcaId))?.nombre || 'Sin marca',
        [marcas]
    );
    const nombreCategoria = useMemo(
        () => (categoriaId) => categorias.find((c) => String(c.id) === String(categoriaId))?.nombre || 'Sin categoría',
        [categorias]
    );

    const dispositivosVisibles = useMemo(() => {
        let resultado = dispositivos.filter((d) => {
            if (filtros.marcaId && String(d.marca_id) !== String(filtros.marcaId)) return false;
            if (filtros.categoriaId && String(d.categoria_id) !== String(filtros.categoriaId)) return false;
            if (filtros.precioMin != null && d.precio < filtros.precioMin) return false;
            if (filtros.precioMax != null && d.precio > filtros.precioMax) return false;
            if (busqueda && !d.nombre?.toLowerCase().includes(busqueda.toLowerCase())) return false;
            return true;
        });

        resultado = [...resultado].sort((a, b) => {
            switch (ordenPor) {
                case 'fecha_asc':
                    return new Date(a.fecha_lanzamiento) - new Date(b.fecha_lanzamiento);
                case 'fecha_desc':
                    return new Date(b.fecha_lanzamiento) - new Date(a.fecha_lanzamiento);
                case 'marca':
                    return nombreMarca(a.marca_id).localeCompare(nombreMarca(b.marca_id));
                case 'categoria':
                    return nombreCategoria(a.categoria_id).localeCompare(nombreCategoria(b.categoria_id));
                case 'precio_asc':
                    return a.precio - b.precio;
                case 'precio_desc':
                    return b.precio - a.precio;
                default:
                    return 0;
            }
        });

        return resultado;
    }, [dispositivos, filtros, busqueda, ordenPor, nombreMarca, nombreCategoria]);

    if (cargando) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Dispositivos Disponibles ({dispositivosVisibles.length})</h2>
            {dispositivosVisibles.length === 0 ? (
                <p>No se encontraron dispositivos con los filtros seleccionados.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {dispositivosVisibles.map((dispositivo) => (
                        <div key={dispositivo.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                            <ImagenDispositivo dispositivo={dispositivo} />
                            <h3>{dispositivo.nombre}</h3>
                            <p><strong>Marca:</strong> {nombreMarca(dispositivo.marca_id)}</p>
                            <p><strong>Tipo:</strong> {nombreCategoria(dispositivo.categoria_id)}</p>
                            <p><strong>Precio:</strong> ${dispositivo.precio}</p>
                            <p><strong>Lanzamiento:</strong> {new Date(dispositivo.fecha_lanzamiento).toLocaleDateString()}</p>
                            <p><strong>Descripción:</strong> {dispositivo.descripcion}</p>
                            <button onClick={() => onSeleccionar(dispositivo.id)}>
                                Ver Detalle
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListadoDispositivos;
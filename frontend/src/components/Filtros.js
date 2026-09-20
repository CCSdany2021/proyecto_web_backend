import React, { useState } from 'react';

const Filtros = ({ marcas = [], categorias = [], onFiltrar, onBuscar, onOrdenar }) => {
    const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioMin, setPrecioMin] = useState('');
    const [precioMax, setPrecioMax] = useState('');

    const handleFiltrar = () => {
        onFiltrar({
            marcaId: marcaSeleccionada,
            categoriaId: categoriaSeleccionada,
            precioMin: precioMin ? parseFloat(precioMin) : null,
            precioMax: precioMax ? parseFloat(precioMax) : null
        });
    };

    return (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3>Buscar y Filtrar</h3>

            <div style={{ marginBottom: '15px' }}>
                <label>Buscar: </label>
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    onChange={(e) => onBuscar(e.target.value)}
                    style={{ padding: '6px', width: '250px' }}
                />
            </div>

            <div>
                <label>Marca: </label>
                <select value={marcaSeleccionada} onChange={(e) => setMarcaSeleccionada(e.target.value)}>
                    <option value="">Todas</option>
                    {marcas.map((marca) => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Categoría: </label>
                <select value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
                    <option value="">Todas</option>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Precio Mínimo: </label>
                <input type="number" value={precioMin} onChange={(e) => setPrecioMin(e.target.value)} />
            </div>

            <div>
                <label>Precio Máximo: </label>
                <input type="number" value={precioMax} onChange={(e) => setPrecioMax(e.target.value)} />
            </div>

            <div style={{ marginTop: '10px' }}>
                <label>Ordenar por: </label>
                <select defaultValue="fecha_desc" onChange={(e) => onOrdenar(e.target.value)}>
                    <option value="fecha_desc">Fecha de lanzamiento (más recientes)</option>
                    <option value="fecha_asc">Fecha de lanzamiento (más antiguos)</option>
                    <option value="marca">Marca (A-Z)</option>
                    <option value="categoria">Tipo (A-Z)</option>
                    <option value="precio_asc">Precio (menor a mayor)</option>
                    <option value="precio_desc">Precio (mayor a menor)</option>
                </select>
            </div>

            <button onClick={handleFiltrar} style={{ marginTop: '10px', padding: '10px 20px' }}>
                Aplicar Filtros
            </button>
        </div>
    );
};

export default Filtros;
import React, { useState, useEffect } from 'react';
import './App.css';
import ListadoDispositivos from './components/ListadoDispositivos';
import DetalleDispositivo from './components/DetalleDispositivo';
import Filtros from './components/Filtros';
import FormularioComentarios from './components/FormularioComentarios';
import { obtenerMarcas, obtenerCategorias } from './services/api';

function App() {
  const [vistaActual, setVistaActual] = useState('listado'); // 'listado' o 'detalle'
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [filtros, setFiltros] = useState({ marcaId: '', categoriaId: '', precioMin: null, precioMax: null });
  const [busqueda, setBusqueda] = useState('');
  const [ordenPor, setOrdenPor] = useState('fecha_desc');

  useEffect(() => {
    obtenerMarcas().then(setMarcas);
    obtenerCategorias().then(setCategorias);
  }, []);

  const handleSeleccionar = (dispositivoId) => {
    setDispositivoSeleccionado(dispositivoId);
    setVistaActual('detalle');
  };

  const handleVolver = () => {
    setVistaActual('listado');
    setDispositivoSeleccionado(null);
  };

  return (
    <div className="App">
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>🛍️ Tienda de Dispositivos Inteligentes</h1>
      </header>

      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {vistaActual === 'listado' ? (
          <>
            <Filtros
              marcas={marcas}
              categorias={categorias}
              onFiltrar={setFiltros}
              onBuscar={setBusqueda}
              onOrdenar={setOrdenPor}
            />
            <ListadoDispositivos
              onSeleccionar={handleSeleccionar}
              marcas={marcas}
              categorias={categorias}
              filtros={filtros}
              busqueda={busqueda}
              ordenPor={ordenPor}
            />
          </>
        ) : (
          <>
            <DetalleDispositivo
              dispositivoId={dispositivoSeleccionado}
              onVolver={handleVolver}
              marcas={marcas}
              categorias={categorias}
            />
            <FormularioComentarios
              dispositivoId={dispositivoSeleccionado}
              onComentarioAgregado={(comentario) => console.log('Comentario:', comentario)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
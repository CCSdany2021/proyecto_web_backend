const API_BASE_URL = 'http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT';

// Obtener todos los dispositivos
export const obtenerDispositivos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/dispositivos`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Obtener dispositivo por ID
export const obtenerDispositivoPorId = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/dispositivos/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

// Obtener todas las marcas
export const obtenerMarcas = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/marcas`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Obtener todas las categorías
export const obtenerCategorias = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/categorias`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Obtener todos los comentarios
export const obtenerComentarios = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/comentarios`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Obtener comentarios por dispositivo ID
export const obtenerComentariosPorDispositivo = async (dispositivoId) => {
    try {
        const comentarios = await obtenerComentarios();
        return comentarios.filter(c => c.dispositivo_id === dispositivoId);
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
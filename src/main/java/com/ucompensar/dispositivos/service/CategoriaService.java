package com.ucompensar.dispositivos.service;

import com.ucompensar.dispositivos.dao.CategoriaDAO;
import com.ucompensar.dispositivos.model.Categoria;
import java.util.List;

public class CategoriaService {
    
    private CategoriaDAO categoriaDAO = new CategoriaDAO();
    
    public List<Categoria> obtenerTodos() {
        return categoriaDAO.obtenerTodos();
    }
    
    public Categoria obtenerPorId(int id) {
        return categoriaDAO.obtenerPorId(id);
    }
}
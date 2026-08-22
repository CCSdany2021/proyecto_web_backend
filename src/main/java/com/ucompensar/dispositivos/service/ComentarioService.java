package com.ucompensar.dispositivos.service;

import com.ucompensar.dispositivos.dao.ComentarioDAO;
import com.ucompensar.dispositivos.model.Comentario;
import java.util.List;

public class ComentarioService {
    
    private ComentarioDAO comentarioDAO = new ComentarioDAO();
    
    public List<Comentario> obtenerTodos() {
        return comentarioDAO.obtenerTodos();
    }
    
    public Comentario obtenerPorId(int id) {
        return comentarioDAO.obtenerPorId(id);
    }
}
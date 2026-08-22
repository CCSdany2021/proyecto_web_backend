package com.ucompensar.dispositivos.service;

import com.ucompensar.dispositivos.dao.MarcaDAO;
import com.ucompensar.dispositivos.model.Marca;
import java.util.List;

public class MarcaService {
    
    private MarcaDAO marcaDAO = new MarcaDAO();
    
    public List<Marca> obtenerTodos() {
        return marcaDAO.obtenerTodos();
    }
    
    public Marca obtenerPorId(int id) {
        return marcaDAO.obtenerPorId(id);
    }
}
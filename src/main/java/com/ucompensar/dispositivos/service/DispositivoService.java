package com.ucompensar.dispositivos.service;

import java.util.List;

import com.ucompensar.dispositivos.dao.DispositivoDAO;
import com.ucompensar.dispositivos.model.Dispositivo;

public class DispositivoService {
    
    private DispositivoDAO dispositivoDAO = new DispositivoDAO();
    
    public List<Dispositivo> obtenerTodos() {
        return dispositivoDAO.obtenerTodos();
    }
    
    public Dispositivo obtenerPorId(int id) {
        return dispositivoDAO.obtenerPorId(id);
    }
}
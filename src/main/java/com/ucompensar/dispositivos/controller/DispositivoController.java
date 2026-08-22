package com.ucompensar.dispositivos.controller;

import java.util.List;

import com.ucompensar.dispositivos.model.Dispositivo;
import com.ucompensar.dispositivos.service.DispositivoService;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("api/dispositivos")
public class DispositivoController {
    
    private DispositivoService service = new DispositivoService();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Dispositivo> obtenerTodos() {
        return service.obtenerTodos();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Dispositivo obtenerPorId(@PathParam("id") int id) {
        return service.obtenerPorId(id);
    }
}
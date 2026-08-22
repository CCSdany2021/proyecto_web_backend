package com.ucompensar.dispositivos.controller;

import com.ucompensar.dispositivos.model.Categoria;
import com.ucompensar.dispositivos.service.CategoriaService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("categorias")
public class CategoriaController {
    
    private CategoriaService service = new CategoriaService();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Categoria> obtenerTodos() {
        return service.obtenerTodos();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Categoria obtenerPorId(@PathParam("id") int id) {
        return service.obtenerPorId(id);
    }
}
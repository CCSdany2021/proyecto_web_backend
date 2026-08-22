package com.ucompensar.dispositivos.controller;

import com.ucompensar.dispositivos.model.Comentario;
import com.ucompensar.dispositivos.service.ComentarioService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("comentarios")
public class ComentarioController {
    
    private ComentarioService service = new ComentarioService();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Comentario> obtenerTodos() {
        return service.obtenerTodos();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Comentario obtenerPorId(@PathParam("id") int id) {
        return service.obtenerPorId(id);
    }
}
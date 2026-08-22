
package com.ucompensar.dispositivos.controller;
import com.ucompensar.dispositivos.model.Marca;
import com.ucompensar.dispositivos.service.MarcaService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("marcas")
public class MarcaController {
    private MarcaService service = new MarcaService();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Marca> obtenerTodos() {
        return service.obtenerTodos();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Marca obtenerPorId(@PathParam("id") int id) {
        return service.obtenerPorId(id);
    }
    
}

package com.ucompensar.dispositivos.controller;

import java.util.HashSet;
import java.util.Set;

import com.ucompensar.dispositivos.filter.CorsFilter;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/")
public class RestApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();
        classes.add(DispositivoController.class);
        classes.add(ComentarioController.class);
        classes.add(CategoriaController.class);
        classes.add(MarcaController.class);
        classes.add(CorsFilter.class);
        return classes;
    }
}

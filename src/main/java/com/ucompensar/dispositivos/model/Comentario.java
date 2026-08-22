package com.ucompensar.dispositivos.model;

import java.util.Date;

public class Comentario {
    private int id;
    private int dispositivo_id;
    private String autor;
    private String contenido;
    private int calificacion;
    private Date fecha_creacion;

    public Comentario() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDispositivo_id() {
        return dispositivo_id;
    }

    public void setDispositivo_id(int dispositivo_id) {
        this.dispositivo_id = dispositivo_id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public Date getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }
}
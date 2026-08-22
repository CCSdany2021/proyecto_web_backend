package com.ucompensar.dispositivos.dao;

import com.ucompensar.dispositivos.model.Comentario;
import com.ucompensar.dispositivos.util.Conexion;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ComentarioDAO {
    
    public List<Comentario> obtenerTodos() {
        List<Comentario> comentarios = new ArrayList<>();
        String sql = "SELECT * FROM comentarios";
        
        try {
            Connection conn = Conexion.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
                Comentario com = new Comentario();
                com.setId(rs.getInt("id"));
                com.setDispositivo_id(rs.getInt("dispositivos_id"));
                com.setAutor(rs.getString("autor"));
                com.setContenido(rs.getString("contenido"));
                com.setCalificacion(rs.getInt("calificacion"));
                com.setFecha_creacion(rs.getDate("fecha_creacion"));
                comentarios.add(com);
            }
            
            rs.close();
            stmt.close();
            conn.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return comentarios;
    }
    
    public Comentario obtenerPorId(int id) {
        Comentario com = null;
        String sql = "SELECT * FROM comentarios WHERE id = " + id;
        
        try {
            Connection conn = Conexion.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            
            if (rs.next()) {
                com = new Comentario();
                com.setId(rs.getInt("id"));
                com.setDispositivo_id(rs.getInt("dispositivos_id"));
                com.setAutor(rs.getString("autor"));
                com.setContenido(rs.getString("contenido"));
                com.setCalificacion(rs.getInt("calificacion"));
                com.setFecha_creacion(rs.getDate("fecha_creacion"));
            }
            
            rs.close();
            stmt.close();
            conn.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return com;
    }
}
package com.ucompensar.dispositivos.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.ucompensar.dispositivos.model.Dispositivo;
import com.ucompensar.dispositivos.util.Conexion;

public class DispositivoDAO {
    
    public List<Dispositivo> obtenerTodos() {
        List<Dispositivo> dispositivos = new ArrayList<>();
        String sql = "SELECT * FROM dispositivos";
        
        try {
            Connection conn = Conexion.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
                Dispositivo d = new Dispositivo();
                d.setId(rs.getInt("id"));
                d.setNombre(rs.getString("nombre"));
                d.setMarca_id(rs.getInt("marca_id"));
                d.setCategoria_id(rs.getInt("categoria_id"));
                d.setPrecio(rs.getDouble("precio"));
                d.setDescripcion(rs.getString("descripcion"));
                d.setFecha_lanzamiento(rs.getDate("fecha_lanzamiento"));
                
                dispositivos.add(d);
            }
            
            rs.close();
            stmt.close();
            conn.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return dispositivos;
    }
    
    public Dispositivo obtenerPorId(int id) {
        Dispositivo d = null;
        String sql = "SELECT * FROM dispositivos WHERE id = " + id;
        
        try {
            Connection conn = Conexion.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            
            if (rs.next()) {
                d = new Dispositivo();
                d.setId(rs.getInt("id"));
                d.setNombre(rs.getString("nombre"));
                d.setMarca_id(rs.getInt("marca_id"));
                d.setCategoria_id(rs.getInt("categoria_id"));
                d.setPrecio(rs.getDouble("precio"));
                d.setDescripcion(rs.getString("descripcion"));
                d.setFecha_lanzamiento(rs.getDate("fecha_lanzamiento"));
            }
            
            rs.close();
            stmt.close();
            conn.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return d;
    }
}
package com.gms.web.util;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.gms.web.constant.Database;

public class updateBirth {
   public static void main(String[] args) {
      
      try {
         Class.forName(Database.ORACLE_DRIVER);
         PreparedStatement psmt=DriverManager.getConnection(Database.ORACLE_URL,Database.USERNAME,Database.PASSWORD)
         .prepareStatement("SELECT * FROM STUD");
         ResultSet rs=psmt.executeQuery();
         int month=0;
         int day=0;
         int birthday=0;
         while(rs.next()){
            Class.forName(Database.ORACLE_DRIVER);
            PreparedStatement psmt2=DriverManager.getConnection(Database.ORACLE_URL,Database.USERNAME,Database.PASSWORD)
            .prepareStatement("UPDATE STUD SET BIRTHDATE=? where stuno=?");
            birthday=(int)(Math.random()*18+1980);
            month=(int)(Math.random()*12+1);
            day=(int)(Math.random()*30+1);
            String birthday2=String.format("%d-%d-%d",birthday, month,day);
            psmt2.setString(1, birthday2);
            psmt2.setInt(2, rs.getInt("stuno"));
            int result=psmt2.executeUpdate();
            System.out.println(result);
         }
         
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
}
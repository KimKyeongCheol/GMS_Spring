<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
	<% String now=new SimpleDateFormat("yyyy년 MM월 dd일 a hh:mm:ss").format(new Date()); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${css}member.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<title>Hello HTML</title>

</head>
<body>
	<div id="wrapper">
	 <header>
    <h3 id="title">성적관리 시스템(GMS)</h3>
    <div id=clock><%=now %></div>
  </header>

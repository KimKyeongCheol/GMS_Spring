<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
<jsp:include page="../common/navbar.jsp"/>
<div class="jumbotron text-center">
	<h1>게시글목록</h1>
</div>

	<div id="container">
	<table border="1" id="board-tab"> 
 		<tr> 
 			<th class="th5">NO</th> 
 			<th class="th20">제목</th> 
 			<th class="th30">내용</th> 
 			<th class="th15">글쓴이</th> 
 			<th class="th15">등록일</th> 
 			<th class="th15">조회수</th> 
 		</tr> 
 		<tr> 
 			<td></td> 
 			<td></td> 
 			<td></td> 
 			<td></td> 
 			<td></td> 
 			<td></td> 
 		</tr> 
 	</table> 
 	</div><jsp:include page="../common/footer.jsp"/>
 	</div>
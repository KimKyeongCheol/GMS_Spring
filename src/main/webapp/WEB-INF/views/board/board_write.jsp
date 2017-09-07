<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
<jsp:include page="../common/navbar.jsp"/>
<div class="jumbotron text-center">
	<h1>게시글 쓰기</h1>
</div>

	<div id="container">
		<form action="" method="get" >
			<!-- <span>제목</span><input name="title"><br> -->
			<span>내용</span><br>
			<textarea name="msg" rows="30" cols="80" ></textarea><br>
			<input type="submit">
		</form>
	</div>	<div><jsp:include page="../common/footer.jsp"/>
	</div>
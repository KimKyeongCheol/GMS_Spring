<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
</header>
<div class="jumbotron text-center">
	<h1>게시글목록</h1>
</div>

	<div id="container">
	<table border="1" id="board-tab"> 
 		<tr> 
 			<th >NO</th> 
 			<th >제목</th> 
 			<th >내용</th> 
 			<th >글쓴이</th> 
 			<th >등록일</th> 
 			<th >조회수</th> 
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
 	<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">
	  <ul class="pagination">
	    <li>
	    	 <a onclick="app.member.list('1)"> 
	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
	    	</a>
	    </li>
	    <li>
	      <a onclick="app.member.list('${startPage-1}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    			<li class="active"><a href="#">${i.index}</a></li>
	    			<li ><a href="#" onclick="list('${i.index}')">
	    				${i.index}</a></li>
	    	<li>
		      	<a onclick="app.member.list('${endPage+1}')"  aria-label="Next">
		        	<span aria-hidden="true">&raquo;</span>
		      	</a>
		    </li>
	    	<li>	
	    		<a onclick="app.member.list('${theNumberOfPages}')" >
	    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
	    		</a>
	    	</li>
	  </ul>
	</nav>
 	</div>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/WEB-INF/resources/css/member.css">


	<div class =container>
<!-- 	<div class="jumbotron text-center">

	<h1>학생 목록</h1>
	
</div> -->
<div class="row">
  <div class="col-lg-6" style="margin: 0 auto; width: 500px;">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for..." id ="search" name="search">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" onClick="searchStudent()" id=search_btn>Search</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->


		<div id="container">
		<!-- id,pw,ssn,name,regdate,email,major,subject,phone -->
		<table border="1" id="member-list-tab">
			<tr class="ti">
				<th>N0.</th>
				<th>아이디</th>
				<th>이름</th>
				<th>생년월일</th>
				<th>전화번호</th>
				<th>이메일</th>
				<th>수강과목</th>
				<th>등록일</th>
				<th>수정/삭제</th>
			</tr>
         <c:forEach var="i" items="${requestScope.list}">
         <tr>
            <td>${i.num }</td>
            <td>${i.id}</td>
            <td><a onclick="detailStudent('${i.id}')">${i.name}</a></td>
            <td>${i.birth}</td>
            <td>${i.phone}</td>
            <td>${i.email}</td>
            <td>${i.title }</td>
            <td>${i.regdate}</td>
            <td><a onclick="updateStudent('${i.id}')">수정</a><a onclick="deleteStudent('${i.id}')">삭제</a></td>
         </tr>
         </c:forEach>
      </table>
         <nav aria-label="Page navigation" style="margin:0 auto; width: 400px;">
           <ul class="pagination">
         
              <c:if test="${requestScope.pageNumber gt requestScope.startPage } ">
             <li>
             <a href="#">
             <span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>         
            </a>
            </li>
             <li>
               <a href="#" aria-label="Previous" >
                 <span aria-hidden="true">&laquo;</span>
               </a>
             </li>
             </c:if>
             
             
      
  <c:if test="${requestScope.prevBlock gt 0 }"> <!-- 1~5페이지출력될때 앞에 이모티콘 숨긴다.  -->
   <li><a href="#"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
    <li>
      <a href="#" aria-label="Previous" onclick="prev()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    </c:if>
    <c:forEach varStatus="i" begin="${requestScope.startPage }" end="${requestScope.endPage }" step="1" >
    <c:choose>
    	<c:when test="${i.index eq requestScope.pageNumber}">
    	 <li class="active"><a  href="#" >${i.index}</a></li>  
    	</c:when>
    	<c:otherwise>
    	 <li><a href="#" onClick="list('member','member_list','${i.index}')">${i.index}</a></li>
    	</c:otherwise>
    </c:choose>
    
    </c:forEach>
   
    <li>
  	<c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages}"> <!-- 1~5페이지출력될때 앞에 이모티콘 숨긴다.  -->
      <a href="#" aria-label="Next"onClick="next()" >
        <span aria-hidden="true">&raquo;</span>
      </a>
      
      
       <li><a href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
   </c:if>
  </ul>
</nav>

</div>
</div> 
<%-- <%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/WEB-INF/resources/css/member.css">
<jsp:include page="../common/navbar.jsp"/>
<jsp:include page="../common/common_head.jsp"/>

	<div class =container>
<!-- 	<div class="jumbotron text-center">

	<h1>학생 목록</h1>
	
</div> -->
<div class="row">
  <div class="col-lg-6" style="margin: 0 auto; width: 500px;">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Search</button>
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
			<c:forEach items="${requestScope.list}" var="i"  >
			<tr>
				<td>${i.num}</td>
				<td>${i.id}</td>
				<td><a onclick="detailStudent('${i.id}')">${i.name}</a></td>
				<td>${i.birth}</td>
				<td>${i.phone}</td>
				<td>${i.email}</td>
				<td>${i.title}</td>
				<td>${i.regdate }</td>
				<td>
				<a onClick="updateStudent('${i.id }')">수정</a>
				/
				<a onClick="deleteStudent('${i.id }')">삭제</a>
				</td>
			</tr>
		</c:forEach>
</table>
<nav aria-label="Page navigation" style="margin: 0 auto; width: 400px; ">
 
  <ul class="pagination">

  <c:if test="${requestScopr.prevBlock gt 0 }"> <!-- 1~5페이지출력될때 앞에 이모티콘 숨긴다.  -->
   <li><a href="#"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
    <li>
      <a href="#" aria-label="Previous">
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
  	
      <a href="#" aria-label="Next" >
        <span aria-hidden="true">&raquo;</span>
      </a>
      
    
       <li><a href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
   
  </ul>
</nav>
</div>
</div>

	<script>
		function updateStudent(id){
			alert("수정할 ID : "+ id);
			location.href="#{ctx}/member.do?action=update&page=member_update&id="+id;
		}
		function deleteStudent(id){
			alert("삭제할 ID"+id)
			location.href="#{ctx}/member.do?action=delete&page=member_list&id="+id;
		}
		function detailStudent(id){
			alert("조회할 ID"+id)
			location.href="#{ctx}/member.do?action=detail&page=member_detail&id="+id;
		}
		/* function next(){
			var nextPage=${requestScopr.startPage}+${requestScope.blockSize};
			location.href="#{ctx}/member.do?action=list&page=member_list&pageNumber="+nextPage;
		} */
	</script>
	 --%>
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 <%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
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
   	<c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages } "> <!-- 1~5페이지출력될때 앞에 이모티콘 숨긴다.  -->
      <a href="#" aria-label="Next" onClick="next()" >
        <span aria-hidden="true">&raquo;</span>
      </a>
      
      
       <li><a href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
   </c:if>
  </ul>
</nav>
</div>
</div>
<script> 
   function next(){
      var nextPage=${requestScope.startPage}+${requestScope.blockSize}
      location.href="${ctx}/member.do?action=list&page=member_list&pageNumber="+nextPage;
   }
   function updateStudent(id){
      alert('수정할 id : '+id);
      location.href="${ctx}/member.do?action=update&page=member_update&id="+id;
   }
   function deleteStudent(id){
      alert('삭제할 id : '+id)
      location.href="${ctx}/member.do?action=delete&page=member_list&id="+id;
   }
   function detailStudent(id){
      alert('조회할 id : '+id)
      location.href="${ctx}/member.do?action=detail&page=member_detail&id="+id;
   }
   function prev(){
      var prevPage=${requestScope.startPage}-${requestScope.blockSize}
      if(prevPage <1){
    	  location.href="${ctx}/member.do?action=list&page=member_list&pageNumber="+pageNumber;
      }else{
      location.href="${ctx}/member.do?action=list&page=member_list&pageNumber="+prevPage;
      }
   }
   function searchStudent(){
	  
	   var search=document.getElementById('search').value;
	   if(search==""){
		   alert('검색어를 입력하세요')
	   }else{
	   alert('조회할 search : '+search)
	   location.href="${ctx}/member.do?action=search&page=member_search2&search="+search;/* location.href= a태그  */
	   }
	  
   }
</script>S
	 
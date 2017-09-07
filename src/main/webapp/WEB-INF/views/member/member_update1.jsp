<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="jumbotron text-center">
	<h1>수정</h1>
</div>


	<div id="container">
	<form action="${ctx}/service_update.jsp" method="get">
	<table id="member_detail_tab">
		<tr >
			<td colspan="2" rowspan="3" width="10%"><img alt="" src="../img/kkk.jpg">  </td>
			<td width="20%">이름</td>
			<td width="70%"><input type="text" name="name" placeholder=""/></td>
		</tr>
		<tr>
			<td>아이디</td>
			<td></td>
		</tr>
		<tr>
			
			<td>생년월일</td>
			<td></td>
		</tr>
		<tr>
			<td width="10%">전화</td>
			<td colspan="3" width="90%"><input type="text" name="phone" placeholder="" /></td>
		</tr>
		<tr>
			<td>이메일</td>
			<td  colspan="3"><input type="text" name="email" placeholder=""  /></td>
		</tr>
		<tr>
			<td>주소</td>
			<td  colspan="3"><input type="text" name="addr" placeholder="" /></td>
		</tr>
		<tr>
			<td>전공</td>
			<td  colspan="3"></td>
		</tr>
		<tr>
			<td>과목</td>
			<td  colspan="3"></td>
			
		</tr>
		
	</table>
	<input type="submit" id="confirm_btn" value="수정적용">
	<input type="button"onclick="javascript:cancle()" value="취소">
	<input value="" name="id" type="hidden">
	</form>

</div>
	<%-- 
	function javascript:confirm(){
		
		location.href="${ctx}/member/service_update.jsp";
	} --%>
	<script type="text/javascript">
	function cancle(){
		location.href="${ctx}/member_list.jsp";
	}
	
	</script>
	
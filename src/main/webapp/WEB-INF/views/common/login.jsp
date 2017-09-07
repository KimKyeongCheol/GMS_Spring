<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<%=application.getContextPath() %>/member.css">
<link rel="stylesheet" href="<%=application.getContextPath() %>/footer.css">
<link rel="stylesheet" href="<%=application.getContextPath() %>/resources/css/login.css">
<link rel="stylesheet" href="<%=application.getContextPath() %>/common/common_head.jsp">
<title>학생관리</title>
</head>
<body>
<div  id="wrapper">
<header>


   </header></div>
      <!-- 로그인화면  -->
      
      <div id="container-login">
         <div id="contatiner-form">
            <form  id="login_box" name="login_box" > 
              
       
                  <span id="span-form">ID</span> 
                  <input type="text" id="login_id" name="login_id" placeholder="ID는 숫자 포함 8자 이내"><br> 
                  <span id="span-form">PASSWORD</span>
                  <input name="login_password" id="login_password"  type="password" placeholder="비밀번호"><br><br>
                  <input type="submit" value="LOGIN" id="login_Btn"/> 
                  <input type="reset" value="CANCEL"/>
             
               <input type="hidden" name="page" value="main"/> 
               <input type="hidden" name="action" value="login"/> 
               
            </form>
            
         </div>
      </div>

<div id="footer">
<footer>
    
  <a href="${ctx }/jdbc_test.jsp">DB연결테스트</a>
  <a href="${ctx }/util/update_email.jsp">이메일 업데이트</a>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
 
</footer>
</div>
<script> 
app.auth.init();
	
</script>

</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>

</header>
           
      <div class="container" style="width:60%">
         <div class="row main">
            <div class="panel-heading">
                  <div class="panel-title text-center">
                        <h1 id="update_id" class="title">${student.name} 의 상세보기</h1>
                        <hr />
                     </div>
               </div> 
            <div class="main-login main-center">
               <form class="form-horizontal" method="post" action="#" id="update_form">
                  <input id="id" name="id" type="hidden" class="form-control"  value="${student.id}"/>
                  <div class="form-group">
                     <label for="name" class="cols-sm-2 control-label">Name</label>
                     <div class="cols-sm-10">
                        <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                           <input id="name" name="name" type="text" class="form-control"  value="${student.name}" readonly="readonly"/>
                        </div>
                     </div>
                  </div>

                  <div class="form-group">
                     <label for="email" class="cols-sm-2 control-label">Email</label>
                     <div class="cols-sm-10">
                        <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                           <input id="email" name="email"  type="text" class="form-control"  value="${student.email}"/>
                        </div>
                     </div>
                  </div>

                  <div class="form-group">
                     <label for="username" class="cols-sm-2 control-label">Phone</label>
                     <div class="cols-sm-10">
                        <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                           <input id="phone" name="phone"  type="text" class="form-control"   value="${student.phone}"/>
                        </div>
                     </div>
                  </div>

                  <div class="form-group">
                     <label for="password" class="cols-sm-2 control-label">Password</label>
                     <div class="cols-sm-10">
                        <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                           <input id="password" name="password"  type="password" class="form-control"  data-toggle="popover" placeholder="Enter your Password"/>
                        </div>
                        
                        <span id="result"></span>
                     </div>
                  </div>

                  <div class="form-group">
                     <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                     <div class="cols-sm-10">
                        <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                           <input id="confirm_password" name="confirm_password"  type="password" class="form-control"   placeholder="Confirm your Password"/>
                        </div>
                        <span id="confirmPass"></span>
                     </div>
                  </div>

                  <div class="form-group ">
                     <button id="confirmBtn" type="sub" class="btn btn-primary btn-lg btn-block login-button">UPDATE</button>
                  </div>
               </form>
            </div>
         </div>
      </div>

<script>
app.member.init();
 </script>
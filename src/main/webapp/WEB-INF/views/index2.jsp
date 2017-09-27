<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
<meta http-equiv="Content-Type" content="text/html; charset=utl-8;" pageEncoding="utf-8" />
<title>GMS</title>
	<link rel="stylesheet" href="resources/css/write.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="${path.css}/meta.css" />
	<script src="${path.js}/meta.js"></script>
	
</head>
<body>
	<div class="page-header" >
		<h1 style="display:inline;magin-left:150px;">게시판</h1>
		<a style="font-size:large;">목록가기</a>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="well well-sm">
					<form class="form-horizontal" method="post">
						<fieldset>
							<legend class="text-center header">게시물 쓰기</legend>
							<div class="formp-group">
								<span class="col-md-1 col-md-offset-2 text-center">
									<i class="fa fa-user bigicon"></i>
								</span>
								<div class="col-md-12" style="margin-right: auto;">
									<label id=></label>
									<input id="lname" name="name" type="text" placeholder="글쓴이" class="form-control1">
									<input id="regdate" name="regdate" type="text" placeholder="글쓴날짜" class="form-control1">
									<input id="hitcount" name=""hitcount"" type="text" placeholder="조회수" class="form-control1">
								</div>
							</div>
							<div class="formp-group">
								<span class="col-md-1 col-md-offset-2 text-center">
									<i class="fa fa-user bigicon"></i>
								</span>
								<div class="col-md-12">
									<input id="fname" name="title" type="text" placeholder="제 목" class="form-control">
																	</div>
							</div>
							
							<div class="formp-group">
								<span class="col-md-1 col-md-offset-2 text-center">
									<i class="fa fa-user bigicon"></i>
								</span>
								<div class="col-md-12">
									<textarea class="form-control" id="message" name="message" rows="15">
									</textarea>
								</div>
							</div>
							<div class="formp-group" >
								<span class="col-md-1 col-md-offset-2 text-center">
									<button type="submit" style="width:150px" class="btn btn-primary btn-lg">확인</button>
									<button type="reset" style="width:150px" class="btn btn-primary btn-lg">취소</button>
									
									
								</span>
							</div>
							
						</fieldset>
					
					</form>
				</div>
			</div>
		</div>
	</div>
	<script>
meta.common.init('${path.ctx}');
</script>

</body>
</html>

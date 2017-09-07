package com.gms.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller //annotation
@RequestMapping("/auth")
public class AuthController {//AuthController에게 자격(권한)을 부여
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);//.java가 .class로 컴파일, 
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("goLogin : {} ");
	return "public:common/login.tiles";
	}
	
	@RequestMapping("/login")
	public String Login(Model model) {
		logger.info("Login : {} ");
		return "auth:common/main.tiles";
	}
	@RequestMapping("/main")//세퍼레이터
	public String mainpage(Model model) {
		
		//프록시
		return "auth:common/main.tiles";//커멘드
	}
}

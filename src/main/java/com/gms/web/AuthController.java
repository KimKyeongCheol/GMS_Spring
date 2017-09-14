package com.gms.web;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

@Controller //annotation
@SessionAttributes("user")
@RequestMapping("/auth")
public class AuthController {//AuthController에게 자격(권한)을 부여
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);//.java가 .class로 컴파일, 
	
	
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("goLogin : {} ");
	return "public:common/login.tiles";
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST)//value="/login",method=RequestMethod.POST  post방식으로 보낼때는 이렇게 사용해야 한다. get방식일때는 기본설정이 get방식이므로 "/login"만 해도 된다.
	public String Login(@RequestParam("id") String id, @RequestParam("pass") String pass,Model model) {
		
		logger.info("###id  "+id);
		logger.info("###pass  "+pass);
		cmd.setSearch(id);
		cmd.setColumn(pass);
		Map<String, Object> map=service.login(cmd);
		model.addAttribute("msg",map.get("msg"));
		if(map.get("msg").equals("success")) {
			model.addAttribute("user",map.get("user"));
		}
		model.addAttribute("msg",map.get("msg"));
		return String.valueOf(map.get("page"));
		//"auth:common/main.tiles"
	}
	@RequestMapping("/main")//세퍼레이터
	public String mainpage(Model model) {
		
		//프록시
		return "auth:common/main.tiles";//커멘드
	}
	
	@RequestMapping("/join")
	public String memberList(Model mode) {
		logger.info("Join{}","진입");
		
		
		return "public:common/join.tiles";
	}
	
}

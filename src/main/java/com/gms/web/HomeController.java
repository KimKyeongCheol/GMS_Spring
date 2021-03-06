package com.gms.web;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.complex.PathFactory;

/**
 * Handles requests for the application home page.
 */
@Controller
@SessionAttributes("path")
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping("/")//세퍼레이터
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
	model.addAttribute("serverTime", new SimpleDateFormat("YYYY년 MM월 dd일").format(new Date()) );//model.addAttribute  //프록시
		model.addAttribute("path", PathFactory.create());
	return "index";//커멘드
	}

	
}

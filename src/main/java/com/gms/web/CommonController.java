package com.gms.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@RequestMapping("/path/{directory}/{page}")
	public String mainAdd(@PathVariable String directory,@PathVariable String page,Model model) {
		logger.info("memberController{} 진입");
		System.out.println("directory"+directory);
		System.out.println("page"+page);
		return String.format("auth:%s/%s.tiles",directory,page);	
	}
}

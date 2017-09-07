package com.gms.web.member;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	@RequestMapping("/list")
	public String mainList(Model model) {
		model.addAttribute("list", "list");
		return "member/member_list";
	}
	@RequestMapping("/detail")
	public String mainDetail(Model mode) {
		return "member/member_detail";
	}
	@RequestMapping("/update")
	public String mainUpdate(Model mode) {
		return "member/member_update";
	}
	@RequestMapping("/add")
	public String mainAdd(Model mode) {
		return "member/member_add";
	}
	@RequestMapping("/delete")
	public String mainDelete(Model mode) {
		return "member/member_adelete";
	}
	
}

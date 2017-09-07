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
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String mainDetail(Model mode) {
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/update")
	public String mainUpdate(Model mode) {
		return "auth:member/member_update.tiles";
	}
	@RequestMapping("/add")
	public String mainAdd(Model mode) {
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/delete")
	public String mainDelete(Model mode) {
		return "auth:member/member_delete.tiles";
	}
	
}

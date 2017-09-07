package com.gms.web.board;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {

	@RequestMapping("/list")
	public String gradeList(Model model) {
		return "board/board_list";
	}
	@RequestMapping("/write")
	public String gradeAdd(Model model) {
		return "board/board_write";
	}
	@RequestMapping("/detail")
	public String gradeDetail(Model model) {
		return "board/board_detail";
	}
	@RequestMapping("/delete")
	public String gradeDelete(Model model) {
		return "board/board_delete";
	}
}

package com.gms.web.board;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
/*
	@RequestMapping("/board_list")
	public String gradeList(Model model) {
		return "auth:board/board_list.tiles";
	}
	@RequestMapping("/board_write")
	public String gradeAdd(Model model) {
		return "auth:board/board_write.tiles";
	}
	@RequestMapping("/board_detail")
	public String gradeDetail(Model model) {
		return "auth:board/board_detail.tiles";
	}*/
	@RequestMapping("/board_delete")
	public String gradeDelete(Model model) {
		return "auth:board/board_delete.tiles";
	}
}

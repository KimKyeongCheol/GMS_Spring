package com.gms.web.grade;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {

	/*@RequestMapping("/grade_add")
	public String gradeAdd(Model model) {
		return "auth:grade/grade_add.tiles";
	}
	@RequestMapping("/grade_list")
	public String gradeList(Model model) {
		return "auth:grade/grade_list.tiles";
	}
	@RequestMapping("/grade_detail")
	public String gradeDetail(Model model) {
		return "auth:grade/grade_detail.tiles";
	}*/
	@RequestMapping("/grade_delete")
	public String gradeDelete(Model model) {
		return "auth:grade/grade_delete.tiles";
	}
}

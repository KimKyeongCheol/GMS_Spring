package com.gms.web.grade;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {

	@RequestMapping("/list")
	public String gradeList(Model model) {
		return "grade/grade_list";
	}
	@RequestMapping("/add")
	public String gradeAdd(Model model) {
		return "grade/grade_add";
	}
	@RequestMapping("/detail")
	public String gradeDetail(Model model) {
		return "grade/grade_detail";
	}
	@RequestMapping("/delete")
	public String gradeDelete(Model model) {
		return "grade/grade_delete";
	}
}

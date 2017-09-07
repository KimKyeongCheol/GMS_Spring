package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class GradeDTO {
	
	private String grade_seq,score,exam_date,id,subj_id;


	
		

}

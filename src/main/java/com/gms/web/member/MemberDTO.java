package com.gms.web.member;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO implements Serializable{

	
	private static final long serialVersionUID=1L;
	private String id,password,ssn,name,regdate,email,major_id,subject,phone,profile,gender,addr;

	
	
}

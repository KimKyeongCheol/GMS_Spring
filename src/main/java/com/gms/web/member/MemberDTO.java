package com.gms.web.member;

import java.io.Serializable;

import lombok.Data;

@Data
public class MemberDTO implements Serializable{

	
	private static final long serialVersionUID=1L;
	private String id,pw,ssn,name,regdate,email,major_id,subject,phone,profile,gender,addr;

	
	
}

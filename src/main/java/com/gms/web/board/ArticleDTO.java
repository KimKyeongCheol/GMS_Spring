package com.gms.web.board;

import java.io.Serializable;

import lombok.Data;


@Data
public class ArticleDTO implements Serializable{
	private static final long serialVersionUID=1L;
	private int articleSeq,hitcount;
	private String id,title,content,regdate;

}

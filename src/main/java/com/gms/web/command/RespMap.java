package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class RespMap {

		private String id,title,content,regdate,hitcount,count,articleSeq;
}

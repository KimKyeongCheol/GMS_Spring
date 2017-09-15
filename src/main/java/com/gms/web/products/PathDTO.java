package com.gms.web.products;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Lazy @Data  //@Lazy:
public class PathDTO {
	private String ctx,img,js,css;
}

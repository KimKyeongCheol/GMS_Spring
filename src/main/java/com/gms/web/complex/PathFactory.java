package com.gms.web.complex;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.mvc.condition.RequestConditionHolder;

import com.gms.web.products.PathDTO;

@Component @Lazy
public class PathFactory {
	public static PathDTO create() {
		PathDTO path=new PathDTO();
		path.setPath(
				((ServletRequestAttributes)RequestContextHolder
						.currentRequestAttributes())
						.getRequest()
						.getContextPath());
		path.setImg(path.getPath()+"/resources/img");
		path.setCss(path.getPath()+"/resources/css");
		path.setJs(path.getPath()+"/resources/js");
		
		return path;
	}
	
}

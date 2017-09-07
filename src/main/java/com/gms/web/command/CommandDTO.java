/*package com.gms.web.command;


import com.gms.web.constant.*;

import lombok.Getter;
import lombok.Setter;
public class Command implements Commandable{
	@Getter 
	protected String action,pageNumber,view;
	
	@Getter @Setter
	protected String startRow,endRow,dir,page,column,search;

	public void setPageNumber(String pageNumber){
		
		this.pageNumber=(pageNumber==null) ? "1" : pageNumber;
		System.out.println("페이지번호 : "+pageNumber);	
	}
	public void setaction(String action) {
		// TODO Auto-generated method stub
		this.action=(action.equals("")) ? "move": action;
		System.out.println("액션  : "+action);
	}
	
	
	
	public void setAction(String action) {
		this.action = action;
	}

	public void setpagaNumber(String pagaNumber) {
		this.pageNumber=(pageNumber==null) ? "1" : pageNumber;
		System.out.println("페이지번호 : "+pageNumber);	
	}
	

	
	@Override
	public void process() {
		// TODO Auto-generated method stub
		this.view=(dir.equals("home"))? "/WEB-INF/view/common/home.jsp": PATH.VIEW+dir+PATH.SEPARATOR+page+Extension.JSP;
		System.out.println("이동페이지 : "+view);			
	}
	
	@Override
	public String toString(){
		return "command [DEST="+dir+"/"+page+".jsp"+"ACTION"+action;
	}
	
	
}
*/

package com.gms.web.command;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;

import lombok.Getter;
import lombok.Setter;
@Lazy @Component
public class CommandDTO implements Commandable{
	@Getter
	protected String action,pageNumber,
		view,column,search;
	@Getter @Setter
	protected String dir,startRow,endRow,
		page;
	
	public void setPageNumber(String pageNumber){
		this.pageNumber = 
				(pageNumber==null)?
						"1":pageNumber;
		System.out.println("페이지번호: "+this.pageNumber);
	}
	public void setAction(String action) {
		this.action = 
				(action==null)?
						"move":action;
		System.out.println("액션: "+this.action);
	}
	public void setColumn(String column) {
		this.column = 
				(column==null)?
						"none":column;
		System.out.println("컬럼: "+this.column);
	}
	public void setSearch(String search) {
		this.search = (search==null)?
				"none":search;
		System.out.println("검색어: "+this.search);
	}
	
	@Override
	public void process() {
		this.view=
				(dir.equals("home"))?
						"/WEB-INF/view/common/home.jsp":
				PATH.VIEW+dir+PATH.SEPARATOR+page+Extension.JSP;
		System.out.println("이동 페이지: "+view);
	}
	@Override
	public String toString() {
		return "Command [DEST="+dir+"/"
				+page+".jsp"+ ",ACTION="+action+"]";
	}
}











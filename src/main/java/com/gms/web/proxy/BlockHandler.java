package com.gms.web.proxy;

import javax.servlet.http.HttpServletRequest;

public class BlockHandler{

	public static int [] attr(PageProxy pxy){
	int[] result = new int [6];
	int theNumberOfPages=0,startPage=0,endPage=0;
	
	theNumberOfPages=(pxy.getTheNumberOfRow() % pxy.getPageSize())==0 ? pxy.getTheNumberOfRow() /pxy.getPageSize() : pxy.getTheNumberOfRow()/ pxy.getPageSize()+1;
	startPage = pxy.getPageNumber() - ((pxy.getPageNumber()-1) % pxy.getBlockSize());
	endPage=(startPage +pxy.getBlockSize()-1 <= theNumberOfPages) ? startPage + pxy.getBlockSize() -1 : theNumberOfPages;
	
	result[0]=pxy.getPageNumber();
	result[1]=theNumberOfPages;
	result[2]=startPage;
	result[3]=endPage;
	result[4]=startPage-(theNumberOfPages/pxy.getBlockSize());
	result[5]=startPage+(theNumberOfPages/pxy.getBlockSize());
	System.out.println(
			"pageNumber is : "+ result[0]+",\n"+
			"thenumberofpage is : "+ result[1]+",\n"+
			"startpage is : "+ result[2]+",\n"+
			"endpage is : "+ result[3]+",\n"+
			"prevblock is :" + result[4]+",\n"+
			"nextblock is :" + result[5]+",\n"
			);
	
	
	return result;
	}
}

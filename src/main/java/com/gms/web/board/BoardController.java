package com.gms.web.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.mapping.ResultMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.RespMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
     @Autowired BoardMapper Bmapper;
     @Autowired GradeMapper Gmapper;
     @Autowired Command cmd;
     public @ResponseBody Map<?,?> post() {
        return null;
     }
     private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
     @RequestMapping("/list/{cate}")
     public @ResponseBody Map<?, ?> list(Model model,@PathVariable String cate) {//리턴은 스트링이 아니다.
    	 System.out.println("$$$$$$$$$$$$$$$$$[cate] :"+cate);
           Map<String, Object> map=new HashMap<>();
           System.out.println("board/list 에 들어옴");
           IListService listService=null;
           IGetService countService=null;
           
           switch (cate) {
           case "articles":
                     
              listService=(x)->{         
                           return Bmapper.selectList(cmd);
              };     
              
              countService=(x)->{
            	  
            	  return Bmapper.count(cmd);
              };
              RespMap r= (RespMap) countService.execute(cmd);
                map.put("result", "success");
                map.put("total",r);
                map.put("list", listService.execute(cmd));
                break;
                
           case "grade":
              listService=(x)->{
               return Gmapper.selectSome(cmd);  
              };
              map.put("list",listService.execute(cmd));
                break;                
           default:
                break;
           }                                                        
        return map;
     }
     @RequestMapping("/get/{cate}/{id}")
     public @ResponseBody Map<?,?> get(@PathVariable String cate,@PathVariable String id) {
    	 System.out.println("[넘어온 cate ]:"+cate+"[넘어온 id : ]"+id);
    	 IGetService detailService=null;
    	 Map<String, Object> map=new HashMap<>();
    	 
    	
    	 detailService=(x)->{
    		 cmd.setArticle(id);
    		
       	  return Bmapper.selectOne(cmd);
       	  
         };
         
          Article r= (Article) detailService.execute(cmd);
          System.out.println("44444"+r);
    	 map.put("detail",r );
    	 
    	 /*IGetService getService=null;
    	 cmd=null;
    	 getService=(x)->{
    		 
    		 return Bmapper.selectOne(cmd);
    	 };*/
        return map;
     }
     @RequestMapping(value="/put/articles", method=RequestMethod.POST,consumes="application/json")
     public @ResponseBody Map<?,?> put(@RequestBody Article art) {
    	 Map<String, Object> map=new HashMap<>();
    	 IPutService updateService=null;
    	 System.out.println("sdasdasdasdasdasdasd"+art);
    	 cmd.setArticle(String.valueOf(art.getArticleSeq()));
		 cmd.setAction(art.getTitle());
    	 cmd.setSearch(art.getContent());
		 System.out.println("1111111111"+cmd.getArticle());
    	 System.out.println("2222222222"+cmd.getAction());
    	 System.out.println("3333333333"+cmd.getSearch());
    	 updateService=x->{

    	Bmapper.update(cmd);
    	 };
    	updateService.execute(cmd);
    
    	map.put("seq", cmd.getArticle());
    	
    	System.out.println("수정 :"+cmd.getSearch());
    	

    	 
    	 return map;
     }
     public @ResponseBody Map<?,?> delete() {
        return null;
     }
}
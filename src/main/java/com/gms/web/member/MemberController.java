package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PageProxy;

@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@RequestMapping(value="/member_add",method=RequestMethod.POST)
	   public String insertStudent(@ModelAttribute MemberDTO member,@RequestParam("subject") List<String> list) {
	      logger.info("memberAdd {}","진입");
	      logger.info("등록 아이디 : {}",member.getId());
	      logger.info("등록 이름 : {}",member.getName());
	      logger.info("등록 패스워드 : {}",member.getPassword());
	      System.out.println("등록 과목 : {}"+list);
	      List<MajorDTO> paramList=new ArrayList<>();
	      Map<String,Object> map=new HashMap<>();
	      map.put("member", member);
	      MajorDTO mj=null;
	      for(String m : list) {
	      mj=new MajorDTO();
	      mj.setMajorId(String.valueOf((int)(Math.random()*1000)+1000));
	      mj.setTitle(m);
	      mj.setId(member.getId());
	      mj.setSubjId(m);
	      paramList.add(mj);
	      };
	      map.put("list", paramList);
	      System.out.println("@@@@ :"+paramList);
	      service.add(map);
	      return "redirect:/member/list/1";
	   }
	
/*@RequestMapping(value="/member_add",method=RequestMethod.POST)
	public String addStudent(@ModelAttribute MemberDTO member, @RequestParam("subject") List<String> list) {
		
		
		
		
		logger.info("[등록 ID] : {}"+member.getId());
		logger.info("[등록  NAME]: {}"+member.getName());
		logger.info("[등록 PASSWORD]: {}"+member.getPassword());
		logger.info("[등록  PHONE ]: {}"+member.getPhone());
		logger.info("[등록  list ]: {}"+list);
		
		
		
		major.setMajorId(String.valueOf((int)(Math.random()*10000)+10000));
		logger.info("[등록  major.setId ]: {}"+major.getMajorId());
		major.setTitle(member.getName());
		logger.info("[등록  major.getName ]: {}"+member.getName());
		String sub="";
		for(int i=0;i<list.size();i++) {
			sub+=list.get(i);
			System.out.println("[과목]"+list.get(i));
		}
		member.setSubject(sub);
		//String random=String.valueOf((int)(Math.random()*10000)+1);
		Map<String,Object> paramMap=new HashMap<>();
		paramMap.put("member",member);
		List<MajorDTO> paramList=new ArrayList<>();
		MajorDTO mj=null;
		for(String m : list) {
			mj=new MajorDTO();
			mj.setId(member.getId());
			mj.setMajorId(String.valueOf((int)(Math.random()*10000)+1000));
			mj.setSubjId(m);
			mj.setTitle(m);
			paramList.add(mj);
		}
		paramMap.put("list", paramList);
		
		service.add(paramMap);
		return "redirect:/member/list/1";
	}*/
	@RequestMapping("/list/{pageNumber}")
	public String memberList(Model model,@PathVariable int pageNumber) {
		logger.info("member_list{}","진입");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		int count = Integer.parseInt(service.count());
		pxy.setTheNumberOfRow(count);
		int[] result=new int[6];
		int theNumberOfPages=0,startPage=0,endPage=0;
		
		theNumberOfPages=(pxy.getPageNumber() % pxy.getPageSize()) == 0 ?
				pxy.getTheNumberOfRow() / pxy.getPageSize() :
					pxy.getTheNumberOfRow() / pxy.getPageSize() +1 ;
		startPage = pxy.getPageNumber() -((pxy.getPageNumber()-1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() -1 <=  theNumberOfPages) ?
				startPage + pxy.getBlockSize() -1 : theNumberOfPages;
			
				result[0]=pxy.getPageNumber();
				result[1]=theNumberOfPages;
				result[2]=startPage;
				result[3]=endPage;
				result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
				result[5]=startPage+pxy.getBlockSize()-1;
			if(pxy.getPageNumber() <= pxy.getTheNumberOfRow() / pxy.getPageSize() +1) {
				if(pxy.getPageNumber() == 1) {
					cmd.setStartRow("1");
					cmd.setEndRow(String.valueOf(pxy.getPageSize()));
				}else {
					cmd.setStartRow(String.valueOf((pxy.getPageNumber() -1) * pxy.getPageSize() +1));
									
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
				
				}
			}
			
		List<StudentDTO> list=(List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		
		System.out.println("[list 결과] : "+list);
		model.addAttribute("count",service.count());
		//pxy.execute(model, , list);
		
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/search/{search}")
	public String search(Model model,@PathVariable String search) {
		cmd.setSearch(search);
		List<MemberDTO> list=(List<MemberDTO>)service.MemberByName(cmd);
		model.addAttribute("list",list);
		model.addAttribute("count", service.MemberByName(cmd).size());
		System.out.println("[search 결과] : "+list);
		return "auth:member/member_list.tiles";
	}
	

	@RequestMapping("/member_detail/{id}")
	public String memberDetail(Model model,@PathVariable String id) {
		cmd.setSearch(id);
		model.addAttribute("student", service.memberById(cmd));
		model.addAttribute("id", cmd.getSearch());
		return "auth:member/member_detail.tiles";
		
	}
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String memberUpdate(@ModelAttribute MemberDTO stu,Model model) {
		logger.info("member_Update{}","진입");
		service.modify(stu);
		System.out.println("[stu] : "+stu);
	
return "redirect:/member/member_detail/"+stu.getId();
	}
	
	@RequestMapping("/member_delete/{id}")
	public String memberDelete(Model model,@PathVariable String id) {
		cmd.setSearch(id);
		model.addAttribute("list",service.remove(cmd));
		model.addAttribute("id",cmd.getSearch());
		return "redirect:/member/list/1";
		
	}
	
}

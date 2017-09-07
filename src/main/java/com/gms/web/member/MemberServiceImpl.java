package com.gms.web.member;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.constant.Database;
import com.gms.web.grade.MajorDTO;



@Service
public class MemberServiceImpl implements MemberService{
	
	public static MemberServiceImpl getInstance() {
		
		return new MemberServiceImpl();
	}
	MemberDAO dao;
	private MemberServiceImpl() {
		//dao=new MemberDaoImpl();
	}
	@Override
	public String add(Map<String, Object>  map) {//MemberDaoImpl.getInstance() 객체,   equals를 사용할 수 있는 이유는 리턴타입이 string객체로 리턴하였기때문에 사용가능.
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO) map.get("member");
		System.out.println("넘어온 회원의 정보 :"+ m);
		@SuppressWarnings("unchecked")
		List<MajorDTO> list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		
		/*MemberDaoImpl.getInstance().insert(map);*/
		//MemberDaoImpl.getInstance().insert(map)=="0"? "join":"main";
		return  null;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return null;//MemberDaoImpl.getInstance().selectAll(cmd);
	}
	@Override
	public String count(CommandDTO cmd) {
		return null;//MemberDaoImpl.getInstance().count(cmd);
	}
	@Override
	public StudentDTO memberById(CommandDTO cmd) {
		return null;//MemberDaoImpl.getInstance().selectById(cmd);
	}
	/*@Override
	public List<MemberBean> getMemberByName(String search) {
		return MemberDaoImpl.getInstance().selectByName(search);
	}*/
	@Override
	public String modify(MemberDTO param) {
	
	return null;//(MemberDaoImpl.getInstance().update(param).equals("0"))?"회원정보수정 실패":"회원정보수정 성공";
	}
	@Override
	public String remove(CommandDTO cmd) {
		return null;// (MemberDaoImpl.getInstance().delete(cmd).equals("0"))?"회원탈퇴실패":"회원탈퇴성공";
	}
	@Override
	public Map<String, Object> login(MemberDTO member) {
		Map<String,Object> map = new HashMap<>();
		CommandDTO cmd= new CommandDTO();
		cmd.setSearch(member.getId());
		MemberDTO m1=null;//MemberDaoImpl.getInstance().login(cmd);
		String page=
		(m1!=null)?
				(member.getPw().equals(m1.getPw()))?
						"main":"login_fail":"join";
		map.put("page",page);
		map.put("user",m1);
		return map;
	}
	@Override
	public List<StudentDTO> MemberByName(CommandDTO cmd) {
		System.out.println("######MemberByName : "+cmd.getSearch());
		
		return null;//MemberDaoImpl.getInstance().selectByName(cmd);
	}
}

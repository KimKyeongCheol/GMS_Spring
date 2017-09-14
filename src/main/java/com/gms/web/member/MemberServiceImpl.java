package com.gms.web.member;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.constant.Database;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;



@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	/*public static MemberServiceImpl getInstance() {
		
		return new MemberServiceImpl();
	}
	MemberMapper dao;
	private MemberServiceImpl() {
		//dao=new MemberDaoImpl();
	}*/
	@Override
	public int add(Map<String, Object>  map) {//MemberDaoImpl.getInstance() 객체,   equals를 사용할 수 있는 이유는 리턴타입이 string객체로 리턴하였기때문에 사용가능.
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO) map.get("member");
		System.out.println("넘어온 회원의 정보 :"+ m);
		@SuppressWarnings("unchecked")
		List<MajorDTO> list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		
		/*MemberDaoImpl.getInstance().insert(map);*/
		//MemberDaoImpl.getInstance().insert(map)=="0"? "join":"main";
		return  0;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);//MemberDaoImpl.getInstance().selectAll(cmd);
	}
	@Override
	public String count() {
		logger.info("count is {}","entered");
		String count = mapper.count();
		logger.info("count is {}",count);
		return count;
		//MemberDaoImpl.getInstance().count(cmd);
	}
	@Override
	public StudentDTO memberById(CommandDTO cmd) {
		return mapper.selectById(cmd);//MemberDaoImpl.getInstance().selectById(cmd);
	}
	/*@Override
	public List<MemberBean> getMemberByName(String search) {
		return MemberDaoImpl.getInstance().selectByName(search);
	}*/
	@Override
	public int modify(MemberDTO member) {
		try {
		
		} catch (Exception e) {
			e.printStackTrace();
			
			// TODO: handle exception
		}
		
	return mapper.update(member);//(MemberDaoImpl.getInstance().update(param).equals("0"))?"회원정보수정 실패":"회원정보수정 성공";
	}
	@Override
	public int remove(CommandDTO cmd) {
		return mapper.delete(cmd);// (MemberDaoImpl.getInstance().delete(cmd).equals("0"))?"회원탈퇴실패":"회원탈퇴성공";
	}
	@Override
	public Map<String, Object> login(CommandDTO cmd) {
		Map<String,Object> map = new HashMap<>();
		//CommandDTO cmd= new CommandDTO();
		
		member=mapper.login(cmd);//MemberDaoImpl.getInstance().login(cmd);
		/*map.put("user", m1.getId());*/
		System.out.println("[list : ]"+member);
		/*String page=
				(m1!=null)?
						(member.getPass().equals(m1.getPw()))?
								"auth:common/main.tiles":"auth:common/home.tiles":"auth:common/join.tiles";
		
		*/
		String msg="",page="";
		if(member!=null) {
			if(member.getPassword().equals(cmd.getColumn())) {
				msg="success";
				page="auth:common/main.tiles";
			}else {
				msg="비밀번호가 일치하지 않습니다.";
				page="public:common/login.tiles";
				
			}
			
		}else {
			msg="ID가 존재하지 않습니다.";
			page="public:common/login.tiles";
		
			
		}
		map.put("msg", msg);
		map.put("page", page);
		map.put("user", member);
		return map;
	}
	@Override
	public List<?> MemberByName(CommandDTO cmd) {
		System.out.println("######MemberByName : "+cmd.getSearch());
		
		return mapper.selectByName(cmd);//MemberDaoImpl.getInstance().selectByName(cmd);
	}
}

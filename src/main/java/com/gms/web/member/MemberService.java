package com.gms.web.member;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;



@Component
public interface MemberService {
	public int add(Map<String, Object> map);
	public List<?> list(CommandDTO cmd);
	public List<?> MemberByName(CommandDTO cmd);
	public StudentDTO memberById(CommandDTO cmd);
	public String count();
	public int modify(MemberDTO member);
	//public String modify(StudentBean member);
	public int remove(CommandDTO cmd);
	public Map<String, Object> login(CommandDTO cmd);//패스워드를 은닉화해야하기 때문에 멤버빈의 있는 패스워드를 호출하는 방식으로 해야하기 때문에 파라미터값을 멤버빈으로 한다.
}

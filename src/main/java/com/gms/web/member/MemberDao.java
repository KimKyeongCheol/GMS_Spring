package com.gms.web.member;
import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;



public interface MemberDao {
	public String insert(Map<?,?> map);
	public List<?> selectAll(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public String update(MemberDTO member);
	public String delete(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
}

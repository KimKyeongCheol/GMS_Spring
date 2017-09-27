package com.gms.web.mapper;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.Command;
import com.gms.web.command.RespMap;


@Repository
public interface BoardMapper {
	public void insert(Command cmd);
	public List<Article> selectList(Command cmd);//목록가져오는것
	public Article selectOne(Command cmd); // 하나만 가져오는 것
	public RespMap count(Command cmd);
	public void update(Command cmd);
	public void delete(Command cmd);
}

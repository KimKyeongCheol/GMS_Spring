package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;



@Component
public interface BoardService {
	public String write(BoardDTO article);
	public List<BoardDTO> getArticles();
	public List<BoardDTO> findById(String id);
	public BoardDTO findBySeq(String seq);
	public String modify(BoardDTO article);
	public String remove(String seq);
	public String count();
}

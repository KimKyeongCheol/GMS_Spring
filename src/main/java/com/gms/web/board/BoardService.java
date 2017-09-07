package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;



@Component
public interface BoardService {
	public String write(ArticleDTO article);
	public List<ArticleDTO> getArticles();
	public List<ArticleDTO> findById(String id);
	public ArticleDTO findBySeq(String seq);
	public String modify(ArticleDTO article);
	public String remove(String seq);
	public String count();
}

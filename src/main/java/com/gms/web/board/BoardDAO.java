package com.gms.web.board;
import java.util.List;



public interface BoardDAO {
	public String insert(ArticleDTO article);
	public List<ArticleDTO> selectAll();
	public List<ArticleDTO> selectById(String id);
	public ArticleDTO selectBySeq(String seq);
	public String update(ArticleDTO article);
	public String delete(String seq);
	public String count();
}

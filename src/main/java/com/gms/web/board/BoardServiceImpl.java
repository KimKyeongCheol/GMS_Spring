package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class BoardServiceImpl implements BoardService{
	//ArticleDao dao=new ArticleDaoImpl();
	
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
	}

	@Override
	public String write(BoardDTO article) {
		return null;//(ArticleDaoImpl.getInstance().insert(article).equals("0"))?"등록실패":"등록성공";
	}

	@Override
	public List<BoardDTO> getArticles() {
		return null;//ArticleDaoImpl.getInstance().selectAll();
	}

	@Override
	public List<BoardDTO> findById(String id) {
		return null;//ArticleDaoImpl.getInstance().selectById(id);
	}

	@Override
	public BoardDTO findBySeq(String seq) {
		return null;//ArticleDaoImpl.getInstance().selectBySeq(seq);
	}

	@Override
	public String modify(BoardDTO article) {
		if(article.getTitle().equals("")){
			article.setTitle(findBySeq(String.valueOf(article.getArticleSeq())).getTitle());
		}
		if(article.getContent().equals("")){
			article.setContent(findBySeq(String.valueOf(article.getArticleSeq())).getContent());
		}
		return null;//(ArticleDaoImpl.getInstance().update(article).equals("0"))?"글수정실패":"글수정성공";
	}

	@Override
	public String remove(String seq) {
		return null;//(ArticleDaoImpl.getInstance().delete(seq).equals("0"))?"삭제실패":"삭제성공";
	}

	@Override
	public String count() {
		return null;//ArticleDaoImpl.getInstance().count();
	}

}

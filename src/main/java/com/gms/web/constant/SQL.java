package com.gms.web.constant;

import com.sun.org.glassfish.gmbal.ParameterNames;

public class SQL {
	
	//,Database.MEMBER_ID,Database.MEMBER_NAME,Database.MEMBER_PASSWORD,Database.MEMBER_SSN,Database.ARTICLE_REGDATE
	public static final String MEMBER_LIST=String.format("SELECT * FROM %s",Database.TABLE_MEMBER);
	public static final String MEMBER_FINDBYNAME=String.format("select * from %s where %s=?",Database.TABLE_MEMBER,Database.MEMBER_NAME);
	public static final String MEMBER_FINDBYID=String.format("select * from %s where %s=?",Database.TABLE_MEMBER,Database.MEMBER_ID);
	public static final String MEMBER_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s",Database.TABLE_MEMBER);
	public static final String MEMBER_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s=?",Database.TABLE_MEMBER,Database.MEMBER_PASSWORD,Database.MEMBER_ID);
	public static final String MEMBER_DELETE=String.format("DELETE FROM %s WHERE %s=?",Database.TABLE_MEMBER,Database.MEMBER_ID);
	
	
	public static final String ARTICLE_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s",Database.TABLE_ARTICLE);
	public static final String ARTICLE_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES(article_seq.nextval,?,?,?,0,SYSDATE)",Database.TABLE_ARTICLE,Database.ARTICLE_SEQ,Database.ARTICLE_ID,Database.TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_HITCOUNT,Database.ARTICLE_REGDATE);
	
	//public static final String ARTICLE_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES (article_seq.nextval,?,?,?,0,SYSDATE)",Database.TABLE_ARTICLE,Database.ARTICLE_SEQ,Database.ARTICLE_ID,Database.ARTICLE_TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_HITCOUNT,Database.ARTICLE_REGDATE);
	
	//public static final String ARTICLE_INSERT=String.format("INSERT INTO %s VALUES(article.nextval,?,?,?,0,SYSDATE)",Database.TABLE_ARTICLE);
	//,Database.ARTICLE_SEQ,Database.ARTICLE_ID
	//atabase.ARTICLE_TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_REGDATE,Database.ARTICLE_HITCOUNT
	public static final String ARTICLE_LIST=String.format("SELECT * FROM %s",Database.TABLE_ARTICLE);
	public static final String ARTICLE_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?",Database.TABLE_ARTICLE,Database.ARTICLE_ID);
	public static final String ARTICLE_FINDBYSEQ=String.format("SELECT * FROM %s WHERE %s=?",Database.TABLE_ARTICLE,Database.ARTICLE_SEQ);
	public static final String ARTICLE_UPDATE=String.format("UPDATE %s SET %s=?, %s=? WHERE %s=?",Database.TABLE_ARTICLE,
			Database.TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_SEQ);
	public static final String ARTICLE_DELETE=String.format("DELETE FROM %s WHERE %s=?",Database.TABLE_ARTICLE,Database.ARTICLE_SEQ);
	
	public static final String MEMBER_INSERT=String.format("INSERT INTO %s VALUES(?,?,?,?,?,?,?,?,now())",
			Database.TABLE_MEMBER);
	
	
	public static final String MEMBER_INSER=String.format("INSERT INTO %s VALUES(?,?,?,?,?,?,?,?,?,?,SYSDATE)",Database.TABLE_MEMBER);
	/*public static final String MAJOR_INSERT=String.format("INSERT INTO %s VALUES(?,?,?,?)",Database.TABLE_MAJOR);*/
	
	/*public static final String STUDENT_LIST=String.format("SELECT %s,%s,%s,%s,%s,%s,%s,%s FROM %s where rownum between  1 and 5",Database.NUM,Database.ID,Database.MEMBER_NAME,
								Database.MEMBER_BIRTH,Database.MEMBER_REGDATE,Database.MEMBER_PHONE,
								Database.MEMBER_EMAIL,Database.TITLE,Database.TABLE_STUDENT);*/
	
	
	
	public static final String STUDENT_LISTS=String.format("SELECT * FROM %s",Database.TABLE_STUDENT );

	
	public static final String MAJOR_INSERT=String.format("INSERT INTO %s (%s,%s,%s,%s) VALUES(?,?,?,?)",Database.TABLE_MAJOR
			,Database.MAJOR_ID,Database.TITLE,Database.MEMBER_ID,Database.SUBJ_ID);
	
	
	/*
	public static final String STUDENT_LIST="select rownum num,t.* "
			+" from (select * from student)t "
			+" where t.num BETWEEN ? AND ?";*/
	
	/*public static final String STUDENT_LIST="select t2.* "
			+" from(select rownum seq,t.* "
			+" from (select * from student order by num desc)t)t2 "
			+" where t2.seq BETWEEN ? AND ?";*/
	

	//public static final String STUDENT_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s  ",Database.TABLE_STUDENT);
	/*public static final String STUDENT_COUNT=
			String.format("SELECT COUNT(*) AS count FROM %s WHERE %s like ?",Database.TABLE_STUDENT,"name");*/
	/*public static final String STUDENT_LIST="select rownum num,t.* "
			+" from (select * from student)t "
			+" where t.num BETWEEN ? AND ?";*/
	
	/*public static final String STUDENT_LIST=String.format("select t.* from (select rownum rnum, s.* from student s)t where t.rnum between ? and ?");
*/
	public static final String STUDENT_SEARCH="select t2.* from (select rownum seq,t.* "
			+ " from (select * from STUDENT where ? like '%' || ? || '%' order by num desc) t) t2 where t2.seq between 1 and 5";
	
	/*public static final String STUDENT_SEARCH="select t2.* from (select rownum seq,t.* "
			+ " from (select * from STUDENT where name like '%' || ? || '%' order by num desc) t) t2 where t2.seq between 1 and 5";
	*/

	/*public static final String STUDENT_FINDNAME=String.format("SELECT * FROM Student WHERE %s like ? ", "name");*/
	/*public static final String STUDENT_FINDBYNAME=
			String.format("SELECT * FROM Student WHERE %s like ?","name");
	*/public static final String STUDENT_FINDBYID=String.format("SELECT * FROM %s WHERE id like ?","Student");
	
	
	/*public static final String STUDENT_LIST=
			" select t.* "
			+" from (select rownum rnum, s.* " 
			+		" from student s)t "
			+" where t.rnum between ? and ?";*/
	
	public static final String STUDENT_LIST="select t.* "
			+ " from  (select @rownum := @rownum + 1 as num, s.* from student s,(select @rownum:=0)r )t where t.num between ? and ? ";
	
			public static final String STUDENT_COUNT=
				String.format(
					"SELECT COUNT(*) AS count FROM %s WHERE %s like ?",
						Database.TABLE_STUDENT,"name");
			public static final String STUDENT_FINDBYNAME=
					String.format(
							"SELECT * FROM Student WHERE %s like ?",
							"name");
	
	
	
}

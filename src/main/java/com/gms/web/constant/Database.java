package com.gms.web.constant;

import org.springframework.stereotype.Component;

@Component
public class Database {
	public static final String ORACLE_DRIVER="oracle.jdbc.driver.OracleDriver";
	public static final String ORACLE_URL="jdbc:oracle:thin:@localhost:1521:xe";
	public static final String MYSQL_DRIVER="";
	public static final String MYSQL_URL="";
	public static final String MSSQL_DRIVER="";
	public static final String MSSQL_URL="";
	public static final String MARIADB_DRIVER="org.mariadb.jdbc.Driver";
	public static final String MARIADB_URL="jdbc:mariadb://localhost:3306/simple";
	public static final String DB2_DRIVER="";
	public static final String DB2_URL="";
	public static final String USERNAME="hanbit";
	public static final String PASSWORD="hanbit";
	public static final String TABLE_MEMBER="member";
	public static final String TABLE_ARTICLE="Board";
	
	public static final String MEMBER_ID="member_id";
	public static final String MEMBER_NAME="name";
	public static final String MEMBER_PASSWORD="password";
	public static final String MEMBER_BIRTH="ssn";
	public static final String MEMBER_PHONE="phone";
	public static final String MEMBER_GENDER="gender";
	public static final String MEMBER_EMAIL="email";
	public static final String MEMBER_PROFILE="profile";
	public static final String MEMBER_ADDR="addr";
	public static final String MEMBER_REGDATE="regdate";
	public static final String MEMBER_SUBJECT="subject";
	public static final String MEMBER_MAJOR="major";
	public static final String ARTICLE_SEQ="article_seq";
	public static final String ARTICLE_ID="id";
	/*public static final String ARTICLE_TITLE="title";*/
	public static final String ARTICLE_CONTENT="content";
	public static final String ARTICLE_REGDATE="regdate";
	public static final String ARTICLE_HITCOUNT="hitcount";
	
	public static final String TABLE_MAJOR="major";
	public static final String MAJOR_ID="major_id";
	public static final String TITLE="title";
	public static final String SUBJECTS="subjects";
	public static final String SUBJ_ID="subj_id";
	
	
	
	public static final String TABLE_STUDENT="student";
	public static final String NUM="num";
	public static final String ID="id";

	
	
	
	
	
}

--***************
--2017.09.04
--[1]MAJOR_TAB
--[2]SUBJECT_TAB
--[3]MEMBER_TAB
--[4]PROF_TAB
--[5]STUDENT_TAB
--[6]GRADE_TAB
--[7]BOARD_TAB
--****************
select * from board ;
	where article_seq like 1;
select 
	* 
from 
	major;
drop 
table 
	major;
CREATE TABLE
	Major
(
	major_id int primary key auto_increment,
	title VARCHAR(10),
	subj_id VARCHAR(10),
	member_id VARCHAR(10),
	PRIMARY KEY(major_id) 
);

alter table major add subj_id varchar(10);
-- -----------------------------------------
INSERT INTO 
	Major
(
	major_id,title
)
VALUES 
(
	'art','미술학'
);

INSERT INTO 
	Major
(	
	major_id,title
)
VALUES 
(
	'computer','컴공'
);
INSERT INTO Major(major_id,title)
VALUES ('economics','경제학');
INSERT INTO Major(major_id,title)
VALUES ('tourism','관광학');

--  ---------------------------------------
drop table subject;

CREATE TABLE Subject(
subj_id VARCHAR(10),
title VARCHAR(10),
PRIMARY KEY(subj_id)
);
-- -----------------------------------------
INSERT INTO Subject(subj_id,title)
VALUES ('자바','자바','computer');

--  ---------------------------------------

CREATE TABLE 
	 Member
(
     member_id VARCHAR(10),
     name VARCHAR(10),
     password VARCHAR(10),
     ssn VARCHAR(15),
     regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
     phone VARCHAR(20),
     email VARCHAR(20),
     profile VARCHAR(20),
     PRIMARY KEY(member_id)
   
);
select * from member;
-- -----------------------------------------
INSERT INTO 
	MEMBER
(
	member_id,name,password,
	ssn,regdate,phone,
	email,profile
)
VALUES
(
	'mankiew','멘큐','1',
	'701201-123456',now(),'010-1234-1234',
	'mankiew@naver.com','mankiew.jpg'
);

INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('hong','홍길동','1','901104-2235140',now(),'010-0001-0001','hong@naver.com','hong.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('kim','김선빈','1','930207-2222220',now(),'010-0002-0002','kim@naver.com','kim.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('song','송중기','1','930207-2222220',now(),'010-0003-0003','song@nate.com','song.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('han','한지민','1','871231-2352322',now(),'010-0004-0004','han@naver.com','han.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('hee','김희선','1','970721-3333332',now(),'010-0005-0005','hee@hanmail.com','hee.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('taeyeon','김태연','1','8900309-2351222',now(),'010-0006-0006','taeyeon@naver.com','taeyeon.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('lya','윤아','1','930207-2465322',now(),'010-0007-0007','lya@naver.com','lya.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd1','보아','1','8601104-8512012',now(),'010-0008-0008','sd1@naver.com','sd1.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd2','이석훈','1','750103-5555550',now(),'010-0009-0009','sd2@naver.com','sd2.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd3','신유미','1','780510-2845122',now(),'010-0010-0010','sd3@naver.com','sd3.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd4','김선빈','1','810628-2101420',now(),'010-0011-0011','sd4@naver.com','sd4.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd5','더밀스','1','701205-9512370',now(),'010-0012-0012','sd5@naver.com','sd5.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd6','김세정','1','990212-3415102',now(),'010-0013-0013','sd6@naver.com','sd6.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd7','황수연','1','970415-9874522',now(),'010-0014-0014','sd7@nate.com','sd7.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd8','임나영','1','990817-6585422',now(),'010-0015-0015','sd8@naver.com','sd8.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd9','김주나','1','901010-1021022',now(),'010-0016-0016','sd9@naver.com','sd9.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd10','김도연','1','980809-1301302',now(),'010-0017-0017','sd10@naver.com','sd10.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd11','김세정','1','851104-0842352',now(),'010-0018-0018','sd11@nate.com','sd11.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd12','임나영','1','851104-6210322',now(),'010-0019-0019','sd12@naver.com','sd12.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd13','전소미','1','000205-9578522',now(),'010-0020-0020','sd13@nate.com','sd13.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd14','전소미','1','970206-6425812',now(),'010-0021-0021','sd14@naver.com','sd14.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd15','김민경','1','780501-5842152',now(),'010-0022-0022','sd15@naver.com','sd15.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd16','강예빈','1','930404-8513692',now(),'010-0023-0023','sd16@naver.com','sd16.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd17','박시연','1','930405-3985422',now(),'010-0024-0024','sd17@naver.com','sd17.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd18','김시현','1','990328-9789632',now(),'010-0025-0025','sd18@naver.com','sd18.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd19','박민지','1','960729-7418562',now(),'010-0026-0026','sd19@naver.com','sd19.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd20','강다니엘','1','931207-0000000',now(),'010-0027-0027','sd20@naver.com','sd20.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd21','강동호','1','850413-0000010',now(),'010-0028-0028','sd21@naver.com','sd21.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd22','권현빈','1','960520-0000020',now(),'010-0029-0029','sd22@naver.com','sd22.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd23','권협','1','900909-0000030',now(),'010-0030-0030','sd23@naver.com','sd23.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd24','김남형','1','810308-0000040',now(),'010-0031-0031','sd24@naver.com','sd24.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd25','김도현','1','970730-0000050',now(),'010-0032-0032','sd25@naver.com','sd25.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd26','김동빈','1','930721-0000060',now(),'010-0033-0033','sd26@naver.com','sd26.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd27','김동한','1','930207-0000070',now(),'010-0034-0034','sd27@naver.com','sd27.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd28','김동현','1','970917-0000080',now(),'010-0035-0035','sd28@naver.com','sd28.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd29','김사무엘','1','930207-0000090',now(),'010-0036-0036','sd29@naver.com','sd29.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd30','김시현','1','990609-0000100',now(),'010-0037-0037','sd30@naver.com','sd30.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd31','김용국','1','850620-0000110',now(),'010-0038-0038','sd31@naver.com','sd31.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd32','김예현','1','890928-0000120',now(),'010-0039-0039','sd32@naver.com','sd32.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd33','김재환','1','930227-0000130',now(),'010-0040-0040','sd33@naver.com','sd33.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd34','라이관린','1','931203-0000140',now(),'010-0041-0041','sd34@naver.com','sd34.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd35','박성우','1','931127-0000150',now(),'010-0042-0042','sd35@naver.com','sd35.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd36','박우담','1','930706-0000160',now(),'010-0043-0043','sd36@naver.com','sd36.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd37','박우진','1','930207-0000170',now(),'010-0044-0044','sd37@naver.com','sd37.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd38','박지훈','1','820923-0000170',now(),'010-0045-0045','sd38@naver.com','sd38.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd39','손동명','1','930313-0000180',now(),'010-0046-0046','sd39@naver.com','sd39.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd40','우진영','1','951207-0000190',now(),'010-0047-0047','sd40@naver.com','sd40.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd41','유선호','1','930207-0000200',now(),'010-0048-0048','sd41@naver.com','sd41.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd42','김선빈','1','801010-0000210',now(),'010-0049-0049','sd42@naver.com','sd42.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd43','옹성우','1','851231-0000220',now(),'010-0050-0050','sd43@naver.com','sd43.jpg');
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,phone,email,profile)
VALUES('sd44','이대휘','1','980505-0000230',now(),'010-0051-0051','sd44@naver.com','sd44.jpg');

--  ---------------------------------------
CREATE TABLE
	Prof
(
	member_id VARCHAR(10),
	salary VARCHAR(10),
	PRIMARY KEY(member_id)
);
SELECT 
	* 
FROM 
	Prof;
-- -----------------------------------------


--  ---------------------------------------

CREATE TABLE 
	Student
(
	member_id VARCHAR(10),
	stu_no VARCHAR(8),
	PRIMARY KEY(member_id)
);
-- -----------------------------------------


--  ---------------------------------------
drop 
table 
	Grade;
	
CREATE TABLE 
	Grade
(
     grade_seq INT NOT NULL AUTO_INCREMENT,
     score VARCHAR(3),
     exam_date VARCHAR(12),
     member_id VARCHAR(10),
     subj_id VARCHAR(10),
     PRIMARY KEY(grade_seq)
);
-- -----------------------------------------


--  ---------------------------------------

drop table Board;
CREATE TABLE Board(
     article_seq INT NOT NULL AUTO_INCREMENT,
     id VARCHAR(10),
     title VARCHAR(50),
     content VARCHAR(1000),
     hitcount INT,
     regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY(article_seq)
);

-- -----------------------------------------


--  ---------------------------------------
create view student(num,id,name,password,ssn,regdate,phone,email,profile);

SELECT
	COUNT(*) AS count
FROM
	Member;
UPDATE
	Member
SET 
	password='2'
WHERE
	member_id='hong';




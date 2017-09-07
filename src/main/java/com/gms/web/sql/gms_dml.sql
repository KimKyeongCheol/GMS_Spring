--*****************
-- MEMBER TABLE
-- 2017.08.02
-- 회원관리 테이블
-- (member_id,name,password,ssn,regdate,
--  major_id,phone,email,profile)
--******************
SELECT * from MEMBER;

SELECT COUNT(*) AS COUNT FROM MEMBER;
SELECT * FROM Member WHERE id='dsd';
INSERT INTO MEMBER(member_id,name,password,ssn,regdate,major_id,phone,email,profile)
VALUES('mankiew','멘큐','1','701201-123456',SYSDATE,'economics','010-1234-1234','mankiew@naver.com','mankiew.jpg');
UPDATE Member SET password='1'WHERE id='dsd';
DELETE FROM Member WHERE id='dsd';

--*****************
-- BOARD TABLE
-- 2017.08.02
-- 게시글관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************
SELECT * FROM BOARD;

INSERT INTO Board(article_seq,member_id,title,content,hitcount,regdate) VALUES(article_seq.nextval,'kia','날씨가 좋다',
'무한한 가슴이 기쁘며, 힘있다..',57,SYSDATE);
UPDATE Board SET %s=''WHERE %s='';
DELETE FROM Board WHERE %s='';

--*****************
-- GRADE TABLE
-- 2017.08.02
-- 성적관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************
SELECT * FROM Grade;

INSERT INTO Grade(greade_seq,score,exam_date,subj_id,member_id) VALUES();
UPDATE Grade SET %s=''WHERE %s='';
DELETE FROM Grade WHERE %s='';

--*****************
--  TABLE
-- 2017.08.02
-- 게시글관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************
SELECT * FROM Major;

INSERT INTO Major(major_id,title) VALUES();
UPDATE Major SET %s=''WHERE %s='';
DELETE FROM Major WHERE %s='';

INSERT INTO Major(major_id,title)
VALUES ('art','미술학');
INSERT INTO Major(major_id,title)
VALUES ('computer','컴공');
INSERT INTO Major(major_id,title)
VALUES ('economics','경제학');
INSERT INTO Major(major_id,title)
VALUES ('tourism','관광학');

--*****************
--  TABLE
-- 2017.08.02
-- 게시글관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************
SELECT * FROM Subject;

INSERT INTO Subject(subj_id,title,major_id) VALUES();
UPDATE Subject SET %s=''WHERE %s='';
DELETE FROM Subject WHERE %s='';

INSERT INTO Subject(subj_id,title,major_id)
VALUES ('자바','자바','computer');
INSERT INTO Subject(subj_id,title,major_id)
VALUES ('HTML','HTML','computer');
INSERT INTO Subject(subj_id,title,major_id)
VALUES ('SQL','SQL','computer');
INSERT INTO Subject(subj_id,title,major_id)
VALUES ('CSS','CSS','computer');
INSERT INTO Subject(subj_id,title,major_id)
VALUES ('C언어','C언어','computer');
INSERT INTO Subject(subj_id,title,major_id)
VALUES ('javascript','자스','computer');

--*****************
--  TABLE
-- 2017.08.02
-- 게시글관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************

SELECT * FROM Student;
INSERT INTO Student(member_id,stu_no) VALUES();
UPDATE Student SET %s=''WHERE %s='';
DELETE FROM Student WHERE %s='';

--*****************
--  TABLE
-- 2017.08.02
-- 게시글관리 테이블
-- article_seq,member_id,title,content,hitcount,regdate
-- 
--******************

SELECT * FROM Prof;
INSERT INTO Prof(member_id,salary) VALUES();
UPDATE Prof SET %s=''WHERE %s='';
DELETE FROM Prof WHERE %s='';

--***********************
UPDATE Member SET major_id='computer'; 
UPDATE Member SET profile='defaultimg.jpg';

SELECT id FROM Board WHERE title LIKE '%o%';

SELECT * FROM Member m,Board b WHERE m.id=b.id;

SELECT COUNT(*) FROM Student s,

select subj_id
from member m
join MAJOR r on m.member_id like r.member_id;
select * from member;



select substr(birth, 1,8)||'******' from member;
select rownum 번호,member_id ID , name 이름,password 비밀번호, substr(birth,1,8) || '******' 생년월일, phone 전화번호, email 이메일, addr 주소, major_id 학과, profile 프로필, regdate 등록일
from member;




create view student(num,id,name,birth,regdate,phone,email,title)
as
select rownum, t.*
from(select
	a.member_id id,a.name,rpad(substr(a.birth,1,8),14,'*') ssn,
	to_char(a.regdate,'yyyy-MM-dd') regdate, a.phone,a.email,
	listagg(s.title,',') within group (order by s.title) title
from member a
	left join major m on a.member_id like m.member_id
	left join subject s on m.subj_id like s.subj_id
	group by a.member_id, a.name, a.birth,a.regdate,a.phone,a.email
	order by regdate)t
order by rownum desc;


drop view student;
-- -------------------------------------------------------------------------------------------------
create view 
	student
(
	id,name,ssn,
	regdate,phone,email,
	pass,subject
)
as
(SELECT 
	a.member_id id,
  	a.name name,
  	RPAD(SUBSTRING(a.ssn,1,8),14,'*') Birth,
	DATE_FORMAT(a.regdate,'%Y-%m-%d') regdate, 
 	a.phone phone,a.email email ,a.password pass,
	GROUP_CONCAT(m.title) subject
FROM
	Member a
	LEFT JOIN major m 
		ON a.member_id LIKE m.member_id
	LEFT JOIN subject s 
		ON m.subj_id LIKE s.subj_id
	GROUP BY
	 	a.member_id, a.name, a.ssn,a.regdate,a.phone,a.email
	ORDER BY 
		regdate
);
	
-- -------------------------------------------------------------------------------------------------
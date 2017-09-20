var algo= algo || {};
var series={
		arithmetic : (s,e)=>{  //(s,e)=>{ 람다식 방식  function대신 => 를 추가
			var start=s*1;
			var end_num=e*1;
			var sum=0;
			for(var i=start;i<=end_num;i++){
				sum+=i;
			}
			return sum;

	}
		/*arithmetic : function(s,e){
				var start=s*1;
				var end_num=e*1;
				var sum=0;
				for(var i=start;i<=end_num;i++){
					sum+=i;
				}
				return sum;

		}*/,
		switchSeries : () => {
			var sum=0,i=0;
			 var sw=0;
			   do {
			  i++;
			   if(sw==0) {
				   sum+=i;
			      sw=1;
			   }else {
				   sum-=i;
			      sw=0;
			   }
			   }while(i<100);
			   return sum;
		},
		diffSeries : ()=>{
			var diff=1,sum=0,i=1;
			
			for(var j=0;j<100;j++){
				
				sum+=i;
				i=i+diff;
				diff=diff+1;
				
				
			}return sum;
			
		},
		fract : (e) => {
			var i=1,j=1,sum=1;
			var num=e*1;
			for(i=2;i<=num;i++){
				j=j*i;
				sum=sum+j;
/*				console.log(i);*/
			}return sum;
		},
		fibo :(e)=>{
			alert('확인 -->' +e)
			var Num1=1,Num2=1,temp=0,sum=Num1+Num2;
			var num=e*1;
			
			for(var i=1; i<num; i++)

	         {
	                  temp += sum; //피보나치 항의 합
	                  sum = Num1 + Num2; //피보나치 다음 항 계산
	                  Num1 = Num2;
	                  Num2 = sum;
	         }        
			return temp;
		}
	
} 
var sort={
		//select
		//burble
		//insertion
		//ranking
}
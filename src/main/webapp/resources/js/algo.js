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
		select : (e)=>{
			 console.log('start : '+e);
			var temp,cup;
			
			for(var i=0;i<=e.length-1;i++){
				temp = i;
				for(var j=i+1;j<=e.length;j++){
					if(e[temp]*1>e[j]*1){
						temp = j;
					}
				}
				cup = e[i];
				e[i]=e[temp];
				e[temp]=cup;
				
			
			}
			return e;
		},
		burble : (e)=>{
			 console.log('start : '+e);
			var temp = 0; 
		    for(var i = 0; i < e.length - 1; i++){ 
		        for(var j = 0; j < e.length - 1 - i; j++){ 
		           
		            if(e[j]*1 > e[j+1]*1){ 
		                temp = e[j]; 
		                e[j] = e[j+1]; 
		                e[j+1] = temp;   
		            	/*
						  console.log('start : '+x);
						  var i=0;j=0;k=0;
						  for(i=0;i<x.length;i++){
						  for(j=i;j<x.length;j++){
						  if(x[i]*1>x[j+1]*1){
						  k=x[i];
						  x[i]=x[j+1];
						  x[j+1]=k;
						
						}*/
		            } 
		        } 
		    } 
			return e;
		},
		//insertion
		
		insertion : (e) => {
			 console.log('start : '+e);
			var temp = 0,count = 0,move_index=0; 
			for(var  i = 1; i < e.length; i++){ 
		         temp = e[i]; 
		         move_index = i - 1; 
		         count++; 
		         while(move_index >= 0 && e[move_index]*1 > temp){ 

		             e[move_index + 1] = e[move_index]; 

		             move_index--; 

		         } 

		         e[move_index + 1] = temp; 

		     } 


			return e;
		}
		//ranking
}

var mtx={}
var math={}
var app1={}
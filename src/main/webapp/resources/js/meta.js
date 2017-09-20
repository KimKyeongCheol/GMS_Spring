var meta=meta || {};
meta.common=(function(){
	 var init=function(ctx){
		/* alert('이동 :'+$$());*/
		onCreate();
		
		meta.session.init(ctx); 
		/* alert('이동 :'+$$());
		 alert('이동 :'+css());
		 alert('이동 :'+js());
		 alert('이동 :'+img());*/
		 meta.index.init();
	 };
	 var onCreate=function(){
		 setContentView();
	 };
	 var setContentView=function(){
		 
	 };
	 return{
		 init:init
	 }
})();
meta.index=(function(){
	var $wrapper;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#button').on('click',function(){ //function() <- 명칭은 이벤트핸들러, 콜백 
			alert('버튼 클릭');
			$wrapper.empty();
		});
	
	};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		var $image=$('<img>',{  //'<img>', dom 속성 $image=$('<img>' dom객체는 이렇게 붙여서 사용한다.
			id:'loading', 
			src: img()+'/kkk.jpg'
		});
		$wrapper.append($image);
		var $btn=$('<input>',{
			id:'button',
			type:'button',
			value:'버튼1'
		});
		//btn.appendTo($('#wrapper'));
		$wrapper.append($btn);
		//$('#wrapper').empty();
	};
	return {
		init:init
	}
})();
meta.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('css',ctx+'/resources/css');
		sessionStorage.setItem('img',ctx+'/resources/img');
	};
	var getPath=function(x){
        return sessionStorage.getItem(x);
        
  };
  return {
        init : init,
        getPath : getPath
        
  };
})();
var $$=function(){return meta.session.getPath('ctx');};
var js=function(){return  meta.session.getPath('js');};
var css=function(){return meta.session.getPath('css');};
var img=function(){ return meta.session.getPath('img');};



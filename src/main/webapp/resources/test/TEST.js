var meta=meta || {}

meta.common=(function(){
   var init=function(ctx){
      onCreate();
      meta.session.init(ctx);
      meta.index.init();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){
      
   };
   return {
      init : init
      
   };
})();

meta.index=(function(){
   var $image,$navbar,$container,ctx,img,js,css,temp,algo;
   var init=function(){
      js=$$('j');
      temp=js+'/template.js';
      algo=js+'/algo.js';
      onCreate();
      meta.ui.init();
   };
      
   var onCreate=function(){   
      setContentView();
      $('#button').click(()=>{//펑션을 이벤트핸들러 또는 콜백 함수라고 한다.
         alert('화면이 지워집니다.');
         $container.empty();
         meta.auth.init();
         $.getScript(temp,()=>{
            $('#login_box').append(compUI.input({type : 'button', id : 'login_btn', value : '로그인'}));
            $('#login_box').append(compUI.input({type : 'reset', id : 'cancel_btn', value : '취소'}));
         $('#login_btn').on('click',function(){         
         meta.ui.navbar();
         meta.navbar.init();
         $.getScript(temp,()=>{
            $('#container').html(algoUI.series());
            $.getScript(temp,()=>{
               $('#start_num').append(compUI.input({
                  type : 'text' , 
                  id : 'start_num_text',
                  placeholder : '시작값 입력'
               }));
               $('#last_num').append(compUI.input({
                  type : 'text',
                  id : 'last_num_text',
                  placeholder : '마지막 값 입력'
               }));               
               $('#aa').append(compUI.input({
                     type : 'button',
                     id : 'algo_button',
                     value : '연산하기'
               }));      
               $('#start_num_text').val('1');
               $('#last_num_text').val('100');
               $('#algo_button').on('click',function(){               
                  $.getScript(algo,(x1,x2)=>{
                  $('#result').text('결과값 : ' + series.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));   
                  });
               });            
            });                        
         });            
      });                                                
   });
});         
};
   
   var setContentView=function(){
      $container=$('#container');
      /*$wrapper=$('#wrapper');*/
      ctx=$$('c');
      img=$$('i');
      $.getScript(temp,(x)=>{
      var $image=$('<img/>',
            introUI.loading(img))
            $container.append($image);
         /*$image=$('<img/>',{id: 'loading', src: $img+'/loading.gif'});//제이슨은 키값과 밸류값을 같는다 키값에는 아이디,태그등을 넣어주고//어트리뷰트는 기성품(이미만들어짐) 프로퍼티는 값이 할당되기 전까지는 모른다.*/                
      });
      var $button=$('<input/>',{id: 'button', type:'button', value:'클릭'})      
      /*$('#wrapper').empty*/ // empty는 화면을 지우는 메서드
      
      /*$image.appendTo($('#wrapper'));*///appendTo 는 리턴하는 것이다.
      $button.appendTo($('#container'));
   };
   return {
      init : init
      
   };
})();

meta.auth=(function(){
   var $wrapper,ctx,css,img,js,temp,$container;
   var init=function(){
      js=$$('j');
      temp=js+'/template.js';
      $container=$('#container');
      onCreate();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){
      $wrapper=$('#wrapper');
      ctx=$$('x');
      css=$$('c');
      img=$$('i');
      js=$$('j');
      loginView();
   };
   var loginView=function(){
      alert('로그인화면');
      
      $.getScript(temp,()=>{
         $container.html(introUI.loginView(img));         
         /*$('#login_box').append(meta.component.input({type : 'submit', id : 'login_btn', value : '로그인'}))
          $('#login_box').append(meta.component.input({type : 'reset', id : 'cancel_btn', value : '취소'}))*///돔에다가 돔을 연결할때 쓰는 문법
         //동적 ui를 쓰려면 펑션의 파라미터 값을 제이슨으로 던져서 유동적으로 처리한다.
      });

      
      
   };
   return {
      init : init
         
   };
})();

meta.navbar=(function(){
   var algo,js,temp;
   var init=function(){
      js=$$('j');
      algo=js+'/algo.js';
      temp=js+'/template.js';
      onCreate();
   };
   var onCreate=function(){
      $.getScript(temp,()=>{         
         $('#navbar').html(introUI.navbar());      
      var $u1=$("#navbar_ul_stu");
      var $u2=$("#navbar_ul_grade");
      var $u3=$("#navbar_ul_board");
      $u1.addClass("dropdown-menu");
      $u2.addClass("dropdown-menu");
      $u3.addClass("dropdown-menu");
      var $home=$('#home');
      var $logout=$('#logout')
            
      $('.dropdown-menu a').eq(0).on('click',function(){
         alert('0');
         /*app.controller.moveTo('member','member_add');*/
         /*location.href=app.path.ctx()+"/member/add";*/
      });
      $('.dropdown-menu a').eq(1).on('click',function(){
         alert('1');
         /*app.member.list(1);*/
         /*location.href=app.path.ctx()+"/member/list";*/
         /*controller.list('member','member_list','1');*/
      });
      $('.dropdown-menu a').eq(2).on('click',function(){
         alert('2');
         /*app.controller.moveTo('member','member_detail');*/
         /*location.href=app.path.ctx()+"/member/detail";*/
         /*controller.moveTo('member','member_detail');*/
      });
      $('.dropdown-menu a').eq(3).on('click',function(){
         alert('3');
         /*app.controller.deleteTarget(prompt('삭제할 ID를 입력하세요'),'member','member_list');*/
         /*location.href=app.path.ctx()+"/member/delete";*/
          /*controller.deleteStudent();*/
      });
      $('.dropdown-menu a').eq(4).on('click',function(){
         alert('4');
         /*app.controller.moveTo('grade','grade_add');*/
         /*location.href=app.path.ctx()+"/grade/add";*/
      });
      $('.dropdown-menu a').eq(5).on('click',function(){
         alert('5');
         /*app.controller.moveTo('grade','grade_list');*/
         /*location.href=app.path.ctx()+"/grade/list";*/
         /*controller.list('member','member_list','1');*/
      });
      $('.dropdown-menu a').eq(6).on('click',function(){
         alert('6');
         /*app.controller.moveTo('grade','grade_detail');*/
         /*location.href=app.path.ctx()+"/grade/detail";*/
         /*controller.moveTo('member','member_detail');*/
      });
      $('.dropdown-menu a').eq(7).on('click',function(){
         alert('7');
         /*app.controller.deleteTarget(prompt('삭제할 성적을 가진 ID를 입력하세요'),'grade','grade_list');*/
         /*location.href=app.path.ctx()+"/grade/delete";*/
          /*controller.deleteStudent();*/
      });
      $('.dropdown-menu a').eq(8).on('click',function(){
         alert('8');
         /*app.controller.moveTo('board','board_write');*/
         /*location.href=app.path.ctx()+"/board/write";*/
      });
      $('.dropdown-menu a').eq(9).on('click',function(){
         alert('9');
         /*app.controller.moveTo('board','board_list');*/
         /*location.href=app.path.ctx()+"/board/list";*/
         /*controller.list('member','member_list','1');*/
      });
      $('.dropdown-menu a').eq(10).on('click',function(){
         alert('10');
         /*app.controller.moveTo('board','board_detail');*/
         /*location.href=app.path.ctx()+"/board/detail";*/
      });
      $('.dropdown-menu a').eq(11).on('click',function(){
         alert('11');
         /*app.controller.deleteTarget(prompt('삭제할 게시글을 가진 ID를 입력하세요'),'board','board_list');*/
         /*location.href=app.path.ctx()+"/board/delete";*/
          /*controller.deleteStudent();*/
      });
      $('#arithBtn').on('click',function(){
         alert('등차수열 클릭');
         $('#content').remove();
         $.getScript(temp,()=>{
            $('#container').html(algoUI.series());
            $.getScript(temp,()=>{
               $('#start_num').append(compUI.input({
                  type : 'text' , 
                  id : 'start_num_text',
                  placeholder : '시작값 입력'
               }));
               $('#last_num').append(compUI.input({
                  type : 'text',
                  id : 'last_num_text',
                  placeholder : '마지막 값 입력'
               }));
               $('#aa').append(compUI.input({
                  type : 'button',
                  id : 'algo_button',
                  value : '연산하기'
               }));   
               /*   $('#start_num_text').val('1');
               $('#last_num_text').val('100');*/
               $('#start_num_text').val('1').attr('readonly','true');
               $('#last_num_text').val('100').attr('readonly','true');
               $('#algo_button').click(()=>{               
                  $.getScript(algo,(x1,x2)=>{
                     $('#result').text('결과값 : ' + series.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));
                  });            
               });
            });         
         });      
      });
      $('#switchBtn').on('click',function(){
         alert('스위치수열 클릭');
         $('#container').empty();
         /*$('#content').remove();*/
         $.getScript(temp,()=>{
            $('#container').html(algoUI.series());
            $.getScript(temp,()=>{
               $('#start_num').append(compUI.input({
                  type : 'text' , 
                  id : 'start_num_text',
                  placeholder : '시작값 입력'
               }));
               $('#last_num').append(compUI.input({
                  type : 'text',
                  id : 'last_num_text',
                  placeholder : '마지막 값 입력'
               }));               
               $('#aa').append(compUI.input({
                     type : 'button',
                     id : 'algo_button',
                     value : '연산하기'
               }));      
            /*$('h1').empty();*/
            /*$('h1').text('스위치수열의 합');*/
            $('h1').html('스위치수열의 합');//엠티와,텍스트를 합친 역할을 한다.//여기에 스트링값이 아니라 돔객체가 들어오면 object로만 표시된다.
            /*$('#start_num_text').val('1');*/
         /*   $('#start_num_text').attr('value','1');//위에것과 같다. val()=파라미터 안의 값이 없으면 게터, 값이 있으면 세터의 역할이다.
            $('#last_num_text').val('100');*/
            $('#start_num_text').val('1').attr('readonly','true');//밸류값 수정못하게 하는 역할
            $('#last_num_text').val('100').attr('readonly','true');
            $('#algo_button').click(()=>{
               $.getScript(algo,()=>{
                  $('#result').text('결과값 : ' + series.switchSeries())
               })            
            });
         /*   $('#algo_button').on('click',function(){
               $('#result').text('결과값 : ' + meta.algo.switchSeries())
            });*/
            });   
         });
      });
      $('#geoBtn').on('click',function(){
         alert('등비수열 클릭');
         $('#container').empty();
         $.getScript(temp,()=>{
            $('#container').html(algoUI.series());
            $.getScript(temp,()=>{
               $('#start_num').after(compUI.input({
                  type : 'text' , 
                  id : 'start_num_text',
                  placeholder : '시작값 입력'
               }));
               $('#last_num').after(compUI.input({
                  type : 'text',
                  id : 'last_num_text',
                  placeholder : '마지막 값 입력'
               }));               
               $('#aa').after(compUI.input({
                     type : 'button',
                     id : 'algo_button',
                     value : '연산하기'
               }));      
            $('h1').html('계차수열의 합');
            $('#last_num').remove();
            $('#last_num_text').remove();
            $('#start_num').text('항수');
            $('#algo_button').click(()=>{
               $.getScript(algo,(x)=>{
                  $('#result').text('결과값 : ' + series.seq_of_diff($('#start_num_text').val()));   
               });
            });            
         });
      });      
   });
      $('#facBtn').on('click',function(){
         alert('팩토리얼 클릭');
         $('#container').empty();
         $.getScript(temp,()=>{
            $('#container').html(algoUI.series());
            $.getScript(temp,()=>{
               $('#start_num').after(compUI.input({
                  type : 'text' , 
                  id : 'start_num_text',
                  placeholder : '시작값 입력'
               }));
               $('#last_num').after(compUI.input({
                  type : 'text',
                  id : 'last_num_text',
                  placeholder : '마지막 값 입력'
               }));               
               $('#aa').after(compUI.input({
                     type : 'button',
                     id : 'algo_button',
                     value : '연산하기'
               }));      
            $('h1').html('팩토리얼의 합');
            $('#last_num').remove();
            $('#last_num_text').remove();
            $('#start_num').text('항수');
            $('#algo_button').click(()=>{
               $.getScript(algo,(x)=>{
                  $('#result').text('결과값 : ' + series.fac($('#start_num_text').val()))   
            });
         });            
      });
   });
});
      $('#fiboBtn').on('click',function(){
         alert('피보나치수열 클릭');
      $('#container').empty();
      $.getScript(temp,()=>{
         $('#container').html(algoUI.series());
         $.getScript(temp,()=>{
            $('#start_num').after(compUI.input({
               type : 'text' , 
               id : 'start_num_text',
               placeholder : '시작값 입력'
            }));
            $('#last_num').after(compUI.input({
               type : 'text',
               id : 'last_num_text',
               placeholder : '마지막 값 입력'
            }));               
            $('#aa').after(compUI.input({
                  type : 'button',
                  id : 'algo_button',
                  value : '연산하기'
            }));      
         $('h1').html('피보나치수열의 합');
         $('#last_num').remove();
         $('#last_num_text').remove();
         $('#start_num').text('항수');
         $('#algo_button').click(()=>{
            $.getScript(algo,(x)=>{
            $('#result').text('결과값 : ' + series.fibo($('#start_num_text').val()));
            }); //외부의 함수를 호출하는 구문
            /*$('#result').text('결과값 : ' + series.fibo($('#start_num_text').val()));*/
            });
         });
      });      
   });
      $('#home a').on('click',function(){
         alert('home');
         app.controller.moveTo('common','main');
         /*location.href=app.path.ctx()+"/auth/main";*/
      });
      
      $('#logout').on('click',function(){
         alert('logout');
         app.controller.moveTo('common','login');
         /*location.href=app.path.ctx()+"/auth/main";*/
      });
   });
   };
   
   return {
      init : init
   };
})();

meta.ui=(function(){
   var $wrapper,$ctx,$css,$img,$js,$container,$navbar;
   var init=function(){
      $wrapper=$('#wrapper');$ctx=$$('x');$css=$$('c');$img=$$('i');$js=$$('j');$navbar=$('#navbar');$container=$('#container');
   };
   var navbar= function(){//dom객체에서 append(dom에 dom을 붙이는것),html(html코딩과 같다) 

   }
/*   var arithmetic=function(){
      1부터 100까지 등차수열의 합
      $('#wrapper').append(content)

      $('#start_num').after(meta.component.input({
         type : 'text' , 
         id : 'start_num_text',
         placeholder : '시작값 입력'
      }));
      $('#last_num').after(meta.component.input({
         type : 'text',
         id : 'last_num_text',
         placeholder : '마지막 값 입력'
      }));
      $('#aa').after(meta.component.input({
         type : 'button',
         id : 'algo_button',
         value : '연산하기'
      }));
   };*/
   
   return {
      init : init,
      /*arithmetic : arithmetic,*/
      navbar : navbar
   };
})();


meta.session=
   {
   init : function(ctx){
      sessionStorage.setItem('x',ctx);
      sessionStorage.setItem('j',ctx+'/resources/js');
      sessionStorage.setItem('i',ctx+'/resources/img');
      sessionStorage.setItem('c',ctx+'/resources/css'); 
   },
   
   getPath : function(x){
      return sessionStorage.getItem(x)
   }
   };
   


var $$=function(x){return meta.session.getPath(x);};



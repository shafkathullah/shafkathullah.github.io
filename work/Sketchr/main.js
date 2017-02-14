$(document).ready(function(){
  var widthWrapper = $(".wrapper").width();
  var widthBlock = widthWrapper/100;
  var num = widthWrapper/widthBlock;
  var mul = num/2 * num;
  var wrap = $(".wrapper");
  

    for(i=0;i<mul;i++){
      wrap.append("<div class='block'></div>");
    }

  $(".block").width(widthBlock).height(widthBlock);
  $(".toolbox").height($(".wrapper").height());

  $("#colr").on("change",function(){
    $(".color").css("background-color",$("#colr").val());
  });

  $( "input" ).on( "click", function() {
    if($( "input:checked" ).val() == 'pen'){

      function paint(){
        $(this).css('background-color',$("#colr").val());
      }

      $(".block").on('mousedown',function(event){
        event.preventDefault();
        $(this).css('background-color',$("#colr").val());
        $(".block").on('mouseenter',paint);
      });

      $(".block").on('mouseup',function(event){
        event.preventDefault();
        $(".block").off('mouseenter',paint);
      });
    }
    else{
      function erase(){
        $(this).css('background-color','white');
      }

      $(".block").on('mousedown',function(event){
        event.preventDefault();
        $(this).css('background-color','white');
        $(".block").on('mouseenter',erase);
      });

      $(".block").on('mouseup',function(event){
        event.preventDefault();
        $(".block").off('mouseenter',erase);
      });
    }
  });

  $(".clear").on("click",function(){
    $(".block").css("background-color","white");
  });

});
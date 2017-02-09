$(document).ready(function(){
    var winW = $(window).width();
    var winH = $(window).height();
    var areaT = winW * winH;
    var numDivs = areaT / 260;
    var eraser = false;
    var wrap = $(".wrapper");
    for(var i=0;i<numDivs;i++){
        wrap.append("<div class='block'></div>");
    }

     var paint = 1;

     $(".block").mousedown(function(){
        
     });
        
    
    
    
    

});





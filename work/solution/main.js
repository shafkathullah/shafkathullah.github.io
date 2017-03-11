$(document).ready(function(){
    $("button").on('click',function(){
        var input = $("#tt").val().toLowerCase();
        var lines = input.split("\n");
        for (var x=0;x < lines.length;x++){
            if(lines[x] == ""){
                var rem = lines.splice(x,1);
                x--;
            }else{
                var temp = "<li>"+lines[x]+"</li>"
                
            } 
        }
        for(i in lines){
            lines[i] = lines[i].split(" ");
        }   
        var pages=[];
        var queries=[];
        var p = 0;
        var q = 0;
        for (i in lines){
            if(lines[i][0] == "p"){
                pages[p] = lines[i];
                p++;
            }else if(lines[i][0] == "q"){
                queries[q] = lines[i];
                q++;
            }  
        }
        for(i in pages){
            pages[i].shift();
        }
        for(i in queries){
            queries[i].shift();
        }


        var results=[];
        for(i in pages){
            console.log(pages[i]);
        }
        for(i in queries){
            console.log(queries[i]);
        }
        

        for(i in queries){
            console.log("------Query------");
            for(k in pages){
                var temp = 0;
                console.log("temp cleared!!");
                for(j in queries[i]){
                    var w = pages[k].indexOf(queries[i][j]);
                    if(w >= 0){
                        temp = temp + (8-w)*(8-j);
                    }
                }
                results.push(temp);
            }
        }

        //console.log(results);
        //console.log(results.indexOf(0));

        var group=[];
        //console.log(queries.length);
        
        //console.log(results.splice(0,queries.length));
        for(i in queries){
            //console.log(results.splice(0,queries.length));
            group.push(results.splice(0,pages.length));
        }
        
        //console.log(results);
    
        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }

        var final=[];

        for(i in group){
            var tempo=[];
            for(var countr=0;countr<5;countr++){
                if(indexOfMax(group[i]) >= 0){
                    if(group[i][indexOfMax(group[i])] == ""){
                        tempo.push(" ");
                    }else{
                        tempo.push("P"+(indexOfMax(group[i])+1));
                        group[i][indexOfMax(group[i])] = "";
                    }
                    
                }
                
            }
            final.push(tempo);
        }
                      
        for(i in final){
            var k = parseInt(i)+1;
            var word = final[i].toString().replace(/,/g , " ");
            var temp = "<li>Q"+k+": "+word+"</li>";
            $("#output").append(temp);
        }                    
        
    });
});
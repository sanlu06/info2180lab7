   window.onload = function() {
             document.getElementById("search").addEventListener("click", function(){
                // go out and get result from request.php
                var a,b,c,x;
                 a = "request.php?q=&all=true";
                 b = document.getElementById("searchterm").value;
                 c = a.concat(b);
                //creates an ordered list on results
                 x = document.createElement("OL");
                var list = document.getElementById("result");
                document.getElementById("result").appendChild(a);
                 list.insertBefore(x, list.childNodes[0]);
                
                
                
                new Ajax.Request(c,
                       {
                          parameters: {term:"API"},
                          method: "get",
                          onSuccess: showDefinition,
                         // onFailure: showDefinition
                         });
           
function showDefinition(data) {
              
                document.write (data.responseText);
                        }
           });
};

/* window.onload = function() {
             document.getElementById("search").addEventListener(
                 
                 "click", function(){
                     
                // go out and get result from request.php
                var a = "request.php?q=";
                var b = document.getElementById("searchterm").value;
                var c = a.concat(b);
                
                //creates an ordered list on results
               /* var x = document.createElement("OL");
                //var list = document.getElementById("result");
                //x.appendChild(a);
                //document.body.appendChild(n);
                document.getElementById("result").appendChild(a);
                 list.insertBefore(x, list.childNodes[0]);
                
                
                 new Ajax.Request(c,
                       {
                          //parameters: {term:"API"},
                          method: "get",
                          onSuccess: showDefinition
                         });
           });

function showDefinition(data) {
              
                document.write (data.responseText);
                        }
           };

function myFunction() {
     var newItem = document.createElement("OL");
                var textnode = document.createTextNode("Water");
                newItem.appendChild(list);
                
                var list = document.getElementById("a");
                list.insertBefore(newItem, list.childNodes[0]);
}
  */  
           
               
     
               

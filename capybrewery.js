
        
        document.querySelector(".boxbtnblue").addEventListener("click", function(){
            name = "Smoked Log";
            value = 0;
            value = value + 1;
            //alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
        })
        
        document.querySelector(".boxbtnpink").addEventListener("click", function(){
            name = "Sour Plum";
            value = 0;
            value = value + 1;
            //alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
            
        })
        
        document.querySelector(".boxbtnyellow").addEventListener("click", function(){
            name = "Midnight on the Beach";
            value = 0;
            value = value + 1;
            //alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
        })
        
        document.querySelector(".boxbtnbrick").addEventListener("click", function(){
            name = "Destroyer of Wines";
            value = 0;
            value = value + 1;
            //alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
		    //addtocart(document.querySelector(next).value);
        })
        
        document.querySelector(".boxbtngreen").addEventListener("click", function(){
            name = "Limeade Dreams";
            value = 0;
            value = value + 1;
            //alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
		    //addtocart(document.querySelector(next).value);
        })

        document.querySelector(".boxbtnwhite").addEventListener("click", function(){
            name = "Winter Blizzard";
            value = 0;
            value = value + 1;
           // alert("Adding " + name + " to Cart");
            addtocart(value + " Pack of " + name);
		    //addtocart(document.querySelector(next).value);
        })

  //     document.querySelector(".boxbtnwhite").addEventListener("click", function(){ 
   //         name = "Winter Blizzard";

           
    //       if (document.querySelector("#carttext").innerHTML.indexOf = value + " Pack of " + name == -1) {
    //            value = 1;
    //            currentvalue = document.querySelector("#carttext").innerHTML.indexOf
               
     //           alert("Adding " + name + " to Cart");
     //           addtocart(value + " Pack of " + name); 
                 
     //       } else {
     //           value = currentvalue + 1;
                
     //       }
		    //addtocart(document.querySelector(next).value);
     //   })

      document.querySelector(".boxbuttonblack").addEventListener("click", function(){
            document.querySelector("#carttext").innerHTML =  "";
        })



var addtocart = function(phrase){
    
    document.querySelector("#carttext").innerHTML +=  " <br><br>" + phrase;
    
}

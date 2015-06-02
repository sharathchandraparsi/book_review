  window.onload=function(){
  back.addEventListener("click",function(){
     
     window.location='/index.html';
   })
  
  function myfunction(){
  $.ajax({
       url : "http://bookreviewserver.meteor.com/collectionapi/books",
       xhr: function() {
       return new window.XMLHttpRequest( {
        mozSystem: true
         } );
      },
      headers: {
        'X-Auth-Token' : "814310348779276"
      }}).done(function(data) {
        populateList(data);
      });
  }
    
  function populateList(data) {
     
       var text=document.getElementById("input").value;
    
      for(i=0;i<data.length;i++)
        {
            if (data[i].bookname != undefined&& data[i].bookname==text){
             document.getElementById("display").innerHTML+=data[i].bookname+"     "+ data[i].review+"<br>";
            }
        }
  }
 
  done.addEventListener("click",function(){
    
    myfunction();  
  })
  
  
  }
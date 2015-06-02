  window.onload=function(){
  back.addEventListener("click",function(){
     
     window.location='/index.html';
   })
  
  
  
  function addSuccess() {
    alert("Added book Successfully");
  }
  
  
  done.addEventListener("click",function(){
    
    
   var bname=document.getElementById("addbook").value;
   var bauthor=document.getElementById("addauthor").value;
   var breview=document.getElementById("addreview").value;
   
   var some = {bookname: bname, author:bauthor, review:breview};
   var someString = JSON.stringify(some);
   
     $.ajax({
       url : "http://bookreviewserver.meteor.com/collectionapi/books",
       type : "POST",
       data : someString,
       xhr: function() {
       return new window.XMLHttpRequest( {
        mozSystem: true
         } );
      },
      headers: {
        'X-Auth-Token' : "814310348779276"
      }}).done(function(data) {
        addSuccess();
      });  
    
    
    
    
  })
  
  
  }
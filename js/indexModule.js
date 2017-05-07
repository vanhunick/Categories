var IndexModule = (function(){


  //Cache elements
  var $searchButton = $('#searchButton');
  var $searchBar = $('#searchBar');
  var $output = $('#output');

  // Setup listeners
  $searchButton.click(function(){
      var val = $('#search-friends').val();
     var data = Data.search($searchBar.val());
     insertResults(data);
  });

  // Respond to enter being pressed in search bar
  $searchBar.keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var data = Data.search($searchBar.val());
      insertResults(data);
     }
   });


   var insertResults = function (data) {
      data.forEach(function(d){
          insertElement(d);
      });
   }

   var insertElement = function(element){

     // Create all the matches string
     var matches = "";
     element.matches.forEach(m => {
       matches += " " + m.description;
     });

     var groupHTML = "<h4>Group code :"+element.group.description+ " " + element.division.code +""+ element.group.code +"</h4>"

     $output.append(
       '<div class="row"><div class="output">'+groupHTML+'<h5>Code '+element.code+'</h5><p>'+element.matches[0].description+'</p><hr></div></div>'
     );
   }

})();

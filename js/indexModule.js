var IndexModule = (function(){


  //Cache elements
  var $searchButton = $('#searchButton');
  var $searchBar = $('#searchBar');
  var $output = $('#output');

  var clipboard = null;

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
     $output.html('');

      var id = 0;
      data.forEach(function(d){
          insertElement(d, 'R'+id);
          id++;
      });
      clipboard = new Clipboard('.copy-code');
   }

   var insertElement = function(element, id){

     // Create all the matches string
     var matches = "";
     element.matches.forEach(m => {
       matches += " " + m.description;
     });
     var classDescriptionHTML = '<h4>'+element.class.description+'</h4>';
     var groupHTML = "<h5>Group, "+element.group.description+ " " + element.division.code +""+ element.group.code +"</h5>"

     $output.append(
       '<div class="row"><div class="output">'+classDescriptionHTML+'<h4>'+element.matches[0].index+'</h4><h5 class="code">Code <span value="bob" id="'+id+'">'+element.code+'</span></h5><button  type="button" class="btn copy-code" data-clipboard-target="#'+id+'">Copy Code</button>'+groupHTML+'<hr></div></div>'
     );
   }
})();

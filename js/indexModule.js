var IndexModule = (function(){

  //Cache elements
  var $searchButton = $('#searchButton');
  var $searchBar = $('#searchBar');
  var $output = $('#output');

  // Used to copy code to clipboard
  var clipboard = null;

  // Setup listeners
  $searchButton.click(() => {
     var data = Data.search($searchBar.val());
     insertResults(data);
  });


  // Respond to enter being pressed in search bar
  $searchBar.keypress((event) => {
   var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var data = Data.search($searchBar.val());
      insertResults(data);
     }
   });


   var insertResults = function (data) {
     $output.html(''); // Clear prev results

     // Display amount of results 
     if(data.length === 0){
        $output.html('<h4 class="center">No results</h4>');
     } else {
      $output.html('<h4 class="center">Your search returned '+ data.length +' results</h4>');
     }

      var id = 0;
      data.forEach((d) => {
          insertElement(d, 'R'+id);
          id++;
      });
      clipboard = new Clipboard('.copy-code');
   }

   var insertElement = function(element, id){

     // Create all the matches string
     var matches = "<ul>";
     element.matches.forEach(m => {
       matches += "<li>" + m.index + "</li>";
     });

     matches += '</ul>';

     var classDescriptionHTML = '<h4 class="heading"><b>'+element.class.description+'</b></h4>';
     var groupHTML = "<h5>"+element.group.description+ " " + element.division.code +""+ element.group.code +"000</h5>"
     var subDivisionHTML = "<h5>"+element.subdivision.description+ " " + element.division.code +""+ element.subdivision.code +"0000</h5>"

     $output.append(
       '<div class="row"><div class="output">'+classDescriptionHTML+'<h4>'+matches+'</h4><h5 class="code">Code <span value="bob" id="'+id+'"><b>'+element.code+'</b></span></h5><button  type="button" class="btn copy-code" data-clipboard-target="#'+id+'">Copy Code</button>'+groupHTML+' '+subDivisionHTML+'<hr></div></div>'
     );
   }
})();

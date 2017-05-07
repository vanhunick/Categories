
function handleFileSelect(evt) {
  console.log("Reading file");

  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (let i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
      f.size, ' bytes, last modified: ',
      f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
      '</li>');
  }

  var reader = new FileReader();


  // Wait for the file to be read
  reader.onload = function (e) {

    // Set the html element with file data and find all threads
    var text = reader.result;
    procesAll(text);

  }


  // Only read the first file
  reader.readAsText(files[0]);
}

function procesAll(text) {
  var entries = [];

  var allTextLines = text.split('\n');

  for (var i=0; i<allTextLines.length; i++) {
      var data = allTextLines[i].split('^');

      if(data.length === 3){
      var entry = {code : data[0], description : data[1], index : data[2]};
      entries.push(entry);        
      } else {
        var entry = {code : data[0], description : data[1] };
      entries.push(entry);  
      }
  }

  console.log(entries);

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

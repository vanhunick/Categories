var Data = (function(){


var search = function (search) {
  var search = search.toLowerCase();

  var fullstructure = DataModule.structure;

  var curDivision = {};
  var curSubdivision = {};
  var curGroup = {};
  var curClass = {};

  var matches = [];

  fullstructure.forEach( s => {
    // Check if a letter
    if(isNaN(s.code)){
      curDivision = {code : s.code, description : s.description};
    } else if(s.code.length === 2){ // Subdivision
      subdivision = {code : s.code, description : s.description};

    } else if(s.code.length === 3) {  // Group
      curGroup = {code : s.code, description : s.description};

    } else if (s.code.length === 4) { // Class
      curClass = {code : s.code, description : s.description};

      // Here we should search all that match
      var set = matchActivity(search, s.code);
        if(set.length > 0){
          matches.push({
          division : curDivision,
          subdivision : curSubdivision,
          group : curGroup,
          class : curClass,
          matches : set,
          code : curDivision.code + "" + s.code + '00'
        });
      }
    }
  });
  return matches;
}

var matchActivity = function(search, code) {
  var words = search.split(' '); // Split search into words

  // Go through all activities and match the description
  return DataModule.activities.filter(d => {
    if(d.code === code){

      // Remove commas and change to lower case
      var indexStripped = d.index.replace(/,/g, '').toLowerCase();

      // Split string into words
      var descriptionWords = indexStripped.split(' ');

      var match = false;

      //
      for(var i = 0; i < words.length; i++){
          for(var j = 0; j < descriptionWords.length; j++){
            if(descriptionWords[j].includes(words[i])){
              match = true;
              break;
            }
          }
        if(match === false){
          return false;
        }
        match = false;
      }
      return true;
    }
    return false;
  });
}

  return {
    search : search
  }

})();

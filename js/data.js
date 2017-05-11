var Data = (function(){

var search = function (search, fullMatch) {
  var search = search.toLowerCase();
  var fullstructure = DataModule.structure;
  var curDivision = {};
  var curSubdivision = {};
  var curGroup = {};
  var curClass = {};

  // Match all the keywords either in the category header or the activities
  var matches = [];

  fullstructure.forEach( s => {
    // Check if a letter
    if(isNaN(s.code)){
      curDivision = {code : s.code, description : s.description};
    } else if(s.code.length === 2){ // Subdivision
      curSubdivision = {code : s.code, description : s.description};

    } else if(s.code.length === 3) {  // Group
      curGroup = {code : s.code, description : s.description};

    } else if (s.code.length === 4) { // Class
      curClass = {code : s.code, description : s.description};

      // Firs try match all the words to the class header
      if(matchClassDescriptor(search, s.code, fullMatch).length > 0){
          var classActivities = findActivitiesForClass(s.code);

          matches.push({
          division : curDivision,subdivision : curSubdivision,group : curGroup,class : curClass,
          matches : classActivities,code : curDivision.code + "" + s.code + '00'
          });
      } else {

      // Here we should search all that match
      var set = matchActivity(search, s.code, fullMatch);

        if(set.length > 0){
          matches.push({
          division : curDivision,subdivision : curSubdivision,group : curGroup,
          class : curClass,matches : set,code : curDivision.code + "" + s.code + '00'
          });
        }
      }
    }
  });
  return matches;
}

var findActivitiesForClass = function(classCode) {
    return DataModule.activities.filter(d => { return d.code === classCode});
}

var matchClassDescriptor = function (search, code, fullMatch) {
  let words = search.toLowerCase().split(' ');

      // Go through all activities and match the description
  return DataModule.classes.filter(d => {
    if(d.code === code){

      // Convert to words and replace commas
      var descriptionWords = d.description.replace(/,/g, '').toLowerCase().split(' ');

      var match = false;

      for(var i = 0; i < words.length; i++){
          for(var j = 0; j < descriptionWords.length; j++){
            if(fullMatch ? descriptionWords[j] === words[i] : descriptionWords[j].includes(words[i])){
              match = true;
              break;
            }
          }
        if(match === false){
          return false; // One word does not match return false
        }
        match = false; // Reset match after one word is matched
      }
      return true; // All words match
    }
    return false; // Does not match code
  });
}

var matchActivity = function(search, code, fullMatch) {
  var words = search.split(' '); // Split search into words

  // Go through all activities and match the description
  return DataModule.activities.filter(d => {
    if(d.code === code){

      // Split string into words
      var descriptionWords = d.index.replace(/,/g, '').toLowerCase().split(' ');

      var match = false;
      for(var i = 0; i < words.length; i++){
          for(var j = 0; j < descriptionWords.length; j++){
            if(fullMatch ? descriptionWords[j] === words[i] : descriptionWords[j].includes(words[i])){
              match = true;
              break;
            }
          }
        if(match === false){
          return false; // One word does not match return
        }
        match = false; // Reset after matching one of the words
      }
      return true; // All words match
    }
    return false; // Does not match code
  });
}

var getGroups = function () {
  let uniqueClasses = [];

  DataModule.classes.forEach(c => {
    if(uniqueClasses.indexOf(c.description) === -1){
      if(c.description !== undefined){
          uniqueClasses.push({value : c.description});
      }
    }
  });
  return uniqueClasses;
}

  return {
    search : search,
    getGroups : getGroups
  }
})();

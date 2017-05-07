var Data = (function(){


var search = function (search) {
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
  // console.log(search, code);

  return DataModule.activities.filter(d => {
    // console.log(d.description);
    return d.code === code && d.index.includes(search)
  });
}


  var categories = [];

  // Example category object
  // var ojbect = {
  //   "division" : 'a'
  //   "divisionDescription" : 'Agraculture',

  //   "Subdivision" : 12,
  //   "SubdivisionDescription" : "more detailed",

  //   "group" : 123,
  //   "SgroupDescription" : "more detailed",

  //   "class" : 1234,
  //   "classDescription" : "As detailed as it gets",

  //   "activities" : ["shoe retailing"];
  // }


  var readData = function (data) {
    var i;

    // Go through the entire data string
    for(i = 0; i < data.length; i++){
        var curChar = data.chatAt(i);

        var entry = {}
        // Check if character is a letter
        if(curChar ) { // TODO
            //
            entry["division"] = [curChar, 'TODO'];

            i++;
        } else {
          //must be a number


        }

    }
  }

  var scanCode = function (code) {
    if(code.length === 2){ // Subdivision

    } else if(code.length === 3) {  // Group

    } else if (code.length === 4) { // Class

    }
  }

  return {
    search : search
  }

})();

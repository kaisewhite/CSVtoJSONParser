const readFile = require("fs").readFile;
readFile("./data.csv", "utf-8", (err, data) => {
  /**
   * The first for loop is used to parse through CSV file and push results into a new array
   */

  //Store final results
  var result = [];

  //Split Each line in the CVS
  const lines = data.split("\n");

  //Assumes the first line in the csv is the header
  var headers = lines[0].split("|");

  //Create value pair
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split("|");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    //Add objects to result array
    result.push(obj);
  }

  console.log(result);
});

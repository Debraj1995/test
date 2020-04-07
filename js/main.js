var arr_word = [];
file_name = "rawdata.json";
fetch(file_name)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //   func(data);

    // console.log(Array.isArray(data));
    // console.log(data.length);
    // console.log(data[0].sender_name);
    for (var i = 0; i < data.length; i++) {
      if (data[i].sender_name == "Debraj Paul") {
        arr_word.push(data[i].content);
      }
    }

    sorting();
  });

function sorting() {
  //  console.log(arr_word);
  // for (var i = 0; i < arr_word.length; i++) {
  //     if (arr_word[i] != "undefined") {
  //         console.log(arr_word[i]);
  //     }
  // }

  var new_Ar = arr_word.filter((x) => x != undefined);
  // console.log(new_Ar);
  var new_ar1 = new_Ar.filter(function (x) {
    if (x.startsWith("http") == false) return x;
  });
  var T = new_ar1.toString().split(" ");
  //console.log(T);
  var U = T.filter(function (z) {
    if (
      z.startsWith("?") != true &&
      z.startsWith("!") != true &&
      z.startsWith("e") != true &&
      z.startsWith("o") != true &&
      z.startsWith("r") != true
    ) {
      return z;
    }
  });
  //console.log(U.length);
  var num = 0;
  var final = [];
  for (var i = 0; i < U.length; i++) {
    num = 0;
    for (var j = 0; j < U.length; j++) {
      if (U[i] == U[j]) {
        num++;
      }
    }
    final.push({
      word: U[i],
      val: num,
    });
  }
  final.sort(function (a, b) {
    return b.val - a.val;
  });
  var F = [];
  for (var k = 0; k < final.length; k++) {
    F.push(final[k].word);
  }
 // console.log(F);
  var X = getUnique(F);
  //console.log(X);
}

function getUnique(array) {
  var uniqueArray = [];

  // Loop through array values
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

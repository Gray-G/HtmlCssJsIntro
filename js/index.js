/*
    index.js
*/
"use strict";

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>"

var result = {
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function() {

    },
    owner: {
        login: "graygold",
        id: 12345
    }
};

// result.phoneNumber = "123-456-7890";

// console.log(result.phoneNumber);

var results = [{
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    owner: {
        login: "graygold",
        id: 12345
    }
}, {
    name: "jQuery UI",
    language: "JavaScript",
    score: 3.5,
    owner: {
        login: "gray",
        id: 456
    }
}];

results.push(result);
results.push({
    name: "dummy object"
});

for (var x = 0; x < results.length; x++) {
    var result = results[x];
    if (result.score > 4) continue;
    console.log(result.name);
}

// console.log(results.length);
// console.log(results[0].owner.login);


// console.log("msg is " + typeof(msg));
// console.log("resultsDiv is " + typeof(resultsDiv));

// var none;
// console.log("none is " + typeof(none));

// var aNumber = 10;
// console.log("aNumber is " + typeof(aNumber));

// var trueFalse = true;
// console.log("trueFalse is " + typeof(trueFalse));

// //msgs = "this shouldn't work";

// if (!none) {
//     console.log("none is undefined");
// }

// if (aNumber == 10) {
//     console.log("aNumber is 10");
// }

// if (aNumber === "10") {
//     console.log("aNumber is \"10\"");
// }

// function showMsg(msg) {
//     console.log("showMsg: " + msg);
// }

// function showMsg(msg, more) {
//     if (more) {
//         console.log("showMsg+: " + msg + more);
//     }
//     else console.log("showMsg+: " + msg);
// }

// showMsg("some informaiton");
// showMsg("more information", " and even more");

// var showIt = function (msg) {
//     console.log(msg);
// }

// showIt("some message in window namespace");

// function showItThen(msg, callback) {
//     showIt(msg);
//     callback();
// }

// showItThen("showItThen was called", function(){
//     console.log("callback was called");
// });

// var inGLobal = true;

// function testMe() {
//     console.log("testMe(): " + inGLobal);

//     var someMsg = "some message inside testMe()";
//     console.log("testMe(): " + someMsg);

//     showItThen("with Closure", function() {
//         showIt("testMe with Closure(): " + someMsg);
//     });
// }

// //console.log("global: " + someMsg);

// testMe();

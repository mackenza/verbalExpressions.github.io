// Create an example of how to test for correctly formed URLs
var tester = VerEx()
    .startOfLine()
    .then('http')
    .maybe('s')
    .then('://')
    .maybe('www.')
    .anythingBut(' ')
    .endOfLine();

// Create an example URL
var testMe = 'https://www.google.com';

// Playground hint: uncomment the following lines to see results in HTML

// Use RegExp object's native test() function
// if (tester.test(testMe)) {
//     document.getElementById("sample-output").innerHTML = 'correctly formatted URL'; // This output will fire}
// } else {
//     document.getElementById("sample-output").innerHTML = 'invalid URL';
// }

    // hint: open your browser's console to see the following output
console.log(tester); // Outputs the actual expression used: /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/

// program to perform string comparison
//JS String Comparison Using RegEx

const string1 = 'JavaScript Program';
const string2 = 'javascript1';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

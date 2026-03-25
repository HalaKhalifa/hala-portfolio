import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('/Users/halakhalifa/Desktop/Hala_Mohammed_Amen_Khalifeh_Resume_2026.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing pdf", err);
});

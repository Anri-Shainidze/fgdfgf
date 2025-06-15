// const fs = require("fs");

// fs.writeFile("first.txt", "anri", (err) => {
//   if (err) {
//     console.log("Failed to create first.txt", err);
//     return;
//   }

//   console.log("first.txt created");

//   fs.writeFile("second.txt", "anrikela", (err) => {
//     if (err) {
//       console.log("Failed to create second.txt", err);
//       return;
//     }

//     console.log("second.txt created");

//     // After both files are created, read them
//     fs.readFile("first.txt", "utf8", (err, data1) => {
//       if (err) {
//         console.log("Error reading first.txt", err);
//         return;
//       }

//       fs.readFile("second.txt", "utf8", (err, data2) => {
//         if (err) {
//           console.log("Error reading second.txt", err);
//           return;
//         }

//         const combinedData = data1 + "\n" + data2;

//         fs.writeFile("combined.txt", combinedData, (err) => {
//           if (err) {
//             console.log("Failed to create combined.txt", err);
//             return;
//           }
//           console.log("combined.txt created with combined data.");
//         });
//       });
//     });
//   });
// });






// const fs = require('fs');

// // Step 1: Write a random text to a file
// const randomText = "The quick brown fox jumps over the lazy dog";
// fs.writeFile('random.txt', randomText, (err) => {
//   if (err) throw err;
//   console.log('Random text written to random.txt');

//   // Step 2: Read the text back
//   fs.readFile('random.txt', 'utf-8', (err, data) => {
//     if (err) throw err;

//     // Step 3: Count the words
//     const wordCount = data.trim().split(/\s+/).length;
//     console.log(`Word count: ${wordCount}`);
//   });
// });







// [
//   { "name": "Alice", "age": 22 },
//   { "name": "Bob", "age": 17 },
//   { "name": "Charlie", "age": 19 }
// ]

// const fs = require('fs');

// // Step 1: Read the users JSON file
// fs.readFile('users.json', 'utf-8', (err, data) => {
//   if (err) throw err;

//   // Step 2: Parse JSON data
//   const users = JSON.parse(data);

//   // Step 3: Filter users older than 18
//   const filteredUsers = users.filter(user => user.age > 18);

//   // Step 4: Write filtered users to a new file
//   fs.writeFile('filtered_users.json', JSON.stringify(filteredUsers, null, 2), (err) => {
//     if (err) throw err;
//     console.log('Filtered users written to filtered_users.json');
//   });
// });

/*
Question1
Write a Node.js script that utilizes the fs module to perform the following tasks:

1- Include the 'fs' module.
2- Your solution should use the fs.writeFile() function 
3- Write data to a file named 'example.txt'.
4- The content to be written to the file should be: "This is the data to write to the file."
5- Ensure that any errors encountered during the file writing process are appropriately handled and logged.
6- Display a message to the console indicating that the data has been successfully written to the file.

*/

// answer

const fs = require("fs/promises");

fs.writeFile(
  "example.txt",
  "This is the data to write to the file.",
  (result = async () => {
    try {
      console.log("Data has been successfully written to the file.");
    } catch (error) {
      console.log(error);
    }
  })
);

result();
// -----------------------------------------------------------------

/*
Question2
write a code that reads the content of a file named 'example.txt' using the fs.readFile() function. Ensure that the file is read with the 'utf8' encoding.

- Implement error handling to log any errors encountered during the file reading process.
- If the file is successfully read, display its content to the console along with the message "File content:".
- Your solution should include the usage of the fs.readFile() function
*/

// answer

const fsRead = require("fs");

const readContent = () => {
  try {
    fsRead.readFile("example.txt", "utf-8", (error, data) => {
      console.log(`file content = ${data}`);
    });
  } catch (error) {
    console.log(error);
  }
};

readContent();

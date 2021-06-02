const {
	writeTextFile,
	readTextFile,
	appendToTextFile,
	deleteTextFile,
	writeTextFileSync,
} = require("./fsHelpers");

//write async
writeTextFile("write-test.txt", "Hello World!");

//read async
readTextFile("read-test.txt");

//write sync and append async
writeTextFileSync("append-test.txt", "Nothing has been appended yet.");
appendToTextFile("append-test.txt", " This got appended");

//write sync and delete async
writeTextFileSync("del-test.txt", "Bye Cruel World!");
deleteTextFile("del-test.txt");

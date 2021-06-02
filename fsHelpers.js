const fs = require("fs");
const path = require("path");

const writeTextFile = (fileName, content) => {
	fs.writeFile(path.join(__dirname, `/${fileName}`), content, (error) => {
		if (error) throw error;
		console.log(`write on ${fileName} successfull`);
	});
};

const writeTextFileSync = (fileName, content) => {
	fs.writeFileSync(path.join(__dirname, `/${fileName}`), content);
	console.log(`wrote on ${fileName} synchronously`);
};

const readTextFile = (fileName) => {
	fs.readFile(
		path.join(__dirname, `/${fileName}`),
		{ encoding: "utf8" },
		(error, data) => {
			if (error) throw error;
			console.log(data);
		}
	);
};

const appendToTextFile = (fileName, content) => {
	fs.appendFile(path.join(__dirname, `/${fileName}`), content, (error) => {
		if (error) return console.log(error);
		console.log(`append on ${fileName} successfull`);
	});
};

const deleteTextFile = (fileName) => {
	fs.unlink(path.join(__dirname, `/${fileName}`), (error) => {
		if (error) throw error;
		console.log(`${fileName} deleted`);
	});
};

module.exports = {
	writeTextFile,
	readTextFile,
	appendToTextFile,
	writeTextFileSync,
	deleteTextFile,
};

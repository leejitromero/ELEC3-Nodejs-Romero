// Full Name: Jit Lee S. Romero
// Section: IV-BSIT C
// Activity: N3 - File Manager with fs and path
// Date: November 17, 2026

const fs = require("fs");
const path = require("path");

// __dirname keeps the files folder beside this script, regardless of the terminal folder.
const filesFolder = path.join(__dirname, "files");

function createFile(filePath, content) {
    // The wx flag creates a new file without overwriting an existing one.
    fs.writeFileSync(filePath, content + "\n", { encoding: "utf8", flag: "wx" });
    console.log(`Created: ${path.basename(filePath)}`);
}

function readFile(filePath) {
    const contents = fs.readFileSync(filePath, "utf8");
    console.log(`File: ${path.basename(filePath)}`);
    console.log("Contents:");
    console.log(contents);
}

function updateFile(filePath, content) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${path.basename(filePath)}`);
    }

    // Append adds text at the end and keeps the existing contents.
    fs.appendFileSync(filePath, content + "\n", "utf8");
    console.log(`Updated: ${path.basename(filePath)}`);
    readFile(filePath);
}

function deleteFile(filePath) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${path.basename(filePath)}`);
}

function listFiles() {
    const fileNames = fs.readdirSync(filesFolder);
    if (fileNames.length === 0) {
        console.log("No files found.");
        return;
    }

    for (const fileName of fileNames) {
        const filePath = path.join(filesFolder, fileName);
        if (!fs.statSync(filePath).isFile()) {
            continue;
        }

        console.log(`\nFull path: ${filePath}`);
        console.log(`File name: ${path.basename(filePath)}`);
        console.log(`Extension: ${path.extname(filePath)}`);
        console.log("Contents:");
        console.log(fs.readFileSync(filePath, "utf8"));
    }
}

function main() {
    console.log("N3 - File Manager with fs and path");
    console.log("Jit Lee S. Romero | IV-BSIT C");

    const command = (process.argv[2] || "").toLowerCase();
    const fileName = process.argv[3];
    const content = process.argv.slice(4).join(" ");
    const commands = ["create", "read", "update", "delete", "list"];

    if (!commands.includes(command)) {
        throw new Error('Use create, read, update, delete, or list. Example: node index.js create notes.txt "Hello"');
    }

    fs.mkdirSync(filesFolder, { recursive: true });

    if (command === "list") {
        listFiles();
        return;
    }

    // Accept only a file name so all managed files stay inside the files folder.
    if (!fileName || fileName !== path.basename(fileName) || fileName.includes("/") || fileName.includes("\\") || fileName === "." || fileName === "..") {
        throw new Error("Enter a file name such as notes.txt, without a folder path.");
    }

    if ((command === "create" || command === "update") && !content.trim()) {
        throw new Error('Enter text after the file name, such as "Hello".');
    }

    const filePath = path.join(filesFolder, fileName);

    switch (command) {
        case "create":
            createFile(filePath, content);
            break;
        case "read":
            readFile(filePath);
            break;
        case "update":
            updateFile(filePath, content);
            break;
        case "delete":
            deleteFile(filePath);
            break;
    }
}

try {
    main();
} catch (error) {
    if (error.code === "ENOENT") {
        console.error(`Error: File not found: ${process.argv[3]}`);
    } else if (error.code === "EEXIST") {
        console.error("Error: File already exists. Use update to append text or choose another name.");
    } else {
        console.error(`Error: ${error.message}`);
    }
    process.exitCode = 1;
}

// References for file operations and path utilities:
// https://nodejs.org/api/fs.html
// https://nodejs.org/api/path.html

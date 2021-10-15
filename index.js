// Data
// const dataHome = require("./homeData.json");

const http = require("http"); // server / requests
const url = require("url"); // the url bar
const slugify = require("slugify"); // special url bar
const fs = require("fs"); // Returns and object which contains alot of functions which we can use

// Loading main pages
const mainHomePage = fs.readFileSync("index.html", "utf8");

// Main server
const mainServer = http.createServer((req, res) => {
  // Routing
  console.log(req.url);
  const currentPath = req.url;

  console.log('-----------------');
  console.log();

  // Main logics
  if (currentPath === "/" || currentPath === "/olevel") {
    res.writeHead(404, {
      "common-mistake": "idk-kaleem bhai",
      "Content-type": "text/html",
    });

    console.log(mainHomePage);
    res.end(mainHomePage);
  } else {
    res.end("Unknown link");
  }
});

// Listening for server requests
mainServer.listen(8000, "127.0.0.1", () => {
  console.log("Starting to read");
});

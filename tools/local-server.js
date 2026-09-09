/* ============================================================
   Dependency-free local HTTP development server
   Animal Nutrition Studio
   ============================================================ */
var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    root = path.resolve(__dirname, "..");

var types = {
  ".html": "text/html; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".JS":   "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".pdf":  "application/pdf"
};

var port = Number(process.argv[2]) || 5178;

http.createServer(function (req, res) {
  var url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") url = "/index.html";
  var file = path.resolve(root, "." + url);

  if (!file.startsWith(root + path.sep) && file !== root) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Not found: " + url);
    }
    var ext = path.extname(file);
    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
}).listen(port, function () {
  console.log("============================================================");
  console.log("  Animal Nutrition Studio Local Server Running");
  console.log("  Access URL: http://localhost:" + port + "/");
  console.log("============================================================");
});

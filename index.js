const WebSocket = require("ws");
const http = require("http");

const server = http.createServer((req, res) => {});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");
  ws.send("Connecting to the websocket server was successful!");

  // Handle WebSocket events
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Send a response to the client
    ws.send("Hello, client! This is your WebSocket server.");
  });
});

server.listen(3000, () => {
  console.log("WebSocket server is listening on port 3000");
});

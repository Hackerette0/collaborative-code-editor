# Collaborative Code Editor - real-time collaborative code editor built with React, Node.js, Socket.IO, and CodeMirror.
Collaborative Code Editor
A real-time collaborative code editor built with React, Node.js, Socket.IO, and CodeMirror. Users can join or create rooms to code together with real-time synchronization and JavaScript syntax highlighting.
Features

Real-time code synchronization across multiple users
Room-based collaboration
CodeMirror editor with JavaScript syntax highlighting and Monokai theme
Responsive UI with Tailwind CSS
Simple username-based authentication

Prerequisites

Node.js (v16 or higher)
npm
Git
A modern web browser

Local Setup and Running

Clone the Repository:
git clone https://github.com/your-username/collaborative-code-editor.git
cd collaborative-code-editor


Install Dependencies:
npm install


Start the Backend Server:
node server.js

The server will run on http://localhost:3000.

Run the Frontend:

Open index.html in a web browser. For proper CORS handling, use a local server like live-server:npm install -g live-server
live-server


Alternatively, open index.html directly in a browser, but you may need to configure CORS for local testing.


Access the Application:

Navigate to http://localhost:8080 (or the port shown by live-server) in your browser.
Create a new room or join an existing one using a room ID and username



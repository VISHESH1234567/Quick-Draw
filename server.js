const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 4000;

// Serve static files from the "public" directory
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());

app.post('/start', (req, res) => {
    const pythonProcess = spawn('python', ['names.py']);
    pythonProcess.stdin.end();

    // Collect data from Python script
    pythonProcess.stdout.on('data', (data) => {
        let output=data.toString().trim();
        // output = output.split(',');
        console.log(output);
        res.json({output});
    });
    pythonProcess.stderr.on('data', (data) => {
        console.error('Python error:',data);
    });
});

app.post('/submit', (req, res) => {
    const canvasArray = req.body.array;
    const pythonProcess = spawn('python', ['answers.py']);

    // Send canvasArray to the Python script via stdin
    pythonProcess.stdin.write(JSON.stringify(canvasArray));
    pythonProcess.stdin.end();

    // Collect data from Python script
    pythonProcess.stdout.on('data', (data) => {
        let output=data.toString().trim();
        // output = output.split(',');
        // output = output.map(str => parseInt(str, 10));
        res.json({output});
        // console.log(output);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error('Python error:',data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import fs from 'fs';
import http from 'http';
import mockData from './API/mock-data.js';

const app = express();
const host = "localhost";
const port = 8000;

// ES module-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors());
app.use(express.json());

// Mock API Routes (replacing MySQL database)
app.get('/api/car', async (req, res) => {
    try {
        const model = req.query.model;
        if (!model) return res.status(400).json({ error: 'Missing model parameter' });

        const availability = await mockData.checkAvailability(model);
        res.json(availability);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/cars', async (req, res) => {
    try {
        const cars = await mockData.getAllCars();
        res.json(cars);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/cars/available', async (req, res) => {
    try {
        const cars = await mockData.getAvailableCars();
        res.json(cars);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/car/:model', async (req, res) => {
    try {
        const model = req.params.model;
        const car = await mockData.getCarByModel(model);
        
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        
        res.json(car);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Serve static files and handle requests
const requestListener = async (req, res) => {
    // Let Express handle API routes
    if (req.url.startsWith("/api")) {
        app(req, res);
        return;
    }

    let filePath = path.join(__dirname, req.url);

    if (req.url === "/" || req.url === "/html/index.html") {
        filePath = path.join(__dirname, "/html/index.html");
    }

    // Ensure the file path is valid and within the allowed directory
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.end("403 Forbidden");
        return;
    }

    if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath).toLowerCase();

        const contentTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".webp": "image/webp",
            ".gif": "image/gif",
        };

        const contentType = contentTypes[ext] || "application/octet-stream";

        res.setHeader("Content-Type", contentType);
        res.writeHead(200);
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
};

// Start the server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`🚀 Vitesse-Auto Server is running on http://${host}:${port}`);
    console.log(`✅ Mock Data System Active - No MySQL Required`);
    console.log(`📊 Available Cars API: http://${host}:${port}/api/cars/available`);
});
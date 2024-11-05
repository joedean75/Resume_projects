const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Endpoint to handle RSVP submissions
app.post('/rsvp', (req, res) => {
    const { name, phone } = req.body;

    // Save the RSVP data to a JSON file
    const rsvpData = { name, phone };
    fs.readFile('rsvps.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading RSVP data');
        }

        const rsvps = JSON.parse(data || '[]');
        rsvps.push(rsvpData);

        fs.writeFile('rsvps.json', JSON.stringify(rsvps, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving RSVP data');
            }
            res.status(200).send('RSVP saved successfully');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

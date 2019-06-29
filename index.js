/////////////////////////////
// Main entry point.
//

const Express = require("express");
const bodyParser = require("body-parser");
const serveIndex = require("serve-index");
const fs = require("fs");
const path = require("path");
const PublicFolder = path.join(__dirname,
    "public");
const Port = process.env.PORT || 80;
var cookieParser = require('cookie-parser');

// Run the application in async IIFE.
(async () => {

    try {

        // Allocate express application object and configure it.
        Express()

        .use(bodyParser.json({

            limit: "50mb"
        }))

        .use(bodyParser.urlencoded({

            extended: false
        }))

        .use(cookieParser())

        .use("/", (req, res, next) => {

            console.log(`${req.url}`);
            next();
        })

        // Enable static- and folder- web server functionality.
        .use("/", Express.static(PublicFolder),
            serveIndex(PublicFolder, {

                    "icons": true
                }))

        // Start express listening on the specific port.
        .listen(Port, () => {

            console.log(`Listening on ${Port}.`);
        });
    } catch (x) {

        console.log(`Error: ${x.message}`);
    }
})();

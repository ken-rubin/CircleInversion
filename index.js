/////////////////////////////
// Main entry point.
//

// Require web server component.
const Express = require("express");

// Run the application in async IIFE.
(async () => {

    try {

        // Allocate express application object and configure it.
        Express()

        // Enable static- and folder- web server functionality.
        .use("/", Express.static(require("path").join(__dirname, "public")))

        // Start express listening on the specific port.
        .listen(process.env.PORT || 80);
    } catch (x) {

        console.log(`Error: ${x.message}`);
    }
})();

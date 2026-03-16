const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('map.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

// Patch for Google Maps API in jsdom
if (!dom.window.performance.getEntriesByType) {
    dom.window.performance.getEntriesByType = () => [];
}

dom.window.onerror = function(msg, file, line, col, error) {
    console.error(`JSDOM Error: ${msg} at ${file}:${line}:${col}\n${error}`);
};

dom.window.console.error = function() {
    console.error("JSDOM Console Error:", ...arguments);
};
dom.window.console.log = function() {
    console.log("JSDOM Console Log:", ...arguments);
};

setTimeout(() => {
    console.log("JSDOM test complete");
}, 2000);

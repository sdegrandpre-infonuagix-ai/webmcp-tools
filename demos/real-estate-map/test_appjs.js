const fs = require('fs');
const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<body><div id="map-container"></div><div id="price-slider"></div></body>`, { runScripts: "dangerously" });
dom.window.onerror = function(msg, file, line, col, error) {
    console.error(`JSDOM Error: ${msg}\n${error}`);
};

try {
    const dataJs = fs.readFileSync('data.js', 'utf8');
    dom.window.eval(dataJs);
    
    const appJs = fs.readFileSync('app.js', 'utf8');
    dom.window.eval(appJs);
    
    console.log("realEstateApp defined?", !!dom.window.realEstateApp);
    if (dom.window.realEstateApp) {
        console.log("initMap is a function?", typeof dom.window.realEstateApp.initMap === 'function');
    }
} catch(e) {
    console.error("Eval Error:", e);
}

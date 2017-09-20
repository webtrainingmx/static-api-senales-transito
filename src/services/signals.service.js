const fs = require('fs');
const path = require('path');

let SIGNALS_CACHE;
const signalsService = {
    getAllSignalsJSON: () => {
        if (!SIGNALS_CACHE) SIGNALS_CACHE = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/json/signals_v1.json'), 'utf8'));
        return SIGNALS_CACHE;
    }
};

module.exports = signalsService;
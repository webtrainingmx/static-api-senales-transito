const router = require('express').Router();
const signalsService = require('../services/signals.service');

// api.io/traffic-signals/v1/signals
router.get('/', (req, res) => {
    try {
        let signals = signalsService.getAllSignalsJSON();
        res.status(200).json(signals);
    } catch (error) {
        console.log(`ERROR(signals_v1.router @ /): ${error}`);
        res.status(500).send(error);
    }
});

module.exports = router;
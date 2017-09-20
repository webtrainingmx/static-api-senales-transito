const router = require('express').Router();
const questionsService = require('../services/questions.service');

// api.io/traffic-signals/v1/questions
// api.io/traffic-signals/v1/questions?type=1
router.get('/', (req, res) => {
    let questionType = req.query['type'];
    if (!questionType) questionType = -1;
    else questionType = +questionType;

    try {
        let questions = questionsService.getAllQuestionsJSON(questionType);
        res.status(200).json(questions);
    } catch (error) {
        console.log(`ERROR(questions_v1.router @ /): ${error}`);
        res.status(500).send(error);
    }
});

// api.io/traffic-signals/v1/questions
router.get('/:index', (req, res) => {
    let questionIndex = +req.params['index'];
    if (questionIndex < 1)
        res.status(400).send('Invalid index (must be greater than 0).');
    else try {
        let question = questionsService.getQuestionByIndex(questionIndex);
        question ? res.status(200).json(question) : res.status(404).send('Question not found.');
    }
    catch (error) {
        console.log(`ERROR(questions_v1.router @ /${questionIndex}): ${error}`);
        res.status(500).send(error);
    }
});

module.exports = router;
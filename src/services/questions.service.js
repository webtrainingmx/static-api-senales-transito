const fs = require('fs');
const path = require('path');

let QUESTIONS_CACHE;
const questionsService = {
    getAllQuestionsJSON: (specificType = -1) => {
        if (!QUESTIONS_CACHE) QUESTIONS_CACHE = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/json/questions_v1.json'), 'utf8'));
        return specificType === -1 ? QUESTIONS_CACHE : {"preguntas": QUESTIONS_CACHE.preguntas.filter(p => p.tipo === specificType)};
    },
    getQuestionByIndex: function (index) {
        let questions = this.getAllQuestionsJSON();
        return questions['preguntas'][index - 1];
    }
};

module.exports = questionsService;
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Prueba tu conocimiento!!",
        "main":    "<p>Sabes lo suficiente sobre el juicio moral?!</p>",
        "results": "<h5>Aprende más en</h5><p>CETYS Universidad</p> ",
        "level1":  "Pregunta 1",
        "level2":  "Pregunta 2",
        "level3":  "Pregunta 3",
        "level4":  "Pregunta 4",
        "level5":  "Pregunta 5" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Conocer las normas éticas y sus implicaciones",
            "a": [
                {"option": "Conciencia moral",      "correct": true},
                {"option": "Conocimiento moral",     "correct": false},
                {"option": "Saber moral",      "correct": false},
                {"option": "Valor moral",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correcto!</span> Muy bien!</p>",
            "incorrect": "<p><span>Uhh no.</span> Leiste la presentación? <em>ve</em> de vuelta al jardín de niños</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "El avance cognitivo y emocional permite...",
            "a": [
                {"option": "Saber matematicas",               "correct": false},
                {"option": "Tomar decisiones autónomas y reflexivas",   "correct": true},
                {"option": "Saber ordenar pizza",               "correct": false},
                {"option": "Tomar decisiones erroneas", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Tu elección es la correcta.</p>",
            "incorrect": "<p><span>Hmmm.</span> Creo que no pusiste atención en clase</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Etapas de desarrollo moral",
            "a": [
                {"option": "Bueno y malo",           "correct": true},
                {"option": "normal, anormal",                  "correct": false},
                {"option": "preconvencional, convencional, postconvencional",  "correct": true},
                {"option": "Antes, despues",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brillante!</span> Eres realmente un genio, (wo)man.</p>",
            "incorrect": "<p><span>Ni cerca.</span> Me sorprende que sepas tu nombre, lo sabes verdad?.</p>" // no comma here
        },
        { // Question 4
            "q": "La etapa postconvencional aplica en",
            "a": [
                {"option": "niños",    "correct": false},
                {"option": "adolecentes y adultos jóvenes",     "correct": true},
                {"option": "adultos mayores",      "correct": false},
                {"option": "todas las edades",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span>Realmente no esperaba que supieras esa! Correcto!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. Perdiste. Los adultos mayores tienen un desarrollo moral postconvencional</p>" // no comma here
        },
        { // Question 5
            "q": "La conciencia moral es constante?",
            "a": [
                {"option": "Si",    "correct": false},
                {"option": "No",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Debes ser muy obervador!</p>",
            "incorrect": "<p><span>ERRRROORRR!</span> La conciencia moral sigue un proceso de madurez y evolución, muy mal" // no comma here
        } // no comma here
    ]
};

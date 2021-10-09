let container = document.getElementById('container');
let optionIterator;
let option = [];
let container = document.getElementById('question');
let questionCounter = 0, correct = 0;

function loadQuestion(){
    question.innerHTML = Question[questionCounter].text;
    for(optionIterator = 0; optionIterator < 4; ++optionIterator){
        options[optionIterator].innerHtml = Questions[questionCounter].options[optionIterator];
    }
}

function Answer(event){
    let index = event.target.index;
    if (Questions[questionCounter].correct == index){
        correct++;
    }
    questionCounter++;
    if(questionCounter == Questions.length){
        document.body,innerHTML = '<h1>Правильных ответов' + correct + '/h1'
    }
    else{
        loadQuestion();
    }
}

for(optionIterator = 0; optionIterator < 4; ++optionIterator){
    let option = document.getElementById('div');
    option.classList.add('panel', 'panel-option');
    option.index = optionIterator;
    option.addEventListener(option);
    container.appendChild(option)
    options.push(option);
}
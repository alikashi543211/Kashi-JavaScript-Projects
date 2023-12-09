const questions = [

    {

        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'

    },

    {

        'que': 'What year was Javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'PHP',
        'correct': 'b'

    },
    

    {

        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cashcading Style Sheet',
        'c': 'Json Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborginis',
        'correct': 'b'

    },
    

];

let index = 0;

const quesBox = document.getElementById("quesBox");

const optionInputs = document.querySelectorAll('.options');

let total = questions.length;

let right = 0;

let wrong = 0;

const loadQuestion = () => {

    if(index === total)
    {

        return endQuiz();

    }

    const data = questions[index];

    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a

    optionInputs[1].nextElementSibling.innerText = data.b

    optionInputs[2].nextElementSibling.innerText = data.c

    optionInputs[3].nextElementSibling.innerText = data.d

    console.log(optionInputs[0].nextElementSibling);

    console.log(data);

}

const reset = () => {

    optionInputs.forEach(

        (input) => {
            input.checked = false;
        }

    )

}

const endQuiz = () => {

    document.getElementById("box").innerHTML = `
        <div style="text-align:center;">
            <h3> Thank You For Playing !</h3>
            <h2>${right} / ${total}</h2>
        </div>
    `;

}

// initial call
loadQuestion();

const submitQuiz = () => {

    const data = questions[index];

    const ans = getAnswer();

    if(data.correct == ans)
    {

        right++;

    }else{

        wrong++;

    }

    index++;

    reset();

    loadQuestion();

    return;

}

const getAnswer = () => {

    let answer;

    optionInputs.forEach(
        (input) => {

            if(input.checked){

                answer = input.value;

            }

        }
    )

    return answer;

}
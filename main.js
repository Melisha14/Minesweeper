let app = document.querySelector('.app');
let appBody = document.querySelector('.app-body');
let niveau = document.querySelector('#niveau');
let choiceBtn = document.querySelector('.choice-btn');
let boxes = document.querySelectorAll('.box');
let scorePrinter = document.querySelector('.score');
let temps= document.querySelector('.chrono');
let score = 0;
let randomValues;

let boxTemplate = (value)=>{
    let box = document.createElement('button');
    box.classList.add('box');
    box.value = value;
    //box.innerText = value;
    return box;
}

/*Let us check if an array contains the given value */
let findValueIn = (array, val) =>{
    for(let i = 0; i< array.length; i++){
        if(array[i] == val){
            return true;
        }
    }
    return false;
}

/*Let us have the random array value */
let randomValuesGenerator = (nb, len) =>{
    let array = [];
    while(array.length < len){
        let val = Math.round((Math.random() * 10000) % nb);
        val = Math.abs(val);

        // check if the value exists in the array
        if(!findValueIn(array, val)) array.push(val)
    }
    return array;
}

let placeBoxes = (val) =>{
    for(let i = 0; i<val; i++){
        appBody.appendChild(boxTemplate(i+1))
    }
}

let changeLevel = (niveau) =>{
    if (niveau == 0){
        score = 0;
        appBody.innerHTML = ``;
        appBody.style = 'grid-template-columns: repeat(9, 20px [col-start]);grid-template-rows: repeat(9, 20px [col-start]);'
        placeBoxes(81);        
        randomValues = randomValuesGenerator(81, 10);
        for(let i = 0; i<boxes.length; i++){
            boxes[i].addEventListener('click', (e)=>{checkBox(e)});
            boxes[i].addEventListener('contextmenu', (e)=>{rightClickCheck(e)});
        }

    }else if(niveau == 1){
        score = 0;
        appBody.innerHTML = ``;
        appBody.style = 'grid-template-columns: repeat(16, 20px [col-start]);grid-template-rows: repeat(16, 20px [col-start]);'
        placeBoxes(256)  
        boxes = document.querySelectorAll('.box');        
        randomValues = randomValuesGenerator(256, 40);
        for(let i = 0; i<boxes.length; i++){
            boxes[i].addEventListener('click', (e)=>{checkBox(e)});
            boxes[i].addEventListener('contextmenu', (e)=>{rightClickCheck(e)});
        }

    }else if(niveau == 2){
        score = 0;
        appBody.innerHTML = ``;
        appBody.style = 'grid-template-columns: repeat(22, 20px [col-start]);grid-template-rows: repeat(22, 20px [col-start]);'
        placeBoxes(484)   
        boxes = document.querySelectorAll('.box');        
        randomValues = randomValuesGenerator(484, 100);
        for(let i = 0; i<boxes.length; i++){
            boxes[i].addEventListener('click', (e)=>{checkBox(e)});
            boxes[i].addEventListener('contextmenu', (e)=>{rightClickCheck(e)});
        }

    }else if(niveau == 3){
        score = 0;
        appBody.innerHTML = ``;
        appBody.style = 'grid-template-columns: repeat(30, 20px [col-start]);grid-template-rows: repeat(30, 20px [col-start]);'
        placeBoxes(900)  
        boxes = document.querySelectorAll('.box');        
        randomValues = randomValuesGenerator(900, 250); 
        for(let i = 0; i<boxes.length; i++){
            boxes[i].addEventListener('click', (e)=>{checkBox(e)});
            boxes[i].addEventListener('contextmenu', (e)=>{rightClickCheck(e)});
        }

    }
}


checkBox = (e)=>{
    const value = e.currentTarget.value;
    /* console.log(randomValues)
    console.log(value) */
    if(!findValueIn(randomValues, value)){
        e.currentTarget.style.background = 'green'
        score++;
        scorePrinter.innerText = score;
        return;
    }

    e.currentTarget.style.background = 'black'
    score = 0;
    scorePrinter.innerText = score;

    alert("Vous avez echouer  !!!");
}

let rightClickCheck = (e)=>{
    e.preventDefault()
    e.currentTarget.style.background = 'red'
}

placeBoxes(81)
randomValues = randomValuesGenerator(81, 10);


choiceBtn.addEventListener('click', (e)=>{
    let value = niveau.value;
    changeLevel(value);
})


boxes = document.querySelectorAll('.box');
for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('click', (e)=>{checkBox(e)});
    boxes[i].addEventListener('contextmenu', (e)=>{rightClickCheck(e)});
}

for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('')
}

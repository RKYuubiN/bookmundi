let btn = document.getElementById('btn');
let headerClass = document.querySelector('.header');

let injectBtn =  document.getElementById('inject-button');
let injectElement = document.getElementById('inject-element');

let setValueBtn = document.getElementById('input-btn');

let ajaxGetBtn = document.getElementById('ajax-get');

let getDatasetBtn = document.getElementById('get-dataset');

// Change class Name
btn.addEventListener('click',()=>{
    headerClass.className = 'headerTwo'    
})

// Get datasets
function getDatasets(element){
    let elements = Array.from(element.children);
    let elementData = [];
    elements.forEach((elem)=>{
        elementData.push(elem.innerText);
    });

    console.log("Datasets:",elementData);
}

getDatasetBtn.addEventListener('click',()=>{
    getDatasets(document.getElementById('div-dataset'))
})

// Inject New DOM element
function addElement(elem){
    let element = document.createElement("h1");
    element.className ='headerTwo';
    element.innerText = 'Injected new element';
    console.log(elem)
    elem.append(element)
}

injectBtn.addEventListener('click',()=>{
    addElement(injectElement)
})

// Get and Set Value from input
function getValue(inputBox){
    return inputBox.value;
}

function setValue(inputBox,value){
    inputBox.value = value;
}

setValueBtn.addEventListener('click',()=>{
    setValue(document.getElementById('input-box'),"input button clicked")
    console.log("Input Value:",getValue(document.getElementById('input-box')))
})

// Ajax Get Request
ajaxGetBtn.addEventListener('click',()=>{
    ajaxGetRequest();
})

function ajaxGetRequest() {
    let xhr = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/todos/2";
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => console.log(xhr.responseText);
}


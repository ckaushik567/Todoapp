const btnElement = document.getElementById('btn');
const inputText = document.querySelector('ul');
const newEle = document.createElement('li');
const newI = document.createElement('i');
const dltBtn = document.getElementById('dltbtn');
const edtBtn = document.getElementById('edtbtn');
const checkBtn = document.getElementById('checkbtn');
const crossBtn = document.getElementById('crossbtn');


function myfucn(e) {
    //const inputText = document.querySelector('ul')
    const newI = document.createElement('i');
    const newI1 = document.createElement('i');
    const newEle = document.createElement('li');
    const getText = document.getElementById('inpt').value;
    if (getText == "") {
        alert("Pleaes Enter Somthing");
    }
    else {
        newEle.textContent = getText;
        newEle.classList.add('li-style');
        newI.classList.add('icon-style');
        newI.classList.add('fa-solid');
        newI.classList.add('fa-trash-can');
        newI1.classList.add('icon-style1');
        newI1.classList.add('fa-solid');
        newI1.classList.add('fa-pen-to-square');
        newI.setAttribute('id', 'dltbtn');
        newI.setAttribute('onClick', "dltFunc(this)");
        newI1.setAttribute('onClick', "edtFunc(this)")
        inputText.appendChild(newEle);
        // inputText.appendChild(newI);
        newEle.appendChild(newI);
        newEle.appendChild(newI1);
        console.log(newEle)
    }
    const preSib = btnElement.previousElementSibling;
    preSib.value = "";
}

function dltFunc(currElement) {
    currElement.parentElement.remove();
}

function edtFunc(currElement) {
    // const newInput = document.createElement('input');
    // const newI3 = document.createElement('i');
    // newI3.classList.add('icon-style2');
    // newI3.classList.add('fa-solid');
    // newI3.classList.add('fa-check');
    // newInput.classList.add('li-style');
    // newInput.append(newI3);
    // currElement.appendChild(newInput);
    const remainValue = currElement.parentElement.textContent;
        currElement.parentElement.outerHTML = `<div class="container1"><input class="li-style" type="text" value=${remainValue}>
                                            <i id="checkbtn" onclick="chkFunc(this)"  class="icon-style2 fa-solid fa-check"></i>
                                            <i id="crossbtn" onclick="crsFunc(this)"  class="icon-style3 fa-solid fa-xmark"></i></div>`
}
function chkFunc(currElement){
    const updateValue = currElement.previousElementSibling.value
    if(updateValue==!" "){
        alert("Plese add somthing!")
    }
    else{
        currElement.parentElement.outerHTML = `<li class="li-style">${updateValue}
                    <i onclick="dltFunc(this)" id="dltbtn" class="icon-style fa-solid fa-trash-can"></i>
                    <i onclick="edtFunc(this)" id="edtbtn" class="icon-style1 fa-solid fa-pen-to-square"></i>
                </li>`
                // console.log(currElement.previousElementSibling.value)
    }

};

function crsFunc(currElement){
     currElement.parentElement.firstElementChild.value="";
}

btnElement.addEventListener('click', myfucn);
dltBtn.addEventListener('click', dltFunc);
edtBtn.addEventListener('click', edtFunc);
checkBtn.addEventListener('click',chkFunc);
crossBtn.addEventListener('click',crsFunc);


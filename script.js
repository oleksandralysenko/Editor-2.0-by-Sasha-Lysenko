
//Switch tabs
const switchTabsBtn = document.getElementById("switchTabsBtn");
const styleEditor = document.getElementById("styleEditor");
const textEditor = document.getElementById("textEditor");
const textEditorArea = document.getElementById("textEditorArea");
const styleEditorArea = document.getElementById("styleEditorArea");
const saveBtn = document.getElementById("saveBtn");

let showEditBlock = function (){
    textEditor.style.display = "block";
    styleEditor.style.display = "none";

    textEditorArea.innerText = styleEditorArea.innerHTML;
}

let showStyleBlock = function (){
    styleEditor.style.display = "block";
    textEditor.style.display = "none";

    styleEditorArea.innerHTML = textEditorArea.innerText;
}

switchTabsBtn.addEventListener("click", showEditBlock);
saveBtn.addEventListener("click", showStyleBlock);


//Font Style
const boldBtn = document.getElementById("btncheck1");
const italicBtn = document.getElementById("btncheck2");
const underlineBtn = document.getElementById("btncheck3");
const lineThroughBtn = document.getElementById("btncheck4");

boldBtn.addEventListener("click", () => {
    if(boldBtn.checked) {
        styleEditorArea.style.fontWeight = "bold";
    }
    else{
        styleEditorArea.style.fontWeight = "normal";
    }
});

italicBtn.addEventListener("click", () => {
    if(italicBtn.checked) {
        styleEditorArea.style.fontStyle = "italic";
    }
    else{
        styleEditorArea.style.fontStyle = "normal";
    }
});

underlineBtn.addEventListener("click", () => {
    if(underlineBtn.checked) {
        styleEditorArea.style.textDecoration = "underline";
    }
    else{
        styleEditorArea.style.textDecoration = "none";
    }
});

lineThroughBtn.addEventListener("click", () => {
    if(lineThroughBtn.checked) {
        styleEditorArea.style.textDecoration = "line-through";
    }
    else{
        styleEditorArea.style.textDecoration = "none";
    }
});



//Text align
const alignLeftBtn = document.getElementById("alignLeftBtn");
const alignCenterBtn = document.getElementById("alignCenterBtn");
const alignRightBtn = document.getElementById("alignRightBtn");

alignLeftBtn.addEventListener("click", ()=>{
    styleEditorArea.style.textAlign = "left";
})
alignCenterBtn.addEventListener("click", () => {
    styleEditorArea.style.textAlign = "center";
})
alignRightBtn.addEventListener("click", () => {
    styleEditorArea.style.textAlign = "right";
})

//Font Family
const fontFamilyMenu = document.getElementById("fontFamilyMenu");
const oneFontFamily = fontFamilyMenu.getElementsByTagName("a");

function applyFontFamily (){
    for (let i=0; i < oneFontFamily.length; i++){
        oneFontFamily[i].addEventListener('click', () => {
            styleEditorArea.style.fontFamily = oneFontFamily[i].dataset.value;
        })}}
 applyFontFamily();       

//Font Size
const fontSizeMenu = document.getElementById("fontSizeMenu");
const oneFontSize = fontSizeMenu.getElementsByTagName("a");

function applyFontSize (){
    for (let i=0; i < oneFontSize.length; i++){
        oneFontSize[i].addEventListener('click', () => {
            styleEditorArea.style.fontSize = oneFontSize[i].dataset.value;
        })}}
 applyFontSize();


//FONT COLOR
let textColorBtn = document.getElementById("textColorBtn");
let textColorModal = document.getElementById("textColorModal");
let closeTextColorModal = document.getElementById("closeTextColorModal");

let oneColor = document.getElementsByClassName("oneColor");

textColorBtn.addEventListener("click", () => {
    textColorModal.style.display = "block";
})
closeTextColorModal.addEventListener("click", () => {
    textColorModal.style.display = "none";
})

function applyTextColor() {
    for (let i = 0 ; i < oneColor.length; i++) {
        oneColor[i].addEventListener("click", () => {
        styleEditorArea.style.color = oneColor[i].style.backgroundColor;
    })}
}
applyTextColor()


//BACKGROUND COLOR
let bgColorBtn = document.getElementById("bgColorBtn");
let closeBgColorModal = document.getElementById("closeBgColorModal");
let bgColorModal = document.getElementById("bgColorModal");
let oneBgColor = document.getElementsByClassName("oneBgColor");


bgColorBtn.addEventListener("click", () => {
    bgColorModal.style.display = "block";
})

closeBgColorModal.addEventListener("click", () => {
    bgColorModal.style.display = "none";
})

function applyBgColor () {
    for (let i = 0 ; i < oneBgColor.length; i++) {
        oneBgColor[i].addEventListener("click", () => {
        styleEditorArea.style.background = oneBgColor[i].style.backgroundColor;
    })}
}
applyBgColor();

//BACKGROUND IMAGE
let oneBgImage = document.getElementsByClassName("oneBgImage");

function applyBgImage () {
    for (let i = 0 ; i < oneBgImage.length; i++) {
        oneBgImage[i].addEventListener("click", () => {
        styleEditorArea.style.background = oneBgImage[i].style.backgroundImage;
    })}
}
applyBgImage();

//BACKGROUND FILES
let bgFileInput = document.getElementById("bgFileInput");

bgFileInput.addEventListener("change", handleFiles, false);
function handleFiles() {
    const fileList = this.files; 

    console.log(fileList[0]);

    var urlCreator = window.URL || window.webkitURL;
    var imageUrl =  window.URL.createObjectURL(fileList[0]);
    styleEditorArea.style.backgroundImage = `url(${imageUrl})`
}



//LOGIN
let loginBtn = document.getElementById("loginBtn");
let loginModal = document.getElementById("loginModal");
let closeLoginModal = document.getElementById("closeLoginModal");

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
})

closeLoginModal.addEventListener("click", () => {
    loginModal.style.display = "none";
})


let loginInput  = document.getElementById("validationCustom01");
let passwordInput = document.getElementById("validationCustom02");
let signInBtn = document.getElementById("signInBtn");

signInBtn.addEventListener("click", checkLogin);

function checkLogin(){
    if (loginInput.value === "admin" && passwordInput.value === "admin"){
        alert("Welcome!");
    } else {
        alert("Wrong login or password!")
    }
}




//CREATE TABLE
let tableBtn = document.getElementById("tableBtn");
let createTableModal = document.getElementById("createTableModal");
let closeTableModal = document.getElementById("closeTableModal");

let countTR = document.getElementById("countTR");
let countTD = document.getElementById("countTD");
let tdWidth = document.getElementById("tdWidth");
let tdHeight = document.getElementById("tdHeight");
let borderWidth = document.getElementById("borderWidth");
let borderStyle = document.getElementById("borderStyle");
let borderColor = document.getElementById("borderColor");
let tableSubmitter = document.getElementById("tableSubmitter");

let tableResetBtn = document.getElementById("tableResetBtn");
let tableModalBody = document.getElementById("tableModalBody");
let tableControl = tableModalBody.getElementsByClassName("form-control");
let tableSelect = tableModalBody.getElementsByClassName("form-select");

tableBtn.addEventListener("click", showCreateTable);
closeTableModal.addEventListener("click", hideCreateTable);


function showCreateTable(){
    createTableModal.style.display = 'block';
}

function hideCreateTable(){
    createTableModal.style.display = "none";
}


tableSubmitter.addEventListener("click", () => {
    let tables = document.createElement("table");
    styleEditorArea.appendChild(tables);

    for (let k=0; k<parseInt(countTR.value); k++){
        tables.innerHTML += "<tr>"
    
    for(let i=0; i<parseInt(countTD.value); i++){
        let tds = document.createElement("td");
        tds.style.height = parseInt(tdHeight.value) + "px";
        tds.style.width = parseInt(tdWidth.value) + "px";
        tds.style.borderWidth = parseInt(borderWidth.value) + "px";
        tds.style.borderStyle = borderStyle.value;
        tds.style.borderColor = borderColor.value;
        tables.appendChild(tds);
    }
    tables.innerHTML += "</tr>";
}
textEditorArea.innerText = styleEditorArea.innerHTML; 
})


tableResetBtn.addEventListener("click", () => {
 for (let i=0; i<tableControl.length; i++){
    tableControl[i].value = "";
 }
 for (let k=0; k<tableSelect.length; k++) {
    tableSelect[k].value = "";
 }
}
)


//Create OL
let OlBtn = document.getElementById("OlBtn");
let createOlModal = document.getElementById("createOlModal");
let closeOlModal = document.getElementById("closeOlModal");
let countOl = document.getElementById("countOl");
let olMark = document.getElementById("olMark");
let olSubmitter = document.getElementById("olSubmitter");

let olResetBtn = document.getElementById("olResetBtn");
let OlModalBody = document.getElementById("OlModalBody");
let olControl = OlModalBody.getElementsByClassName("form-control");
let olSelect = OlModalBody.getElementsByClassName("form-select")


OlBtn.addEventListener("click", () => {
    createOlModal.style.display = "block";
})
closeOlModal.addEventListener("click", () => {
    createOlModal.style.display = "none";
})


olSubmitter.addEventListener("click", () => {
    styleEditorArea.innerHTML += "<ol>";
    for(let i=0; i<parseInt(countOl.value); i++){
        var lis = document.createElement("li");
        lis.style.listStyleType = olMark.value;
        styleEditorArea.appendChild(lis)
    }
    styleEditorArea.innerHTML += "</ol>";
    textEditorArea.innerText = styleEditorArea.innerHTML;
})

olResetBtn.addEventListener("click", () => {
    for (let i=0; i<olControl.length; i++){
    olControl[i].value = "";
}
 for (let k=0; k<olSelect.length; k++) {
    olSelect[k].value = "";
}

} )

//Creale UL
let UlBtn = document.getElementById("UlBtn");
let createUlModal = document.getElementById("createUlModal");
let closeUlModal = document.getElementById("closeUlModal");
let countUl = document.getElementById("countUl");
let ulMark = document.getElementById("ulMark");
let ulSubmitter = document.getElementById("ulSubmitter");


UlBtn.addEventListener("click", () => {
    createUlModal.style.display = "block";
})
closeUlModal.addEventListener("click", () => {
    createUlModal.style.display = "none";
})


ulSubmitter.addEventListener("click", () => {
    styleEditorArea.innerHTML += "<ul>";
    for(let i=0; i<parseInt(countUl.value); i++){
        var lis = document.createElement("li");
        lis.style.listStyleType = ulMark.value;
        styleEditorArea.appendChild(lis)
    }
    styleEditorArea.innerHTML += "</ul>";
    textEditorArea.innerText = styleEditorArea.innerHTML;
})


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
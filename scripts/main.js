
//Имя и пароль?
let userName = prompt("Ты кто?",'');

if (userName == 'Никита'||userName == 'Тимур'||userName == 'Денис') {
    let pasword = prompt('Как называется ваш чат в телеге?','');
    
    if (pasword == 'Frontend') {
        alert ('Привет, '+userName);
    } else if (pasword == "" || pasword == null) {
        alert ( 'отменено' );
    } else {
        alert ( 'неверный пароль' );
}

} else if (userName =='' || userName == null) {
    alert ('Отменено');
} else {
    alert ('Я вас не знаю');
}


//Смена изображения
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/js-2.png') {
      myImage.setAttribute ('src','images/js-3.png');
    } else {
      myImage.setAttribute ('src','images/js-2.png');
    }
  }


//персональное приветствие и сменя имени
  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');

  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привет, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет, ' + userName;
  }

  myButton.onclick = function() {
    setUserName();
  }

/*

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }



let num1 = prompt("Введите первое значение",'');
let num2 = prompt("Введите второе значение",'');


alert (multiply(num1,num2));



document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
}
*/
var rangevalues = 8;
var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

document.getElementById("rangevalues").innerHTML = rangevalues; /* Передача значений в html, для вывода начальной величины ренджа  */

document.getElementById("myrange").addEventListener("change", function() { /* Получение значений из ползунка и запись в переменную */
    rangevalues = (this.value);
    document.getElementById("rangevalues").innerHTML = rangevalues; /* Передача значений в html, для вывода длины пароля, которую изменил пользователь */
    console.log("Length:", rangevalues);
});

function gen_password(len){  /* Ф-ция генерации пароля */
    var password = "";
    for (var i = 0; i < len; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }

    return password;
}

document.querySelector('.button').addEventListener("click", function() { /* Обработчик события, при нажатии на кнопку */
    var final_pass = (gen_password(rangevalues));
    document.getElementById("final_pass").innerHTML = final_pass;
    console.log("Password:", final_pass);
});

const checkbox1 = document.querySelector(".checkboxfornumbers"); /* Константа для проверок нажатия чебокса */ 

checkbox1.addEventListener("change", function () { /* Ф-ция проверки нажатия чекбокса для цифр */    

    if ((checkbox1.checked) && (checkbox2.checked)) {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!№;%:?*()_+=";
        console.log("Both checkboxes are active");
    }

    else if (checkbox1.checked) {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        console.log("The checkbox for numbers is active");
    } 

    else {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        console.log("The checkbox for numbers is unactive");
    }
})

const checkbox2 = document.querySelector(".checkboxforspecialssymbols"); /* Константа для проверок нажатия чебокса */ 

checkbox2.addEventListener("change", function () { /* Ф-ция проверки нажатия чекбокса для спец.символов */
    
    if ((checkbox1.checked) && (checkbox2.checked)) {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!№;%:?*()_+=";
        console.log("Both checkboxes are active");
    }

    else if (checkbox2.checked) {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!№;%:?*()_+=";
        console.log("The checkbox for special characters is active");  
    } 

    else {
        symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        console.log("The checkbox for special characters is unactive");
    }
})






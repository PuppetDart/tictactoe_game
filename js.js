let symbol = "";
let flag;

let reset_func = () => {
    input.forEach((i) => {

        //re-enabling all buttons
        i.disabled = false;

        //clearing Xs & Os
        i.value = "";

        //resetting flag value
        flag = 0;

        set_flag();
    });
};

//-----DECIDING FIRST SYMBOL
let set_flag = () => {
    flag = Math.floor(Math.random() * 2);
    let turn = document.querySelector("#turn");
    (flag % 2 == 0) ? turn.textContent = "X" : turn.textContent = "O";
}

//setting first symbol-value
set_flag();

//------CLICK TO GET X&O
let input = document.querySelectorAll('input');
input.forEach((j) => {

    j.setAttribute('readOnly', true);
    j.onclick = () => {

        //getting current symbol
        (flag % 2 == 0) ? symbol = "X" : symbol = "O";

        //setting decided symbol
        j.value = symbol;

        //disabling field
        j.setAttribute('disabled', 'true');

        flag++;

        if(game()){
            alert("Player "+symbol+ " won");
            reset_func();
        }
    }
});


//------RESET BUTTON
let reset_button = document.querySelector('#reset');
reset_button.onclick = reset_func;

//GAME-LOGIC

let game = () => {
    
    // WHEN 3 ADJACENT CUBES HV SAME VALUE, BUT NOT EMPTY
    // ensuring that the common comparator is empty, prevents empty cubes from matching

    if (input[0].value == input[1].value && input[2].value == input[1].value && input[2].value != "") {
        return true;
    }
    else if (input[3].value == input[4].value && input[4].value == input[5].value && input[4].value != "") {
        return true;
    }
    else if (input[6].value == input[7].value && input[7].value == input[8].value && input[7].value != "") {
        return true;
    }
    else if (input[0].value == input[3].value && input[3].value == input[6].value && input[3].value != "") {
        return true;
    }
    else if (input[1].value == input[4].value && input[4].value == input[7].value && input[4].value != "") {
        return true;
    }
    else if (input[2].value == input[5].value && input[5].value == input[8].value && input[5].value != "") {
        return true;
    }
    else if (input[0].value == input[4].value && input[4].value == input[8].value && input[4].value != "") {
        return true;
    }
    else if (input[2].value == input[4].value && input[4].value == input[6].value && input[4].value != "") {
        return true;
    }
}

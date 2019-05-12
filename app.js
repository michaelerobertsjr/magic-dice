$(document).ready(function(){
    $('#rollButton').click(handleRollButtonClick);

    function handleRollButtonClick(){
        console.log("click me");
        $('#diceOne').html(calcDice());
    }
});
function calcDice(){
    const max = 6;
    const min = 0;
    let diceValue = 0;

    diceValue = Math.ceil(Math.random()*(max-min)+min);
    console.log("Dice value is " + diceValue);
    return diceValue;
}





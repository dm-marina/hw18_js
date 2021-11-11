
function mainFunc(callback){
    const num1 = +prompt('Enter num:');
    const num2 = +prompt('Enter num2:');
    return callback(num1, num2);
}

function exponentiation(num1,num2){
    return'The result of exponentiation: '+ num1**num2;
}

function showResult(value){
    alert( value);
}
showResult(mainFunc(exponentiation));

function multiply(num1,num2){
    const mult = num1*num2
    return 'The result of multiply: '+ mult
}
showResult(mainFunc(multiply));

function division(num1, num2){
    const div = num1/num2;
    return 'The result of division: '+div;
} 
showResult(mainFunc(division));

function modulo(num1, num2){
    const mod = num1%num2;
    return 'The result of modulo: '+mod;
}
showResult(mainFunc(modulo));
function add(a,b){
    return sum = a+b;
}

function subtract(a,b){
    return sum = a-b;
}

function multiply(a,b){
    return product = a*b;
}

function divide(a,b){
    return product = a/b;
}

function operate(operator,a,b){
  switch(operator){
    case '+':
        return add(a,b);
    case '-':
        return subtract(a,b);
    case '*':
        return multiply(a,b);
    case '/':
        return divide(a,b);
    default:
        return null;
  };
};

console.log(operate('+',5,6));

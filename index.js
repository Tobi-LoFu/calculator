// 1. What is Event?
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

// 2. What is Event Listener(Handler)?
// An event listener is a procedure in JavaScript that waits for an event to occur
//.2.1
let button_c = document.querySelector("button");
//.2.2
let eventHandler = () => {
   console.log("button clicked");
};
/* //.2.3
button_c.addEventListener("click", eventHandler);

//button_1
let button_1 = document.querySelector('#btn1');
//add event listener to button 1
let btn_1 = function () {
  let val = button_1.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_1.addEventListener('click', btn_1)


//button_2
let button_2 = document.querySelector('#btn2');
//create function
let btn_2 = function () {
  let val = button_2.innerText;
  let textField = document.querySelector('#display');
  textField.value += val
}
button_2.addEventListener('click', btn_2)


//button_3
let button_3 = document.querySelector('#btn3');
//add event listener to button 3
let btn_3 = function () {
  let val = button_3.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_3.addEventListener('click', btn_3)


//button_4
let button_4 = document.querySelector('#btn4');
//create function
let btn_4 = function () {
  let val = button_4.innerText;
  let textField = document.querySelector('#display');
  textField.value += val
}
button_4.addEventListener('click', btn_4)


//button_5
let button_5 = document.querySelector('#btn5');
//add event listener to button 5
let btn_5 = function () {
  let val = button_5.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_5.addEventListener('click', btn_5)


//button_6
let button_6 = document.querySelector('#btn6');
//create function
let btn_6 = function () {
  let val = button_6.innerText;
  let textField = document.querySelector('#display');
  textField.value += val
}
button_6.addEventListener('click', btn_6)


//button_7
let button_7 = document.querySelector('#btn7');
//add event listener to button 7
let btn_7 = function () {
  let val = button_7.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_7.addEventListener('click', btn_7)


//button_8
let button_8 = document.querySelector('#btn8');
//create function
let btn_8 = function () {
  let val = button_8.innerText;
  let textField = document.querySelector('#display');
  textField.value += valZ1R2NnNpbDdMR1hzdXZRRE1nRTB4dz09
}
button_8.addEventListener('click', btn_8)


//button_9
let button_9 = document.querySelector('#btn9');
//add event listener to button 9
let btn_9 = function () {
  let val = button_9.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_9.addEventListener('click', btn_9)


//button_dot
let button_dot = document.querySelector('#btndot');
//create function
let btn_dot = function () {
  let val = button_dot.innerText;
  let textField = document.querySelector('#display');
  textField.value += val
}
button_dot.addEventListener('click', btn_dot)


//button_0
let button_0 = document.querySelector('#btn0');
//add event listener to button 0
let btn_0 = function () {
  let val = button_0.innerText;
  let textField = document.querySelector('#display');
  textField.value += val;
}
button_0.addEventListener('click', btn_0)


//button_00
let button_00 = document.querySelector('#btn00');
//create function
let btn_00 = function () {
  let val = button_00.innerText;
  let textField = document.querySelector('#display');
  textField.value += val
}
button_00.addEventListener('click', btn_00) 
*/

/* Array.from(btns).forEach((btn) => {
   if (typeof parseInt(btn.innerText) == 'number')  {
      btn.addEventListener("click", () => {
         document.querySelector("#display").value += btn.innerText;
         console.log(document.querySelector("#display").value.slice(-1));
      });
   }
});
*/

add = function(x,y) {
   return x + y;
}

subtract = function(x,y) {
    return x-y;
}

multiplied = function(x,y){
    return x * y;
}

divide = function(x,y) {
    if (y == 0) {
        return 'The divisor should NOT be zero!';
    }
    return (x/y).toFixed(2);
}

percentage = function(x,y) {
    return ((x/y)*100).toFixed(2);
}

mod = function(x, y) {
    if (y == 0) {
        return 'The divisor should NOT be zero!';
    }
    return x%y;
}

ratio = function(x, y, width) {
       return width * y / x
}

elevate = function(base, exp) {
    return Math.pow(base, exp)
}

sqrt = function(num) {
 return Math.sqrt(num);
}


let btns = document.querySelectorAll(".btn");

Array.from(btns).forEach((btn) => {
   btn.addEventListener("click", () => {
      let dot = 0;
      for (let i = document.querySelector("#display").value.length; i >= 0; i--){
         if (document.querySelector("#display").value[i] == '.') dot++
         if (document.querySelector("#display").value[i] == '+' || document.querySelector("#display").value[i] == '-'  || document.querySelector("#display").value[i] == '*' || document.querySelector("#display").value[i] == '/' ) break
      }
      if (btn.matches('.reset')){
         document.querySelector("#display").value = '';
      }  else if (btn.matches('.clear-entry')) {
         document.querySelector("#display").value = document.querySelector("#display").value.slice(0,-1)
      } else if (btn.matches('#btndot') && dot == 0 && document.querySelector("#display").value.slice(-1) != '.'){
         document.querySelector("#display").value += btn.innerText;
      } else if (btn.matches(".digit")) {
         document.querySelector("#display").value += btn.innerText;
      } else if (btn.innerText == "="){
         if ( !isNaN(parseInt(document.querySelector("#display").value.slice(-1)))){
            separate(document.querySelector("#display").value)
         }
      } else if (btn.matches('.orange')) {
         
         if (
               document.querySelector("#display").value != "" && !isNaN(parseInt(document.querySelector("#display").value.slice(-1)))
            ) {
               document.querySelector("#display").value += btn.innerText;
            }
      }
      });
   }
);

function separate (input) {
   
   let output = [];
   for (let i = 0; i < input.length; i++) {
      // console.log(input);
      if ( i == input.length-1){
         output.push(input)
         // console.log(input);
      } 
      if (input[i] == '*' || input[i] == '+' || input[i] == '-' || input[i] == '/'){
         output.push(input.slice(0, i))
         output.push(input[i])
         input = input.slice(i+1)
         i=-1
      }
      // console.log(output);
   } 
   compute(output)
}

function compute(input){
   let i = 0;
   do{
       i = input.findIndex(e => e == '*' || e == '/')
       if(i > 0){
           if(input[i] == '*') input.splice(i-1, 3, multiplied(input[i - 1], input[i + 1]));
           if(input[i] == '/') input.splice(i-1, 3, divide(input[i - 1], input[i + 1]));
       }
   }while(i > 0);
   console.log(input)
   do{
       i = input.findIndex(e => e == '+' || e == '-')
       if(i > 0){
           if(input[i] == '+') input.splice(i-1, 3, add(parseFloat(input[i - 1]), parseFloat(input[i + 1])));
           if(input[i] == '-') input.splice(i-1, 3, subtract(input[i - 1], input[i + 1]));
       }
   }while(i > 0);
   document.querySelector('input').value = input;
}

// 3. Two type of events
//1.Browser Events
//2.User Events

//4.

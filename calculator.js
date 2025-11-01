let inputValue = document.getElementById("input")
let buttonElement = document.querySelectorAll(".btn")
let justEvaluated = false

/*
        justEvaluated is a flag you set to true when the user pressed = and you displayed the result.

        Setting it to false here means: we are no longer in the “just showed a result” state.

        Why? A common UX expectation: if the user sees a result and then presses an operator (for example +), they intend to continue calculating with that result (e.g. 15 then + → 15+). So you clear the justEvaluated flag so the next numeric keypress won't wipe the displayed result.
*/

// ====== Click Handler ======= //

buttonElement.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        let value = buttons.textContent;
        
        if(value === "C") {
            inputValue.value =""
        }else if(value === "=") {
            justEvaluated = true
            inputValue.value = eval(inputValue.value)
        }else if(value === "x") {
            inputValue.value = inputValue.value.slice(0,-1)
        }else  {
                if(justEvaluated) {
                inputValue.value = ""
                justEvaluated = false
            }
            inputValue.value += value
        }
            
        
        
        
    })

   
})

// ====== Keyboard Handler ======= //

 document.body.addEventListener("keydown", (e) => {
        let num = Number(e.key)

        if(e.key === "c") {
            inputValue.value =""
            justEvaluated = false
        }else if(e.key === "=" || e.key === "Enter") {

            try {
      inputValue.value = eval(inputValue.value);
      justEvaluated = true;
    } catch {
      inputValue.value = "Error";
      justEvaluated = true;
    }

        /*
        🧠 try { ... } catch { ... }

This is a try...catch block, which means:

The code inside try { } will run first.

If any error occurs (for example, invalid expression like "2++3"), JavaScript will jump to the catch { } block instead of crashing.

This keeps your calculator from breaking when the user types an invalid expression.
        */

        }else if(e.key === "x" || e.key === "Backspace") {
                e.preventDefault();
            inputValue.value = inputValue.value.slice(0,-1)
        }else if (["%", "/", "*", "-", "+",].includes(e.key)) {
            /*
            This builds an array of operator characters you want to treat the same: percent, multiply, divide, subtract, add.

            .includes(e.key) checks whether the key the user pressed (e.key) is one of those operators. It returns true if it is, false otherwise.

            So this else if block runs only when the pressed key is one of those operator characters

            🔴 catch { inputValue.value = "Error"; justEvaluated = true; }

If the expression inside the input box is invalid — for example:

"5++3"

or even just "+"

Then eval() will throw an error.
The catch block catches that and:

Displays "Error" in the input box (to show the user something went wrong).

Still sets justEvaluated = true, so the next keypress will clear the error text and start fresh.

            */

            justEvaluated = false
            inputValue.value += e.key
        }else if(!isNaN(num)) {

            if(justEvaluated) {
                inputValue.value = ""
                justEvaluated = false
            }
            inputValue.value += e.key
        }
        /*

        if (justEvaluated) {

Checks the flag you set after = was pressed. It tells the code that the input currently shows a computed result.

        else if (!isNaN(num)) {

num was created earlier with let num = Number(e.key).

isNaN(num) returns true when num is Not a Number.

!isNaN(num) is therefore true when num is a number (e.g. 0, 1, 2, ...).

In short: this branch runs when the pressed key looks like a numeric value.
        */
    })




    





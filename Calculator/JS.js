let display = document.querySelector("#inputbox");
let button = document.querySelectorAll("button");
let button_arr = Array.from(button);
console.log(button_arr);
button_arr.forEach(function(btn)
{
    btn.addEventListener("click",function(event)
{
     let button_text = event.target.innerHTML;
    if(button_text === "DEL")
    {
        display.value = display.value.slice(0,-1);
    }
    else if(button_text === "AC")
    {
        display.value = "";
    }
    else if (button_text === "=")
    {
        try
        {
        display.value = eval(display.value);
        }
        catch
        {
            display.value = "Error";
        }
    }
    else
    {
    display.value += button_text;
    }
})
})
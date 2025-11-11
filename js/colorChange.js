(() =>
{
    const colourButtons = document.querySelectorAll(".colPicker"); //collection of buttons
    const colourChange = ((ev)=>{
        const colourPicked = ev.target.classList[0] + "Back"  //[0] means first class
        document.body.className = colourPicked === "resetBack" ? "" : colourPicked //=== checks/compares //get rid of multiple if-else statements
    })

    colourButtons.forEach((btn)=>{
        btn.addEventListener("click", colourChange)
    })
    

})()














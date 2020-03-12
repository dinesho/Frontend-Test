function spinToggle(){
    var spinner = document.getElementById("spinner");
    var button = document.getElementById("spinToggle");

    if(spinner.classList.contains("spinner")){
        spinner.classList.remove("spinner");
        button.innerText = "Start Spinner";
    }
    else{
        spinner.classList.add("spinner");
        button.innerText = "Stop Spinner";
    }
}

// Jquery version
// $("#spinToggle").click(function() {
//     $("#spinner").toggleClass("spinner");
// });
//

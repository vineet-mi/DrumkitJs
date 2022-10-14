var DrumLenght = document.querySelectorAll(".drum").length;

for (var i = 0; i < DrumLenght; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress", (event) => {
        var name = event.key;
 
        console.log(name);
        switch (name) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });
    document
        .querySelectorAll(".drum")
    [i].addEventListener("click", function() {
        console.log(this.innerHTML);
        var buttoninnerHtml = this.innerHTML;
        
        switch (buttoninnerHtml) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });
}


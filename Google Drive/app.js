var burger = document.getElementsByClassName("burger");
var hambox = document.getElementsByClassName("togglebox");
const links = document.getElementsByClassName("hamlink")
var counter=2;
function phaseout() {
    hambox[0].style.position = "absolute";
}
/* function checkit(){
    if ((screen.width>=757)){
        hambox[0].style.transform = "translateX(-100%)"
       
        setTimeout(phaseout,750);
        links[0].style.animation = "linksfadeback 1s ease-out forwards 0s"
        links[1].style.animation = "linksfadeback 2s ease-out forwards 0s"
        links[2].style.animation = "linksfadeback 4s ease-out forwards 0s"
        counter = 6
        console.log("hello",counter)
        

        
    }
    
    
};
setInterval(checkit,100); */


function clicked() {
    if (counter%2==0) {
       hambox[0].style.display = "flex";
       hambox[0].style.transform = "translateX(0%)"
       hambox[0].style.position = "relative"
       links[0].style.animation = "linksfade 1s ease forwards 0.33s";
       links[1].style.animation = "linksfade 1s ease forwards 0.66s";
       links[2].style.animation = "linksfade 1s ease forwards 1s";

       
       //Animation of individual links

        
    }
    else {
        
        hambox[0].style.transform = "translateX(-100%)";
        /* hambox[0].style.position = "absolute"; */
        setTimeout(phaseout,750);
        links[0].style.animation = "linksfadeback 1s ease-out forwards 0s";
        links[1].style.animation = "linksfadeback 2s ease-out forwards 0s";
        links[2].style.animation = "linksfadeback 4s ease-out forwards 0s";
    }
    
    counter++;


};

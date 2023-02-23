function scrollFn(){
    if(window.pageYOffset>100){
        document.getElementById("menu").classList.add("menu-scroll");  
    } else{
        document.getElementById("menu").classList.remove("menu-scroll");
    }
   
   //document.console.log("scroll", window.pageYOffset);
}





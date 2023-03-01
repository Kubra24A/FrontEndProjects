let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}


        // Aşağıdaki sayfa aşağı doğru çekildiğinde üst menüyü karartmak için kullanılır.

        function scrollFn(){
            if(window.pageYOffset>100){
                document.getElementById("menu").classList.add("menu-scroll");  
            } else{
                document.getElementById("menu").classList.remove("menu-scroll");
            }
           
           //document.console.log("scroll", window.pageYOffset);
        }
    
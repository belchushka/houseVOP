const main = document.getElementById("main")
const header = document.getElementById("header")
document.onscroll = function () {
  let main_hight = main.clientHeight
    if(pageYOffset > main_hight){
        header.classList.add("fluid")
    }else{
        header.classList.remove("fluid")
    }
}
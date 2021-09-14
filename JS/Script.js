
// Start Script Background Icon Heart 01

function adicionar1(){
    var icon_1 = document.getElementById("span-icon-ofertas_1").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_1").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_1").style.color = "white"
    }
}


// Start Script Background Icon Heart 02
function adicionar2(){
    var icon_1 = document.getElementById("span-icon-ofertas_2").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_2").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_2").style.color = "white"
    }
}


// Start Script Background Icon Heart 03
function adicionar3(){
    var icon_1 = document.getElementById("span-icon-ofertas_3").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_3").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_3").style.color = "white"
    }
}


// Start Script Background Icon Heart 04
function adicionar4(){
    var icon_1 = document.getElementById("span-icon-ofertas_4").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_4").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_4").style.color = "white"
    }
}


// Start Script Background Icon Heart 05
function adicionar5(){
    var icon_1 = document.getElementById("span-icon-ofertas_5").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_5").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_5").style.color = "white"
    }
}


// Start Script Background Icon Heart 06
function adicionar6(){
    var icon_1 = document.getElementById("span-icon-ofertas_6").style.color;

    if(icon_1 == "white"){

        document.getElementById("span-icon-ofertas_6").style.color = "red"

    }else{
        
        document.getElementById("span-icon-ofertas_6").style.color = "white"
    }
}


//Start function of Menu DropDown
function MenuDrop(){
    var divHeader = document.getElementById("section-da-header").style.height;
    var divMenu = document.getElementById("div-menu-dropdown").style.height;
    var divMenu2 = document.getElementById("div-menu-dropdown").style.transform;



    if(divHeader == "50px" && divMenu == "0%" && divMenu2 == "translateX(120%)" ){
        
        document.getElementById("span-ico-menu-drop1").style.transform = "translateX(0%)"
        document.getElementById("span-ico-menu-drop1").style.transition = "transform 2s 03s ease-in-out"
        document.getElementById("span-ico-menu-drop2").style.transform = "translateX(0%)"
        document.getElementById("span-ico-menu-drop2").style.transition = "transform 2s 3.1s ease-in-out"
        document.getElementById("span-ico-menu-drop3").style.transform = "translateX(0%)"
        document.getElementById("span-ico-menu-drop3").style.transition = "transform 2s 3.2s ease-in-out"
        document.getElementById("span-ico-menu-drop4").style.transform = "translateX(0%)"
        document.getElementById("span-ico-menu-drop4").style.transition = "transform 2s 3.3s ease-in-out"
        document.getElementById("span-ico-menu-drop5").style.transform = "translateX(0%)"
        document.getElementById("span-ico-menu-drop5").style.transition = "transform 2s 3.4s ease-in-out"
        document.getElementById("section-da-header").style.height = "200px"
        document.getElementById("div-menu-dropdown").style.height = "65%"
        document.getElementById("div-menu-dropdown").style.transform = "translateX(0%)"

    } else{
        
        document.getElementById("div-menu-dropdown").style.transform = "translateX(120%)"
        document.getElementById("span-ico-menu-drop1").style.transform = "translateX(180%)"
        document.getElementById("span-ico-menu-drop1").style.transitionDelay = "0s"
        document.getElementById("span-ico-menu-drop2").style.transform = "translateX(180%)"
        document.getElementById("span-ico-menu-drop2").style.transitionDelay = "0.1s"
        document.getElementById("span-ico-menu-drop3").style.transform = "translateX(180%)"
        document.getElementById("span-ico-menu-drop3").style.transitionDelay = "0.2s"
        document.getElementById("span-ico-menu-drop4").style.transform = "translateX(180%)"
        document.getElementById("span-ico-menu-drop4").style.transitionDelay = "0.3s"
        document.getElementById("span-ico-menu-drop5").style.transform = "translateX(180%)"
        document.getElementById("span-ico-menu-drop5").style.transitionDelay = "0.4s"
        document.getElementById("section-da-header").style.height = "50px"
        document.getElementById("div-menu-dropdown").style.height = "0%"
    }
}


// End Menu Dorp Down
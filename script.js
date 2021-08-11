function abrir() {

  
    let menu=document.querySelector('.menuMobile')
     let lista =document.getElementById('lista')
    if (lista.style.display !="flex") {
      lista.style.display = "none";
    } else {
      lista.style.display = "flex";
    }
  }


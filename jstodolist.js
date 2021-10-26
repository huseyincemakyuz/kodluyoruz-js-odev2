let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector('#list')
let ullength = document.getElementsByTagName("li")
let listItem = document.querySelector("#task")
btnDOM.addEventListener('click', yeniEleman)



function yeniEleman(event) {
    // event.preventDefault()
    
    if (listItem.value == " ") { 
        $(".error").toast("show");       
     
    } else {
        let liDOM = document.createElement('li');
        liDOM.innerHTML =  ` ${listItem.value} `;
        listDOM.append(liDOM);
    
        $('.success').toast('show');
        listItem.value = " ";            // gonderdikten sonra sifirladik
        
    
        liDOM.onclick = check;
        
        let closeButton = document.createElement("span");
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;
            
            liDOM.append(closeButton);
        
        
            localStorage.setItem('listItem',listDOM.innerHTML)
           

}
}



for(let i=0; i < ullength.length; i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}


function check(){
    this.classList.toggle("checked"); 
}
  
function removeButton(){
    this.parentElement.remove(); 
}
  




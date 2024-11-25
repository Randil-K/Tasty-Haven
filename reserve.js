let reserveBtn = document.querySelector(".sub-btn");


reserveBtn.addEventListener("click", function (e) { 
    alert("Reservation Succesfull");
    
    reserveBtn.innerHTML = "Reservation Successful! Your table number will be sent to your email shortly.";
    reserveBtn.style.color = "white";
    reserveBtn.style.fontSize = "25px";
    reserveBtn.style.backgroundColor = "#ffa500"
    

    let head = document.querySelector(".f-head");
    head.innerHTML = "Your Seats Reserved."
    head.style.backgroundColor = "#ffa500";

    e.preventDefault();

    
    reserveBtn.addEventListener("mouseover", function (e) {
        alert("You've already reserved. If you want more details, please contact us. Thank you. Have a nice day !")
      })

    
    
    
    
    
    
    
    
    
    



 })

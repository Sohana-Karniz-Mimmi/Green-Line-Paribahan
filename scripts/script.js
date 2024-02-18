// For Scrolling Buy Tickets button to seat section
const buyTicketsBtn = document.getElementById('buy-tickets').addEventListener('click', function(){
    const seatSection = document.getElementById('seat -section').scrollIntoView({ behavior: 'smooth' })
})


// Select Your Seat
const seatBtn = document.getElementsByClassName('seat-btn')
let count = 0;
    for(let singleSeat of seatBtn){
        const index = singleSeat
        index.addEventListener('click', function(event){
            //Set Seat Button background color and disabled
            event.target.classList.remove('bg-[#F7F8F8]')
            event.target.classList.add('bg-[#1DD100]', 'text-white');
            event.target.setAttribute("disabled", true);

            // Seat Count
            const seatCount = document.getElementById('seat-count')
                seatCount.innerText = count += 1;
            let seatLeft = document.getElementById('seat-left').innerText
            let convertedNumber = parseInt(seatLeft);
            const number = document.getElementById('seat-left').innerText = convertedNumber -= 1;
            
       })
    }
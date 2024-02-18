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

            // Add seat number and price
            const addSeatContainer = document.getElementById('add-seat-container')
                addSeatContainer.classList.add('border-b', 'border-solid', 'border-[#13131833]')
            const div = document.createElement('div')
                div.classList.add('flex', 'justify-between', 'items-center', 'pb-3')
                addSeatContainer.appendChild(div);

            const value = event.target.innerText
            const p1 = document.createElement('p')
             p1.classList.add('font-inter', 'font-semibold', 'text-[16px]', 'text-[#03071299]')
             p1.innerText = value;
            div.appendChild(p1)
            const p2 = document.createElement('p')
             p2.classList.add('font-inter', 'font-semibold', 'text-[16px]', 'text-[#03071299]')
             p2.innerText = 'Economoy';
            div.appendChild(p2)
            const p3 = document.createElement('p')
             p3.classList.add('font-inter', 'font-semibold', 'text-[16px]', 'text-[#03071299]')
             p3.innerText = 550;
            div.appendChild(p3)
            
       })
    }
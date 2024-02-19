// For Scrolling Buy Tickets button to seat section
const buyTicketsBtn = document.getElementById('buy-tickets').addEventListener('click', function(){
    const seatSection = document.getElementById('seat -section').scrollIntoView({ behavior: 'smooth' })
})


// Select Your Seat
const seatBtn = document.getElementsByClassName('seat-btn')
let count = 0;
let selectedCount = 0;
  


   for(let singleSeat of seatBtn){
    const index = singleSeat
    index.addEventListener('click', function(event){


        if(selectedCount < 4){
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


        // Total Price Calculation
        const totalPriceText = document.getElementById('total-price').innerText
        const convertedTotalPrice = parseInt(totalPriceText);
        const totalPrice = document.getElementById('total-price')
        totalPrice.innerText = convertedTotalPrice + 550;

        // Apply Button
        if(selectedCount == 3){
            const applyInput = document.getElementById('apply-input');
            const applyBtn = document.getElementById('apply-btn')
             applyInput.removeAttribute('disabled');
             applyBtn.removeAttribute('disabled');

            //  Discount Calculation
            document.getElementById('apply-btn').addEventListener('click', function () {
                const inputField = document.getElementById('apply-input').value;
                const couponCode = inputField.split(' ').join(' ').trim();

                //For 15% Discount
                if(couponCode === 'NEW15'){

                    // create 2 p tag for discount append
                    const discountAdd = document.getElementById('discount-add');
                    const p4 = document.createElement('p');
                    p4.classList.add('font-raleway', 'font-semibold', 'text-lg', 'text-[#030712]')
                    p4.innerText = 'Discount';
                    discountAdd.appendChild(p4);
                    const p5 = document.createElement('p');
                    p5.classList.add('font-raleway', 'font-semibold', 'text-lg', 'text-[#030712]')
                    
                    const totalPriced = document.getElementById('total-price').innerText
                     const convertedTotalPriced = parseInt(totalPriced);
                    const discount = 0.15 * convertedTotalPriced;
                    p5.innerText ='BDT' + discount;
                    discountAdd.appendChild(p5);

                    // Grand Total Calculation
                    const grandTotalTextValue = document.getElementById('grand-total').innerText
                    const convertedGrandTotalValue = parseInt(grandTotalTextValue);
                    const discountCalculate = convertedGrandTotalValue - discount
                    const totalGrandPrice = document.getElementById('grand-total')
                    totalGrandPrice.innerText = discountCalculate

                    const inputFieldEmpty = document.getElementById('apply-input')
                    const applyInputId = document.getElementById('apply-input');
                    const applyBtnId = document.getElementById('apply-btn')
                    inputFieldEmpty.value = ''
                    applyInputId.setAttribute('disabled', true);
                    applyBtnId.setAttribute('disabled', true);
                }
                //For 20% Discount
                else if(couponCode === 'Couple 20'){

                    // create 2 p tag for discount append
                    const discountAdd = document.getElementById('discount-add');
                    const p4 = document.createElement('p');
                    p4.classList.add('font-raleway', 'font-semibold', 'text-lg', 'text-[#030712]')
                    p4.innerText = 'Discount';
                    discountAdd.appendChild(p4);
                    const p5 = document.createElement('p');
                    p5.classList.add('font-raleway', 'font-semibold', 'text-lg', 'text-[#030712]')


                    const totalPriced = document.getElementById('total-price').innerText
                     const convertedTotalPriced = parseInt(totalPriced);
                    const discount = 0.2 * convertedTotalPriced;
                    p5.innerText = discount;
                    discountAdd.appendChild(p5);


                    // Grand Total Calculation
                    const grandTotalTextValue = document.getElementById('grand-total').innerText
                    const convertedGrandTotalValue = parseInt(grandTotalTextValue);
                    const discountCalculate = convertedGrandTotalValue - discount
                    const totalGrandPrice = document.getElementById('grand-total')
                    totalGrandPrice.innerText = discountCalculate

                    const inputFieldEmpty = document.getElementById('apply-input')
                    const applyInputId = document.getElementById('apply-input');
                    const applyBtnId = document.getElementById('apply-btn')
                    inputFieldEmpty.value = ''
                    applyInputId.setAttribute('disabled', true);
                    applyBtnId.setAttribute('disabled', true);
                }
                else{
                    alert('Please Enter Right Coupon Code')
                }
            })
        }

        // Grand Total Calculation
        const grandTotalText = document.getElementById('grand-total').innerText
        const convertedGrandTotal = parseInt(grandTotalText);
        const grandTotal = document.getElementById('grand-total')
        grandTotal.innerText = convertedGrandTotal + 550;
        


        // Passenger Information
        const inputField = document.getElementsByClassName('passenger-info')
        const input = inputField[1]
        const inputName =inputField[0]
        const inputEmail =inputField[2]
            input.addEventListener('keyup', function(even){

            if(isNaN(input.value)){
                return;
            }
            else{
                // Next Button
            document.getElementById('next-btn').addEventListener('click', function(event){
                const myModel = document.getElementById('my_modal_5')
                myModel.showModal()
                input.value = ""
                inputName.value = ""
                inputEmail.value = ""
            })
        }
        });
            selectedCount++;
           }
           else{
            alert("You Already Select 4 Seats");
           }

   })
}

    
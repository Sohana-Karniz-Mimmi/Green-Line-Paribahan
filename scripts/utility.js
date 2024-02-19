window.addEventListener("resize", function() {
    if (window.innerWidth < 640) {
        const seatButton = document.getElementsByClassName('seat-btn')
       for(let button of seatButton){
        button.classList.add('text-sm', 'w-[30px]', 'flex', 'justify-center', 'items-center')
       }
    }
  });
  
window.addEventListener("resize", function() {
    if (window.innerWidth < 640) {
        const seatBtn = document.getElementsByClassName('seat-btn')
       for(let btns of seatBtn){
        btns.classList.add('text-sm', 'w-[30px]', 'flex', 'justify-center', 'items-center')
       }
    }
  });
  
document.addEventListener("DOMContentLoaded", function () {
    
    const blur = document.createElement("div");
          blur.classList.add("blur");

    const content = document.querySelector('.content');
    
    const blur_container = document.createElement("div");
          blur.appendChild(blur_container);

    let count = 0;
    function handleClick() {
        
      document.body.style.overflow = "hidden";
  
      content.insertBefore(blur, null);
  
      if (++count % 2 === 0) {
        removeBlur();
      }
  
    }
  
    const button = document.querySelectorAll('.side-figures');
  
    for (const sideFigures of button) {
      sideFigures.addEventListener('click', handleClick);
    }
  
    function removeBlur() {
  
      blur.remove();
  
      document.body.style.overflow = "visible";
  
    }
  });
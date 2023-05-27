const carouselItems = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", //0
  
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", //1
  
    "https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    //4
  ];
  
      let currentIndex = 0;
      const carouselElement = document.getElementById("carousel");
      const prevArrow = document.getElementById("prev");
      const nextArrow = document.getElementById("next");
  
      function showCarouselItem(index) {
        carouselElement.src = carouselItems[index];
        const activeItem = document.querySelector(".carousel-item.active");
        if (activeItem) {
          activeItem.classList.remove("active");
        }
        carouselElement.classList.add("active");
      }
  
      function showNextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
      }
  
      function showPreviousItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentIndex);
      }
  
      prevArrow.addEventListener("click", showPreviousItem);
      nextArrow.addEventListener("click", showNextItem);
  
      showCarouselItem(currentIndex);
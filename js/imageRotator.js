(()=>{
    let imageAr = [
        'images/view1.jpg',
        'images/view2.jpg',
        'images/view3.jpg',
        'images/view4.jpg',
        'images/view5.jpg',
        'images/view6.jpg'
      ]; //array of images

    //   document.getElementById('myImages').setAttribute('src', imageAr[2]);
      //view3.jpg will display

      let currentIndex = 0;

      function chgImage() {
        // Increment the index to get the next image
        currentIndex++;
        // If the index exceeds the array length, reset it to 0
        if (currentIndex >= imageAr.length) {
          currentIndex = 0;
        }
        // Change the image source to the next image in the array
        document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
      }

      setInterval(chgImage, 2000);

      let intervalId = setInterval(chgImage, 2000);

        // Stop the interval after 10 seconds
        setTimeout(function() {
        clearInterval(intervalId);
        console.info('Image rotation stopped');
        }, 10000);
    
    
        function nextImage(){
            
        }


        
})()//brackets useful for more than one functions
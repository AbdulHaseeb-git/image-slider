const btn1 = document.getElementById("prev");
const btn2 = document.getElementById("next");
const images = document.querySelectorAll(".slide")
var counter = 0;
images.forEach(
    (image,index)=>{
       image.style.top = `${index*100}%`; 
    }
)


function prevImage(){
    counter--;
    if(counter< 0){
        counter = 7;
    }
    slideImage();
}
function nextImage(){
    counter++;
    if(counter>7){
        counter = 0;
    }
    slideImage();
}
function slideImage(){
    images.forEach((image, index)=>{
        image.style.transform = `translateY(-${counter * 100 }%)`;
    })
}



btn1.addEventListener("click",prevImage);
btn2.addEventListener("click",nextImage);



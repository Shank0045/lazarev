function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()


function imageanimation() {
  let circle = document.querySelector(".circle");

  let imagediv = document.querySelector(".imagediv");
  imagediv.addEventListener("mouseenter", function () {
    gsap.to(circle, {
      opacity: 1,
      scale: 1,
    });
  });
  imagediv.addEventListener("mouseleave", function () {
    gsap.to(circle, {
      opacity: 0,
      scale: 0,
    });
  });

  imagediv.addEventListener("mousemove", function (e) {
    gsap.to(circle, {
      x: e.x - imagediv.getBoundingClientRect().x - 70,
      y: e.y - imagediv.getBoundingClientRect().y - 70,
    });
  });
}

imageanimation();

function page2animation(){
    
let video=document.querySelector(".page2 video")
let circle = document.querySelector(".circle");
let imagediv = document.querySelector(".imagediv");


circle.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
     ease: "power2.in"
        
    })
    gsap.to(imagediv,{
        opacity:0,
        zIndex:-12,
    })

})



    video.addEventListener("click",function(){

        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.7) scaleY(0.3)",
            opacity: 0,
            ease: "power2.out"
        })
        gsap.to(imagediv,{
            opacity:1,
            zIndex:1,
        })
    })

}

page2animation()

function page3sec1(){
    let sec2=document.querySelector(".sec2")

let svideo=document.querySelector(".sec2 video")

let circle1=document.querySelector(".circle1")

 


sec2.addEventListener("mouseenter",function(e){ 
    svideo.play()
    gsap.to(svideo,{
        width:"100%",
        zIndex:11,

    })

    gsap.to(circle1,{
        opacity:1
        
       })
    
  
})

sec2.addEventListener("mousemove",function(e){
   gsap.to(circle1,{
       x:e.x-svideo.getBoundingClientRect().x-70,
       y:e.y-svideo.getBoundingClientRect().y-280,
     
    })
})

sec2.addEventListener("mouseleave",function(){ 
    svideo.pause()    
    
    gsap.to(circle1,{
      opacity:0
      
     })

    gsap.to(svideo,{
        zIndex:-1,
          width:"59%",

    })


})
}

page3sec1()



function page3sec2(){
    let sec3=document.querySelector(".sec3")

let s2video=document.querySelector(".sec3 video")

let circle2=document.querySelector(".circle2")


sec3.addEventListener("mouseenter",function(){ 
    s2video.play()
    gsap.to(s2video,{
        width:"100%",
        zIndex:11,

    })

    gsap.to(circle2,{
        opacity:1
        
       })

  
})

sec3.addEventListener("mousemove",function(e){
    gsap.to(circle2,{
        x:e.x-s2video.getBoundingClientRect().x-70,
        y:e.y-s2video.getBoundingClientRect().y-280,
      
     })
 })

sec3.addEventListener("mouseleave",function(){ 
    s2video.pause()    
    
    gsap.to(circle2,{
        opacity:0
        
       })
    

    gsap.to(s2video,{
        zIndex:-1,
          width:"59%",
      
    })


})
}

page3sec2()


function page5section1(){
    
let  icon=document.querySelector(".icon")

let dropdown=document.querySelector(".dropdown")

icon.addEventListener("click",function(){

    if(dropdown.style.display==="block"){              
         icon.innerHTML=`<i class="fa-solid fa-angle-down"></i>`

            gsap.to(dropdown,{
        height: "0vh",
        opacity:0,
        display:"none",
        duration:1,

        
      
    })
    }else{
   icon.innerHTML=`<i class="fa-solid fa-angle-up"></i>`
        gsap.to(dropdown,{
            display:"block",
            duration: 1,

            height: "100vh",
            opacity:1,
        })
    }


})
}

page5section1()


function  page5section2(){
    let  icon=document.querySelector(".icon2")

let dropdown=document.querySelector(".dropdown2")

icon.addEventListener("click",function(){

    if(dropdown.style.display==="block"){              
         icon.innerHTML=`<i class="fa-solid fa-angle-down"></i>`

            gsap.to(dropdown,{
        height: "0vh",
        opacity:0,
        display:"none",
        duration:1,
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" ,
        
      
    })
    }else{
   icon.innerHTML=`<i class="fa-solid fa-angle-up"></i>`
        gsap.to(dropdown,{
            display:"block",
            duration: 1,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" ,
            height: "100vh",
            opacity:1,
        })
    }


})
}


page5section2()


function button(){
    gsap.from(".btnrow button",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".btnrow",
        scroller:".main",
     scrub:true,
     start:"top 80%",
     end:"top 10%"
    },
  
})
}

button()


let lodder=()=>{
    let tl=gsap.timeline()


tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.1)",
    duration:0.8,
        ease:"ease out"

})
tl.from("nav",{
    opacity:0
})

tl.from(".page1 h1, .page1 h4, .page1 h3 , .page1 div ",{
    opacity:0,
    ease:"ease out",
     stagger:0.3
})
}

lodder()






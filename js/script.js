var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  window.addEventListener('scroll',()=>{
  const header = document.querySelector('header');
  
  if(window.scrollY != 0){
    header.classList.add('fix');
  }else{
    header.classList.remove('fix');
  }
});

const mainGnb = document.querySelectorAll('#main_header > .gnb > ul > li');

const enterFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = "block";
  }
}
const leaveFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = "none";
  }
}

const toggle = document.querySelector('.toggle_btn');
const gnb = document.querySelector('.gnb');
const bg = document.querySelector('.black_bg');
let toggleState = true;


const gnbMenu = document.querySelectorAll('.gnb>ul>li');

const checkWindow=()=>{
  if(window.innerWidth >= 1200){
    gnbMenu.forEach((list)=>{
      list.addEventListener('mouseenter',enterFunc);
      list.addEventListener('mouseleave',leaveFunc);
    });
  }else{
    gnbMenu.forEach((list)=>{
      list.removeEventListener('mouseenter',enterFunc);
      list.removeEventListener('mouseleave',leaveFunc);
    });
  }
}
checkWindow();
window.addEventListener('resize',checkWindow);

const toggleBtn=()=>{
    toggle.addEventListener('click',()=>{
      gnb.style.transition = 'all 0.5s ease';
      if(toggleState){
        console.log('clickevent');
        gnb.style.left = 0;
        bg.style.display = 'block';
        toggleState = false;
      }else{
        gnb.style.left = '-70vw';
        gnb.addEventListener('transitionend',()=>{gnb.style.transition = ''},{once:true});
        bg.style.display = 'none';
        toggleState = true;
      }
    });
}
toggleBtn();


const iconImg = document.querySelectorAll('.sect4>.icons_wrap>div');
  const rows = [];
  iconImg.forEach((item, index)=>{
    const rowIndex = Math.floor(index/3);
    if(!rows[rowIndex]){
      rows[rowIndex] = [];
    }
    rows[rowIndex].push(item);
  });

  rows.forEach((row)=>{
    gsap.from(row, {
      opacity:0,
      y:100,
      duration:1,
      stagger: 0.2,
      scrollTrigger:{
        trigger:row[0],
        start:'top 60%', 
        end:'bottom top',
        toggleActions:'play none none reverse',
        onEnter:()=> gsap.to(row, { opacity:1, y:0, stagger: 0.2, overwrite:true}),
        onLeaveBack:()=> gsap.to(row, { opacity:1, y:100, stagger: 0.2, overwrite:true})
      }
    });
  });

  const imgs5 = document.querySelectorAll('.sect5>.container>div>.img_wrap');
  const imgsRows = [];
  imgs5.forEach((item, index)=>{
    const imgIndex = Math.floor(index/3);
    if(!imgsRows[imgIndex]){
      imgsRows[imgIndex] = [];
    }
    imgsRows[imgIndex].push(item);
  });

    imgsRows.forEach((row)=>{
    gsap.from(row, {
      opacity:0,
      x:0,
      duration:1,
      stagger: 0.2,
      scrollTrigger:{
        trigger:row[0],
        start:'top 60%', 
        end:'bottom top',
        toggleActions:'play none none reverse',
        onEnter:()=> gsap.to(row, { opacity:1, y:0, stagger: 0.2, overwrite:true}),
        onLeaveBack:()=> gsap.to(row, { opacity:1, y:100, stagger: 0.2, overwrite:true})
      }
    });
  });

  const textElement = document.querySelector('.text');
  const text = textElement.textContent;
  const textArray = text.split(''); console.log(textArray);
  textElement.textContent = '';

  textArray.forEach((char, index)=>{
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = 0;
      span.style.display = 'inline-block';
      span.style.minWidth = '10px';
      textElement.appendChild(span);
      gsap.fromTo(span, {
          y:40,
          opacity:0
      },{
          duration:0.1,
          y:0,
          opacity:1,
          delay:index*0.1,
          ease:'power2.out'

      })
  })
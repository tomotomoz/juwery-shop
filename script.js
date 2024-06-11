'use strict'

gsap.registerPlugin(ScrollTrigger);


const imgAreas = gsap.utils.toArray('.fade')
console.log(imgAreas)

imgAreas.forEach((imgArea) => {
gsap.to(imgArea, {
  scrollTrigger: {
  trigger: imgArea,
  start: 'top 70%', 
  // markers: true,
  },
  y: 0,
  opacity: 1,
})
});



const p = document.querySelectorAll('.main-text > p')
console.log(p)

p.forEach((el) => {

const textContent = el.textContent;
console.log(textContent)
const newTextContent = [...textContent]
  .map((char) => `<span>${char}</span>`)
  .join("");
el.innerHTML = newTextContent;

gsap.fromTo(
  ".main-text span", // アニメーションさせる要素
  {
    autoAlpha: 0, // アニメーション開始前は透明
    y: 20, // 20px下に移動
  },
  
  {
    autoAlpha: 1, // アニメーション後は出現(透過率0)
    y: 0, // 20px上に移動
    stagger: 0.2, // 0.2秒遅れて順番に再生
    scrollTrigger: {
      trigger: '.main-text',
      start: 'top 70%',
      //  markers: true
    },
  },
);
});

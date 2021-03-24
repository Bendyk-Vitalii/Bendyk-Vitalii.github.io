const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const procent = document.querySelectorAll('.procent');

console.log(procent);

const knowledgeLine = document.querySelectorAll('.knowledge__skills-hr');
//console.log(knowledgeLine[0]);

 
  procent.forEach( (item, i) => {
 knowledgeLine[i].style.width = item.innerHTML;
}); 
let portfolio = document.getElementsByClassName('promo__link btn');
console.log(portfolio)

/* $(document).ready(function(){
    portfolio.on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3000);
    });
}); */

/* procent.forEach( (item, i) => {

        for(let j = 0; j < item.innerHTML; j++) {
            knowledgeLine[i].style.width = j;  
        }

    knowledgeLine[i].style.width = item.innerHTML;
   }); */

/* function animationLine(knowledgeLine) {
    let arr = [];
    for(let i = 0; i < knowledgeLine.length; i++) {
        knowledgeLine[i].style = `animation: go-skill 2s linear infinite alternate 0s forwards;
        @keyframes go-skill{
            0%{
                width: 0px;
            }
            100%{
                width: ${knowledgeLine[i].style.width};
            }
        }"`
    }
    return knowledgeLine;
}
console.log(animationLine(knowledgeLine))
console.log(knowledgeLine.outerHTML)
console.log(knowledgeLine[0].style.width)    */ 
/*  procent.forEach( (item, i) => {
    knowledgeLine[i].style = ` =".animation: go-skill 2s linear infinite alternate 0s forwards;
    @keyframes go-skill{
        0%{
            width: 0px;
        }
        100%{
            width: ${item};
        }
    }"`.innerHTML   
}); */
 
/* let a = "animation: go-skill 2s linear infinite alternate 0s forwards;"

let b = procent.map( (item, i) => {
    b = 
    `@keyframes go-skill{
        0%{
            width: 0px;
        }
        100%{
            width: ${item};
        }
    }`  
});  
console.log(b)
  */
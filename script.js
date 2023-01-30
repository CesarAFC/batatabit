
const productContainers = [...document.querySelectorAll('.plans-container--slider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    
    let containerDimensions = item.getBoundingClientRect();
    //let containerWidth = containerDimensions.width;
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        console.log(item +" "+i);
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        console.log(item +" "+i);
        item.scrollLeft -= containerWidth;
    })
})

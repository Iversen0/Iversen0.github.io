var lastMove = 0;
document.addEventListener('mousemove', (e) =>{
    if(Date.now() - lastMove > 40) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        document.body.style.backgroundColor = `#${randomColor}`;
        lastMove = Date.now();
    } 

    
})


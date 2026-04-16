//your JS code here. If required.
 const container = document.querySelector('.container')
    const fragment = document.createDocumentFragment()
    //to create 800 squares in grid
    for(let i = 0 ; i <800 ;i++){
        //should call function here because we want multiple boxes
        createSquare()
    }

    //function to create squares

    function createSquare(){
        const square = document.createElement('div')
        //to create multiple squarea with classname
        square.classList.add('square')
        
        square.addEventListener("mouseover",addRandomColor)//add color
        square.addEventListener("mouseout",removeColor)//to remove color
        fragment.appendChild(square)
        container.appendChild(fragment)
    }
    //function to create random colors

    function addRandomColor(e){
    //target the square which is hovered
      const square = e.target
    
      //to create random colors , inorderto get colors like #121212 , #1D1D1D we used tostring, added hash# for the color generation
      const randomColor = '#'+Math.floor(Math.random()*255*255*255).toString(16).padStart(6,"0")//padstart is a buildin function which allows it to have only 6 digits and if not then adds 0 
      //we added 16 as  we always need hexa decimal value with digits and alphabets , if we add 2 then its binary. after adding 16 still thers problem in noof digits 
    //   console.log(randomColor,randomColor.length,)
        square.style.backgroundColor = randomColor
    }

    //to remove the color
    function removeColor(e){
        setTimeout(()=>{// in order to remove color after one second 
          e.target.style.backgroundColor = "";
          e.target.style.transitionTimingFunction = "ease"
        },1000)
        

    }



class Login {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      
      //this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    
    }
  
    display(){

     this.button.position(windowWidth/2, windowHeight/2 - 160);
      this.input.position(windowWidth/2-50, windowHeight/2 - 190);
      
      
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
        player = this.input.value()
        gameState = 1
        
      });
  
      

    }
  }
  
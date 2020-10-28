class Form {
    constructor(){
    this.button=createButton("play");
    this.input=createInput("name");
    this.greeting=createElement("h2");
    }

    display(){
       var title=createElement("h2");
       title.html("Car Racing Game");
       title.position(130,0);

       this.input.position(130,160);

       this.button.position(250,200);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           this.greeting.html("Hello"+player.name);
       })
    }
}
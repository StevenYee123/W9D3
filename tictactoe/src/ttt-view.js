class View {
  constructor(game, $el) {
    this.game = game; 
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (event) =>{
      // debugger
      const $square = $(event.currentTarget); //ask about target/curent target
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    debugger;

    try {
    this.game.playMove(pos);
    } catch (e){
      alert(e.msg);
    }
    
    $square.addClass(this.game.currentPlayer);

    if(this.game.isOver()){
      alert("GAME OVER");
    }
  }

  setupBoard() {
    const list = this.$el.append("<ul></ul>").find("ul");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
      const $li = $("<li>");
      $li.data("pos", [i,j]);
      list.append($li);
      }
    }
  }
}

module.exports = View;

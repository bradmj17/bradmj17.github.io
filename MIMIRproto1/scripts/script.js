$(document).ready(() => {
  let counter = 0;
    $("#SymbolList li").click( evt => {
      const symbol = evt.currentTarget;
  
      
      
      if (counter < 3 && ($(symbol).attr("class") != "selected")  ) {
        $(symbol).toggleClass("selected");
        counter += 1;
      }
      else if ($(symbol).attr("class") == "selected") {
        $(symbol).toggleClass("selected");
        counter -= 1;
      }
      console.log(counter);
  });
});
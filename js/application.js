// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KVInputManager, HTMLActuator, LocalStorageManager);
});

/*
alert("whoa");
if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'up': function() {
          alert("up");
        },
        'right': function() {
          alert("right");
        },
        'down': function() {
          alert("down");
        },
        'left': function() {
          alert("left");
        }
      };
      alert("Yo");
      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
}
else {
  alert("Nooo");
}
*/
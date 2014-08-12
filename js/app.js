window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var plan = [
    '##########################',
    '#          #   #   o     #',
    '#                        #',
    '#        ######          #',
    '#         ##      #      #',
    '##            #          #',
    '###     o      #         #',
    '#            ##          #',
    '#         ####     ##    #',
    '#  ##               #    #',
    '#  ###          oo    #  #',
    '#    #     #        #    #',
    '#  o                     #',
    '##########################'

];


var directions = {
    'n': new Vector(0, -1),
    'ne': new Vector(1, -1),
    'e': new Vector(1, 0),
    'se': new Vector(1, 1),
    's': new Vector(0, 1),
    'sw': new Vector(-1, 1),
    'w': new Vector(-1, 0),
    'nw': new Vector(1, -1)
};


function Wall() {}

var world = new World(plan, {
    '#': Wall,
    'o': BouncingCritter
});


// for(var i = 0; i < 5; i++) {
//     world.turn();
//     console.log(world.toString());
// }

var canvas = document.getElementById('canvas');

var time;
(function animloop(){
    requestAnimFrame(animloop);
    var now = new Date().getTime();
    var dt = now - (time || now);
    time = now;
    if(world.update(dt)) {
        world.turn();
        canvas.innerHTML = world.toString().replace(/\n/g, '<br />');
    }
})();
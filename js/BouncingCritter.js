


function BouncingCritter() {
    this.direction = Utils.randomElement(Object.keys(directions));
}

BouncingCritter.prototype.act = function(view) {
    if(view.look(this.direction) !== ' ') {
        this.direction = view.find(' ') || 's';
    }

    return {
        type: 'move',
        direction: this.direction
    };
};
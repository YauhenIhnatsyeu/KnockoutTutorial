Array.prototype.remove = function(itemToRemove) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === itemToRemove) {
            this.splice(i, 1);
            break;
        }
    }
}

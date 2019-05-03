function chaining(){
    var set = {
        value : 'top',
        left: function(){this.value = 'left'; return this;}, 
        top: function(){this.value = 'top'; return this;},
        right: function(){this.value = 'right'; return this;},
        down: function(){this.value = 'down'; return this;},
        screen: function(){document.getElementById("thisText").innerHTML = 'Current: ' + this.value; return this;},
    }
    return set ;
}

a = chaining();
class GuessingGame {
    constructor() {}

    setRange(min, max) {
    a=min;
    b=max;
   	aa=false;
   	bb=false;
    }

    guess() {
        if(aa){
    		b=average;
    	}
    	else if(bb){
    	    a=average;
        }
    average=Math.ceil(a + ((b - a)/2));
    return average;
    }
    lower() {
        aa=true;
        bb=false
    }

    greater() {
        bb=true;
    	aa=false;
    }
}

module.exports = GuessingGame;

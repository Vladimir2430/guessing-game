var n, x, l, g, a;
class GuessingGame {
    constructor() {}

    setRange(min, max) {
        n = min;
        x = max;
        l = false;
        g = false;
    }

    guess() {
        if (l) {
            x = a;
        } else if (g) {
            n = a;
        }
      a=Math.ceil(n + ((x - n)/2));
      return a;
    }
    lower() {
       l = true;
       g = false;
    }

    greater() {
       l = false;
       g = true;
    }
}

module.exports = GuessingGame;

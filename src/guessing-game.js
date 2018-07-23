let mn, mx, average, isLower, isGreater;

module.exports = class GuessingGame {
  setRange(min, max) {
    mn = min;
    mx = max;
    isLower = false;
    isGreater = false;
  }

  guess() {
    if (isLower) {mx = average;}
    if (isGreater) {mn = average;}
    average = Math.ceil((mx + mn) / 2);
    return average;
  }

  lower() {
    isLower = true;
    isGreater = false;
  }

  greater() {
  	isGreater = true;
    isLower = false;
  }
}

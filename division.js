module.exports = function(dividend, divider) {
  this.dividend = dividend
  this.divider = divider
  this.quotient = function() {
    return this.dividend / this.divider
  }

  this.divisionModule = function() {
    return this.dividend % this.divider
  }
}
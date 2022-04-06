module.exports = function(factor1, factor2) {
  this.factor1 = factor1
  this.factor2 = factor2
  this.product = function() {
    return factor1 * factor2
  }
}
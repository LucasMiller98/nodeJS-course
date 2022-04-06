module.exports = function(portion1, portion2) {
  this.portion1 = portion1
  this.portion2 = portion2
  this.total = function() {
    return portion1 + portion2
  }
}
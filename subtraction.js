module.exports = function(minuendo, subtrahend) {
  this.minuendo = minuendo
  this.subtrahend = subtrahend
  this.rest = function() {
    return minuendo - subtrahend
  }
}
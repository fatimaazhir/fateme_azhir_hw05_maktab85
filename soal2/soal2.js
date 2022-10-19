const walk = {
  walkNumber: 0,
  increase: function () {
    this.walkNumber += 1;
    return this;
  },
  decrease:function () {
    this.walkNumber -= 1;
    return this;
  },
  reset:function() {
    this.walkNumber = 0;
    return this;
  },
  read:function () {
    console.log(this.walkNumber);
    return this;
  },
}
walk.increase().decrease().increase().increase().read()



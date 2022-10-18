const walk = {
  walkNumber: 0,
  increase: function () {
    this.walkNumber = this.walkNumber + 1;
  },
  decrease: function () {
    this.walkNumber = this.walkNumber - 1;
  },
  reset: function () {
    this.walkNumber = 0;
  },
  read: function () {
    console.log(this.walkNumber);
  },
};

walk.increase();
walk.increase();
walk.read();



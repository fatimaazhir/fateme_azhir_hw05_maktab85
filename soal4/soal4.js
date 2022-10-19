class message{
  constructor(text, left, right, top) {
  this.text = text;
  this.left = left;
  this.right = right;
  this.top = top;
}
show(){
  window.alert(this.message);
}
}  
showNotification({
top:10,
right:10,
html:'Hello',
className:"welcome"
})

var msg = new message("Hello world", 10,5,10,2);

msg.show()

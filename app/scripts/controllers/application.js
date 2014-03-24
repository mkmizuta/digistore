App.ApplicationController = Ember.ObjectController.extend({
  cart: null, // static value w/out function because we want cart object; default state of null
  init: function () { // but want to set cart anytime anyone uses it
    if (typeof(localStorage.cartId) === "undefined"){
      var cart = this.store.createRecord("cart")
      cart.save().then(function(cart){
        localStorage.cartId = cart.get("id")
      });
    }
    var cart = this.store.find("cart", localStorage.cartId)
    this.set("cart", cart);
  }
});
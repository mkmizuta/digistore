App.ApplicationRoute = Ember.Route.extend({
  model: function () {
  
    if (typeof(localStorage.cartId) === "undefined") {
    
    var cart = this.store.createRecord("cart");
    return cart.save().then(function (cartObject){  //.then is promiseobject where it runs code in () after it runs what's before .then; .save runs api call for cart.new; cartObject is the result of api call whereas cart is before that; cart=ember, cartObj=api
      localStorage.cartId = cartObject.get("id");
      return cartObject;
     });
    } else {
    
      return this.store.find("cart", localStorage.cartId);  //this line runs show api
    }
  }
});
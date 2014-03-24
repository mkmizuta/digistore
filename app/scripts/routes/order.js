App.OrderRoute = Ember.Route.extend({
   actions:
  { confirmation: function (order) {
      var self = this
      order.save().then ( function () {
        var cart = self.store.createRecord("cart");
        cart.save().then( function (cart) {
          localStorage.cartId = cart.id;
          self.controllerFor("application").set("cart", self.store.find("cart", localStorage.cartId));
        })
        self.transitionTo("confirmation", order)
      });
    }
  },
  model: function() {
    return this.store.createRecord("order")
  }
})
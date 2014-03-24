App.CheckoutRoute = Ember.Route.extend({
  actions:
  { confirmation: function (order)
    {order.save();
      this.transitionTo("confirmation", order)
    }
  },
  model: function (params) {
    return this.store.createRecord("checkout");
  }
})

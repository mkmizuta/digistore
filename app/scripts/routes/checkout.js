App.CheckoutRoute = Ember.Route.extend({
  actions:
  { confirmation: function (user)
    {user.save();
      this.transitionTo("confirmation", user)
    }
  },
  model: function (params) {
    return this.store.createRecord("checkout");
  }
})

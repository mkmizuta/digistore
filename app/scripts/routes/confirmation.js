App.ConfirmationRoute = Ember.Route.extend({
  actions:
  { create: function (order)
    {order.save();
      this.transitionTo("confirmation", params.order_id)
    }
  }
});

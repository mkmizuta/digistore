App.CartRoute = Ember.Route.extend({
  actions: {
    more: function (item) {
      this.controllerFor("application").get("cart").then( function (cart) {
        item.incrementProperty("quantity");
        item.set("cart", cart);
        item.save();
      })
    },
    less: function (item) {
      this.controllerFor("application").get("cart").then( function (cart) {
      if (item.get("quantity") > 1) {
        item.decrementProperty("quantity");
        item.set("cart", cart);
        item.save()
      }
      else {
        item.deleteRecord()
        item.save()
        cart.get("items").then( function(items) {
          items.removeObject(item);
        });
      };
    });
    },
    removeFromCart: function (item) {
      cart = this.controllerFor("application")
      cart.get("items").then( function(items) {
        items.removeObject(item);
      });
      item.deleteRecord();
      item.save();
      }
    },
  model: function (params) {
    return this.controllerFor("application").get("cart")
  }
});

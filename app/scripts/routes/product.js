App.ProductRoute = Ember.Route.extend({
   actions: {
      addToCart: function (product) {
        var store = this.store;
        var cart = this.controllerFor("application").get("cart").then(function (cart) {
          cart.get("items").then(function (items) {
          return items.find(function (item) {
            return item.get("product").get("id") == product.get("id")
          });
        }).then(function (item) {
          if (item) {
            item.incrementProperty("quantity");
            item.set("cart", cart);
            item.save();

          } else {
            var item = store.createRecord("item", {
              quantity: 1,
              price: product.get("price"),
              product: product,
              cart: cart
          });
            cart.get("items").pushObject(item);
              item.save();
            }
          });
          })
          this.transitionTo("cart");
        }
      },
    model: function (params) {
    return this.store.find("product", params.product_id);
  }
});

App.ProductAllRoute = Ember.Route.extend({
  model: function () {
    return this.store.all("product");
  }
})
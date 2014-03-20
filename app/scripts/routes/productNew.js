App.ProductNewRoute = Ember.Route.extend({
  actions: {
    createProduct: function (product) {
      productNew = this.store.createRecord("product", product);
      var self = this
      productNew.save().then(
        function () {
          self.transitionTo("admin");
        },
        function (error) {
          alert(error.responseText);
          newProduct.deleteRecord();
        }
      )
    }
  },
  model: function () {
    return {};
  }
});

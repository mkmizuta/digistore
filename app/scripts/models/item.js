App.Item = DS.Model.extend({
  product: DS.belongsTo("product", { async: true }),
  cart: DS.belongsTo("cart", {async: true}),
  quantity: DS.attr("number"),
  subtotal: function(){
    return (this.get('quantity') * this.get('product').get('price'))
  }.property('quantity', 'this.product.price')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 1
  },
    {
    id: 2,
    product: 2,
    quantity: 1
  },
    {
    id: 3,
    product: 3,
    quantity: 1
  }
]

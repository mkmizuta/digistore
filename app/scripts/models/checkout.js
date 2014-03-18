App.Checkout = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  cc: DS.attr("number"),
  cvv: DS.attr("number"),
  expiration: DS.attr("number"),
  zipcode: DS.attr("number")
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
  }
]

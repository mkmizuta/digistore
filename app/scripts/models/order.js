App.Order = DS.Model.extend({
  paid: DS.attr("boolean"),
  canceled: DS.attr("boolean"),
  checkout: DS.belongsTo("checkout")
})

App.Order.FIXTURES = [
  {
    id: 1,
    paid: true,
    canceled: false
  }, {
    id: 2,
    paid: false,
    canceled: true
  }
]

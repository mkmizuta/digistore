App.Order = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  cc: DS.attr("number"),
  cvv: DS.attr("number"),
  expiration: DS.attr("number"),
  zipcode: DS.attr("number"),
  paid: DS.attr("boolean"),
  canceled: DS.attr("boolean"),
})

// App.Order.FIXTURES = [
//   {
//     id: 1,
//     paid: true,
//     canceled: false
//   }, {
//     id: 2,
//     paid: false,
//     canceled: true
//   }
// ]

App.User = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  cc: DS.attr("number"),
  cvv: DS.attr("number"),
  zipcode: DS.attr("number"),
  orders: DS.hasMany("order", { async: true })
});

App.User.FIXTURES = [

]

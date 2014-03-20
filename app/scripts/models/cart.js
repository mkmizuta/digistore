App.Cart = DS.Model.extend({
  items: DS.hasMany("item", { async: true }),
  total: function(){
      var items = this.get('items');
      var prices = items.map(function(item){
        return item.get('subtotal')
      });
      var sum = prices.reduce(function(previousValue, currentValue){
        return previousValue + currentValue
      }, 0);
      return sum
    }.property('items.@each.subtotal')
  });

App.Cart.FIXTURES = [
  {
   id: "fixture-0"  // fixture is what's held in cache/local storage
  }
]

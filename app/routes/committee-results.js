import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/committees?query='+ params.committee +'&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON);
     return responseJSON.results;
   });
  }
});

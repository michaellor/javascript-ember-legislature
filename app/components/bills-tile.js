import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showBill() {
      this.sendAction('showBill');
    }
  }
});

import Component from '@ember/component';

export default Component.extend({
  currentValue: false,

  actions: {
    toggleCurrentValue() {
      debugger;
      this.toggleProperty('currentValue');
    }
  }
});

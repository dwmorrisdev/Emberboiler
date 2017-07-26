import Ember from 'ember';

export default Ember.Controller.extend({
  guestName: '',
  guestEmail: '',
  guestMessage: '',

  actions: {
    sendMessage () {
      this.set('responseMessage', `Thank you! We've just sent your message!`);
      this.set('guestName', '');
      this.set('guestEmail', '');
      this.set('guestMessage', '');
    }
  }
});

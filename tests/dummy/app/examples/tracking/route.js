import Ember from 'ember';
import RouteTourMixin from 'ember-site-tour/mixins/route-tour';
import $ from 'jquery';

const {
  Route
} = Ember;

export default Route.extend(RouteTourMixin, {

  _trackEvent(eventName, data) {
    let $log = $('#tracking-log');
    let dataStr = `{ id: ${data.id}, status: ${data.status}, currentStep: ${data.currentStep}, calloutStatus: ${data.calloutStatus}, tourHasBeenEnded: ${data.tourHasBeenEnded} }`;

    $log.append($(`<li>${eventName}: ${dataStr}</li>`));
  },

  actions: {
    tourStarted(e) {
      this._trackEvent('tour-started', e.toJSON());
    },
    tourEnded(e) {
      this._trackEvent('tour-ended', e.toJSON());
    },
    tourClosed(e) {
      this._trackEvent('tour-closed', e.toJSON());
    }
  }

});

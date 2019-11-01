import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service progress;

  startProgress() {
    if (!this.args.local) {
      this.progress.start();
    }
  }

  stopProgress() {
    if (!this.args.local) {
      this.progress.stop();
    }
  }
}

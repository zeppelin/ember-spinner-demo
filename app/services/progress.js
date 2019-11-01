import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { schedule } from '@ember/runloop';

export default class extends Service {
  @tracked counter = 0;

  get isRunning() {
    return this.counter > 0;
  }

  start() {
    schedule('afterRender', ()=> {
      this.counter++;
    });
  }

  stop() {
    schedule('afterRender', ()=> {
      this.counter--;
    });
  }
}

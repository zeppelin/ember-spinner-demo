import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class extends Component {
  @tracked isLoadingSomething = false;
  @tracked isLoadingSomethingElse = false;
  @tracked isLoadingSomethingElseIndeed = false;

  @action loadSomething() {
    this.isLoadingSomething = true;

    later(() => {
      this.isLoadingSomething = false;
    }, 3000);
  }

  @action loadSomethingElse() {
    this.isLoadingSomethingElse = true;

    later(() => {
      this.isLoadingSomethingElse = false;
    }, 2000);
  }
  @action loadSomethingElseIndeed() {
    this.isLoadingSomethingElseIndeed = true;

    later(() => {
      this.isLoadingSomethingElseIndeed = false;
    }, 2000);
  }
}

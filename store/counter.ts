import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
  namespaced: 'counter',
  strict: false,
  target: 'nuxt'
});

export default class Counter extends VuexModule {
  // state
  private _count = 0;

  // getters
  get count(): number {
    return this._count;
  }

  // mutations
  @mutation
  public addToCount() {
    this._count++;
  }

  @mutation
  public subtractFromCount() {
    if (this._count > 0) {
      this._count--;
    }
  }

  // actions
  // eslint-disable-next-line require-await
  @action
  public async add(): Promise<void> {
    this.addToCount();
  }

  // eslint-disable-next-line require-await
  @action
  public async subtract(): Promise<void> {
    this.subtractFromCount();
  }
}

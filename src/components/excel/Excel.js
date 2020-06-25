// eslint-disable-next-line import/named
import { $ } from '../../core/dom';

// eslint-disable-next-line import/prefer-default-export
export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  // eslint-disable-next-line class-methods-use-this
  getRoot() {
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}

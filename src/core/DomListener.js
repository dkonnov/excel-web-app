/* eslint-disable import/prefer-default-export */
export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!');
    }
    this.$root = $root;
  }
}

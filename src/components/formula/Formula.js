/* eslint-disable import/prefer-default-export */
import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__folmula';

  // eslint-disable-next-line class-methods-use-this
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>`;
  }
}

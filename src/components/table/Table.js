/* eslint-disable import/prefer-default-export */
import { ExcelComponent } from '../../core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__toolbar';

  // eslint-disable-next-line class-methods-use-this
  toHTML() {
    return `          <div class="row">
    <div class="row-info"></div>
    <div class="row-data">
      <div class="column">A</div>
      <div class="column">C</div>
      <div class="column">D</div>
    </div>
  </div>
  <div class="row">
    <div class="row-info">1</div>
    <div class="row-data">
      <div class="cell selected">1</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
    </div>
  </div>
  <div class="row">
    <div class="row-info">
      2
    </div>
    <div class="row-data">
      <div class="cell selected" contenteditable="">1</div>
      <div class="cell" contenteditable="">1</div>
      <div class="cell" contenteditable="">1</div>
    </div>
  </div>
  <div class="row">
    <div class="row-info">3</div>
    <div class="row-data">
      <div class="cell selected">1</div>
      <div class="cell">1</div>
      <div class="cell">1</div>
    </div>
  </div>`;
  }
}

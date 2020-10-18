import Component from '@glimmer/component';

export default class TableBodyComponent extends Component {
  get rowsToShow() {
    let start = this.args.currentPage === 1 ? 0 : (this.args.currentPage - 1) * this.args.maxRows;
    let rows = [...this.args.rows];
    return rows.splice(start, this.args.maxRows);
  }
}

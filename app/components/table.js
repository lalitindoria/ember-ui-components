import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TableComponent extends Component {
  get showPagination() {
    return this.args.rows.length > this.args.maxRows;
  }

  @tracked currentPage = 1;
  @tracked sorted = 0;

  get pageNumbers() {
    let totalPages = Math.ceil(this.args.rows.length / this.args.maxRows);
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  get showPrev() {
    return this.currentPage > 1;
  }

  get showNext() {
    return this.currentPage < this.pageNumbers.length;
  }

  setPage(page) {
    this.currentPage = page;
  }

  goPrev() {
    this.currentPage -= 1;
  }

  goNext() {
    this.currentPage += 1;
  }

  sort = function(index) {
    this.currentPage = 1;

    let newArr = [...this.args.rows];
    let sortAscending = this.sorted === 0 || this.sorted === -1;
    newArr = newArr.sort((row, nextRow) => {
      return sortAscending ? row[index].localeCompare(nextRow[index]) : nextRow[index].localeCompare(row[index]);
    });
    if (sortAscending) this.sorted = 1;
    else this.sorted = -1;
    this.args.updateRows(newArr);
  }.bind(this)
}

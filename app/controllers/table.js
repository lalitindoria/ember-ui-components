import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableController extends Controller {
  @service theme;
  headerCols = [
    {
      title: 'Employee ID',
      sortable: false
    },
    {
      title: 'Name',
      sortable: true
    },
    {
      title: 'Designation',
      sortable: true
    },
    {
      title: 'Gender',
      sortable: false
    }
  ];

  @tracked rows = [
    [1, 'John Doe', 'Engineering Manager', 'Male'],
    [2, 'Matt', 'Engineering Manager', 'Male'],
    [3, 'Anita', 'Product Manager', 'Female'],
    [4, 'Suraj', 'Software Engineer', 'Male'],
    [5, 'Tarun', 'Software Engineer', 'Male'],
    [6, 'Rachana', 'Software Engineer', 'Female'],
    [7, 'Disha', 'Software Engineer', 'Female'],
    [8, 'John Doe', 'Engineering Manager', 'Male'],
    [9, 'Matt', 'Engineering Manager', 'Male'],
    [10, 'Anita', 'Product Manager', 'Female'],
    [11, 'Suraj', 'Software Engineer', 'Male'],
    [12, 'Tarun', 'Software Engineer', 'Male'],
    [13, 'Rachana', 'Software Engineer', 'Female'],
    [14, 'Disha', 'Software Engineer', 'Female'],
    [15, 'John Doe', 'Engineering Manager', 'Male'],
    [16, 'Matt', 'Engineering Manager', 'Male'],
    [17, 'Anita', 'Product Manager', 'Female'],
    [18, 'Suraj', 'Software Engineer', 'Male'],
    [19, 'Tarun', 'Software Engineer', 'Male'],
    [20, 'Rachana', 'Software Engineer', 'Female'],
    [21, 'Disha', 'Software Engineer', 'Female'],
    [22, 'John Doe', 'Engineering Manager', 'Male'],
    [23, 'Matt', 'Engineering Manager', 'Male'],
    [24, 'Anita', 'Product Manager', 'Female'],
    [25, 'Suraj', 'Software Engineer', 'Male'],
    [26, 'Tarun', 'Software Engineer', 'Male'],
    [27, 'Rachana', 'Software Engineer', 'Female'],
    [28, 'Disha', 'Software Engineer', 'Female']
  ];

  get tableContent() {
    return this.rows;
  }

  updateRows = function (rows) {
    this.set('rows', rows);
  }.bind(this)

  maxRows = 10;
}

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ThemeController extends Controller {
  @service theme;

  @action
  changeTheme() {
    this.toggleProperty('theme.isDark');
  }
}

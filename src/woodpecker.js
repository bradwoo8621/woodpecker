import jQuery from 'jquery'
import browser from 'jquery.browser'
import classnames from 'classnames'

let $ = jQuery;

class BrowserHelper {
	constructor() {
	}
	detect() {
		return Object.keys($.browser).filter((key) => {
			return key !== 'version' && key !== 'versionNumber';
		}).reduce((classes, key) => {
			let className = `n-${key.replace(' ', '-')}`;

			classes[className] = $.browser[key];
			return classes;
		}, {});
	}
	attachToHTML() {
		$('html').addClass(classnames(this.detect()));
	}
}

let helper = new BrowserHelper();
helper.attachToHTML();

export default helper
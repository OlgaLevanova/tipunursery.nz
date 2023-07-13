import Collapse from 'bootstrap/js/dist/collapse'

export default class Toggle {
	constructor()
	{
		let options ={ toggle: false};
		const collapseElementList = document.querySelectorAll('.collapse')
		const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl, options))
	}
}

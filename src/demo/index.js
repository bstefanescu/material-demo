import Qute from '@qutejs/runtime';

import DemoAppTemplate from './demo.jsq';

//TODO remove
import './demo.css';

const { ViewModel, Template, Link } = Qute;

@Template(DemoAppTemplate)
class DemoAppRoot extends ViewModel {

    @Link("Pages") pages;
    @Link("Pages/current") currentPage;

    _pageList = null;

    // we must cache the page list otherwise the sidebar will be updated each time the
    // currentPage changes (because the page lists will change too if they are not cached)
    get pageList() {
        if (!this._pageList) {
            const pages = this.pages;
            this._pageList = Object.keys(pages).map(key => pages[key]);
            this._pageList.sort((a,b) => a - b);
        }
        return this._pageList;
    }

}

export default DemoAppRoot;

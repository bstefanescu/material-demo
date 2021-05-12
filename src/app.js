import Qute from '@qutejs/runtime';
import Router from '@qutejs/router';
import DemoAppRoot from './demo';
import pages from './pages';

// register material design icon provider
import { mIcon } from '@qutejs/material/icon';
import mdIcon from '@qutejs/material/icon/md';
mIcon.add('md', mdIcon, true);


const {Application, View, DataModel } = Qute;

@View(DemoAppRoot)
class DemoApp extends Application {

    @DataModel("Pages") pages = pages;
    @DataModel("Pages/current") currentPage;
    @DataModel('Router') router = new Router(this, this.routes).start();

    @DataModel("Layout/showRail") showRail = false;

    get routes() {
        var self = this;
        return {
            '*': function(path, vars) {
                if (path) {
                    const page = self.pages[path];
                    self.currentPage = page ? page.component : null;
                }
            },
            '/': function(path, vars) {
                self.currentPage = null;
            }
        }
    }

    debugger(event, data) {
        if (event === 'update') {
            //console.log('Updating ViewModel ', data);
        }
    }
}

export default DemoApp;

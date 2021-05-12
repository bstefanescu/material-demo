import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';
import window from '@qutejs/window';

const { ViewModel, Template, Property } = Qute;


@Template(PageTemplate)
class Page extends ViewModel {

    handleNavigation(evt) {
        window.alert('Navigate to '+evt.detail);
    }

}

export default Page;

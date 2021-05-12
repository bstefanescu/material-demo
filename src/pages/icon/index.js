import window from '@qutejs/window';
import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {

    testCheckIcon(e) {
        window.document.querySelector(".qm-CheckIcon").classList.toggle("is-active");
    }
}

export default Page;

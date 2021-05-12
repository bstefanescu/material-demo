import window from '@qutejs/window';
import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {

    onModalAction(evt) {
        evt.detail.modal.setProgress(-1);
        window.setTimeout(() => {
            evt.detail.modal.setProgress(100);
            evt.detail.modal.close();
        }, 3000);
    }
}

export default Page;

import Qute from '@qutejs/runtime';
import { Toast } from '@qutejs/material/toast';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

const toast = new Toast();

@Template(PageTemplate)
class Page extends ViewModel {
    setToastOnTop(top) {
        toast.top = top;
    }
    openToaster() {
        toast.show({
            text: 'I am a toast with an action.',// <b>bla bla bla</b> bla bnla bnla www bla qwerty balalala Merdic --- and ahgain ---- Hello world! bla bla bla bla bnla bnla www bla qwerty balalala Merdic --- and again -- Hello world! bla bla bla bla bnla bnla www bla qwerty balalala Merdic BLA BLA',
            action: {
                label: 'Close',
                run: toast => {
                    toast.close();
                }
            }
        });
    }
}

export default Page;

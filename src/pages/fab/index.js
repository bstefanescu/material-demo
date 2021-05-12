import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property, On } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {

    @Property(String) direction = 'top';

    get fabItems() {
        return [
            {action:'search', icon: 'search'}, 
            {action:'add', icon: 'add'},
            {action:'send', icon: 'send'},
            {action:'share', icon: 'share'}
        ];
    }

    onFabClick(event) {
        console.log('========');
    }
    testMenu(e) {
        console.log('++++++++++=');
        e.target.closest('button').classList.toggle("is-active");
    }

}

export default Page;
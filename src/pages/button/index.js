import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property, On } = Qute;

var CNT = 0;

@Template(PageTemplate)
class Page extends ViewModel {

    @Property variant = 'primary';
    @Property size = 'normal';
    @Property(Boolean) rounded;
    @Property(Boolean) floating;
    @Property(Boolean) disabled;

    @Property icon;
    @Property label = 'Submit';

    get fabItems() {
        return [
            {action:'search', icon: 'search'}, 
            {action:'add', icon: 'add'},
            {action:'send', icon: 'send'},
            {action:'share', icon: 'share'}
        ];
    }

    @On('change')
    onChange(evt) {
        const target = evt.target;
        if (target.type === 'checkbox') {
            if (target.name === 'icon') {
                this.icon = target.checked ? target.value : null;
            } else {
                this[target.name] = target.checked;
            }
        } else if (target.type === 'radio') {
            this[target.name] = target.value;
            console.log(target.name, this[target.name]);
        }
    }

    onFabClick(event) {
        console.log('========');
    }

}

export default Page;
import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {
    @Property(String) variant = 'filled';
    /*
    @Property(String) leftIcon;
    @Property(String) rightIcon;
    */

    items = [
        {value:'i1', label: 'item 1'},
        {value:'i2', label:'item 2'},
        {value:'i3', label:'item 3'},
        {value:'i4', label:'item 4'},
        {value:'i5', label: 'item 5'}
    ];

    selectionChanged(e) {
        console.log('====== Selection changed: ', e.detail.value);
    }
}

export default Page;

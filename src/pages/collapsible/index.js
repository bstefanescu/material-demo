import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {
    @Property variant = 'default';
}

export default Page;

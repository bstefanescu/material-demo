import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {
    @Property(String) variant = 'filled';
    @Property(String) leftIcon;
    @Property(String) rightIcon;

}

export default Page;

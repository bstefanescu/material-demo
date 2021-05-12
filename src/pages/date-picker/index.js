import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

@Template(PageTemplate)
class Page extends ViewModel {
    @Property(Date) selectedDate;
    get prettySelectedDate() {
        return this.selectedDate ? this.selectedDate.toDateString() : "None";
    }

}

export default Page;

import Qute from '@qutejs/runtime';
import SidebarTemplate from './sidebar.jsq';

const { ViewModel, Template, Property, Required } = Qute;

@Template(SidebarTemplate)
class Sidebar extends ViewModel {
    @Required @Property(Array) pages;
}
export default Sidebar;

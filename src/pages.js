import ButtonPage from './pages/button';
import TextboxPage from './pages/textbox';
import TextareaPage from './pages/textarea';
import CheckboxPage from './pages/checkbox';
import SwitchPage from './pages/switch';
import RadioPage from './pages/radio';
import SliderPage from './pages/slider';
import ChipPage from './pages/chip';
import ProgressPage from './pages/progress';
import SpinnerPage from './pages/spinner';
import CollapsiblePage from './pages/collapsible';
import ListPage from './pages/list';
import TabsPage from './pages/tabs';
import IconPage from './pages/icon';
import FABPage from './pages/fab';
import SelectPage from './pages/select';
import ModalPage from './pages/modal';
import ToastPage from './pages/toast';
import RailPage from './pages/rail';
import DatePickerPage from './pages/date-picker';

console.log('========================')

const pages = {
    button: {
        id: 'button',
        label: "Button",
        component: ButtonPage
    },
    FAB: {
        id: 'FAB',
        label: 'FAB',
        component: FABPage
    },
    textbox: {
        id: 'textbox',
        label: 'TextBox',
        component: TextboxPage
    },
    textarea: {
        id: 'textarea',
        label: 'TextArea',
        component: TextareaPage
    },
    checkbox: {
        id: 'checkbox',
        label: 'Checkbox',
        component: CheckboxPage
    },
    switch: {
        id: 'switch',
        label: 'Switch',
        component: SwitchPage
    },
    radio: {
        id: 'radio',
        label: 'Radio',
        component: RadioPage
    },
    slider: {
        id: 'slider',
        label: 'Slider',
        component: SliderPage
    },
    chip: {
        id: 'chip',
        label: 'Chip',
        component: ChipPage
    },
    progress: {
        id: 'progress',
        label: 'Progress',
        component: ProgressPage
    },
    spinner: {
        id: 'spinner',
        label: 'Spinner',
        component: SpinnerPage
    },
    collapsible: {
        id: 'collapsible',
        label: 'Collapsible',
        component: CollapsiblePage
    },
    list: {
        id: 'list',
        label: 'List',
        component: ListPage
    },
    tabs: {
        id: 'tabs',
        label: 'Tabs',
        component: TabsPage
    },
    icon: {
        id: 'icon',
        label: 'Icon',
        component: IconPage
    },
    select: {
        id: 'select',
        label: 'Select',
        component: SelectPage
    },
    modal: {
        id: 'modal',
        label: 'Modal',
        component: ModalPage
    },
    toast: {
        id: 'toast',
        label: 'Toast',
        component: ToastPage
    },
    rail: {
        id: 'rail',
        label: 'Rail',
        component: RailPage
    },
    datepicker: {
        id: 'datepicker',
        label: 'Date Picker',
        component: DatePickerPage
    },
}

export default pages;

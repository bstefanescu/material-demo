import window from '@qutejs/window';
import Qute from '@qutejs/runtime';
import PageTemplate from './page.jsq';

const { ViewModel, Template, Property } = Qute;

const timeouts = [200, 300, 500, 100, 300, 100, 200, 1000, 200];

@Template(PageTemplate)
class Page extends ViewModel {
    @Property progressValue;

    startDeterminedProgress() {
        let value = 0, i = 0;
        const updateFn = () => {
            value += 10;
            this.progressValue = value;
            if (value < 100) {
                i++;
                if (i > timeouts.length-1) i = 0;
                window.setTimeout(updateFn, timeouts[i]);
            }
        };
        window.setTimeout(updateFn, timeouts[i])
    }

    startUndeterminedProgress() {
        let value = 0, i = 0;
        this.progressValue = -1;
        window.setTimeout(() => {
            this.progressValue = 100;
        }, 5000);
    }

    resetProgress() {
        this.progressValue = 0;
    }

}

export default Page;

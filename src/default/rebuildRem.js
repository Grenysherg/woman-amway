import {isMobile} from './isMobile';

const TEMPLATE_WIDTH = 1600;
const TEMPLATE_MOBILE_WIDTH = 768;
const FACTOR = 10;

export default () => {
    const $html = $('html');
    const activeClassName = '--active';
    let width = window.innerWidth;

    if (isMobile()) {
        $html.css({'font-size': `${width / TEMPLATE_MOBILE_WIDTH * FACTOR}px`});
    } else {
        $html.css({'font-size': `${width / TEMPLATE_WIDTH * FACTOR}px`});
    }

    $html.addClass(activeClassName);
};
import rebuildRem from './rebuildRem';
import {blazy} from "./blazy";
import WOW from 'wowjs';

export default () => {
    const $window = $(window);
    rebuildRem();

    $window.off('resize');
    $window.on('resize', function () {
        rebuildRem();
    });

    const wow = new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });

    wow.init();
};
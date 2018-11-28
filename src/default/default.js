import rebuildRem from './rebuildRem';
import {blazy} from "./blazy";

export default () => {
    const $window = $(window);
    rebuildRem();

    $window.off('resize');
    $window.on('resize', function () {
        rebuildRem();
    });
};
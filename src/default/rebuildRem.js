const TEMPLATE_WIDTH = 1920;
const TEMPLATE_MOBILE_WIDTH = 768;
const FACTOR = 10;

export default () => {
    const $html = $('html');
    const activeClassName = '--active';
    let width = window.innerWidth;

    $html.css({'font-size': `${width / TEMPLATE_MOBILE_WIDTH * FACTOR}px`});
    $html.addClass(activeClassName);
};
import {blazy} from '../default/blazy';

export default () => {
    const $sliders = $('.js-slider');

    if (!$sliders.length) {
        return false;
    }

    const slideSelector = '.js-slide';

    $sliders.each((index, slider) => {
        const $slider = $(slider);

        $slider.slick({
            dots: true,
            arrows: false,
            slide: slideSelector,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            rows: 0,
            slidesToShow: 1
        });

        $slider.on('afterChange', () => {
            blazy.revalidate();
        });
    });
};
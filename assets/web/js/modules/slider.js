import Carousel from 'bootstrap/js/dist/carousel'

export default class Slider {
    constructor()
    {
        this.carouselAll = document.querySelectorAll('.carousel');

        this.init();
    }

    init()
    {
        for (let i = 0; i < this.carouselAll.length; i++) {
            let items = this.carouselAll[i].querySelectorAll('.carousel-item')
            if(items.length > 1) {
                new Carousel(this.carouselAll[i], {})
            }
        }
    }
}

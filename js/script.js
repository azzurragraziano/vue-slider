var app = new Vue(
    {
        el: '#app',
        data: {
            currentActiveElement: 0,
            thumbIsActive: true,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods: {

            //al click sulla freccia in basso mostro l'immagine successiva
            showNextElement() {

                //vado avanti con le immagini solo se non sono sull'ultima immagine, altrimenti ricomincio dall'inizio dell'array
                if(this.currentActiveElement < this.slides.length - 1) {
                    this.currentActiveElement++;
                } else {
                    this.currentActiveElement = 0;
                }
            },
            //al click sulla freccia in alto mostro l'immagine precedente
            showPrevElement() {

                //vado indietro con le immagini solo se non sono sulla prima immagine, altrimenti ricomincio dalla fine dell'array
                if(this.currentActiveElement > 0) {
                    this.currentActiveElement--;
                } else {
                    this.currentActiveElement = this.slides.length - 1;
                }
            },
            toggleActive() {
                this.thumbIsActive = !this.thumbIsActive
            }
        }
    }
);
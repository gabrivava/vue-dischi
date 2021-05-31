/* Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.
 */

const app = new Vue({
    el: '#root',
    data: {
        albums: (''),
        genere: '',
        generi: ['All'],
    },
    methods: {

        chekGenere(index) {
            if (this.genere === 'All') {
                return true;
            } else if (this.albums[index].genre.includes(this.genere)) {
                return true;
            }
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(risp => {
            const album = risp.data.response;
            //console.log(album);
            this.albums = album;

            /* check generi */
            for (let index = 0; index < this.albums.length; index++) {
                const element = this.albums[index];
                //console.log(element.genre);
                //console.log(element.genre);
                if (!this.generi.includes(element.genre)) {
                    this.generi.push(element.genre)
                } 
            }
            console.log(this.generi);
        })
    }
})
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],

            sizes: [
                {index: 0, size: 'XS'},
                {index: 1, size: 'S'},
                {index: 2, size: 'M'},
                {index: 3, size: 'L'},
                {index: 4, size: 'XL'},
                {index: 5, size: 'XXL'},
                {index: 6, size: 'XXXL'}
            ]
        }
    }
})

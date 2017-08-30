<template>
    <div class="SelectBag">

        <button type="button" class="btn mybtn btn-primary" @click="clickAddLuggage">
            +
        </button>  {{bag.title}} {{bag.convertedPrice}}


    </div>
</template>

<script>

    import 'vue-awesome/icons'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        props: ['bag' ,'passengerid' ,'leg', 'airline'],
        components: {
            'VueAwesome': Icon
        },
        data() {
            return {}
        },
        methods: {
            clickAddLuggage(passengerid)
            {
                console.log('Component SelectBag ' + this.passengerid + ' ' + this.bag.key + ' ' + this.leg);
                this.$store.commit('addBaggage', {passengerid: this.passengerid,
                                                    key : this.bag.key,
                                                    leg: this.leg,
                                                    carrier: this.airline  });
            }
        }
    }
</script>


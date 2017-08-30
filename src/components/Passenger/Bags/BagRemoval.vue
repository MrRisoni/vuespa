<template>
    <div class="BagRemoval">

        <button type="button" class="btn mybtn btn-danger" @click="clickRemoveLuggage">
            -
        </button> {{bag.count}} x {{bag.title}}  {{bag.carrier}} {{bag.convertedPrice}}


    </div>
</template>

<script>

    import 'vue-awesome/icons'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        props: ['bag' ,'passengerid' ,'leg'],
        components: {
            'VueAwesome': Icon
        },
        data() {
            return {}
        },
        methods: {
            clickRemoveLuggage()
            {
                this.$store.commit('removeBag', {passengerid: this.passengerid,
                    key : this.bag.key,
                    leg: this.leg});
            }
        }
    }
</script>


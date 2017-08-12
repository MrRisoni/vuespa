<template>
    <div class="bagleg">

        <div class="col-md-6">

            <div class="alert alert-success" role="alert">{{route}}</div>

            <div v-for="airline of bagRules">

                <div v-for="carrier of legCarriers">
                    <div v-if="carrier === airline.carrier">

                        <bagcarrier :airline="airline"
                                    :passengerid="passengerid"
                        ></bagcarrier>


                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>


    import BagCarrier from './BagCarrier.vue';

    export default {
        props: ['passengerid'],
        components: {
            'bagcarrier': BagCarrier
        },
        props: ['route', 'legCarriers', 'passengerid'],
        data() {
            return {}
        },
        computed:
            {
                bagRules() {
                    return this.$store.state.bagAllowance
                }
            }

    }
</script>


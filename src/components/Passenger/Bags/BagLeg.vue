<template>

    <div class="col-md-6">

        <div class="bagleg">

            <div class="alert alert-success" role="alert">{{route}}</div>

            <div v-for="airline of bagRules">

                <div v-for="carrier of legCarriers">
                    <div v-if="carrier === airline.carrier">

                        <bagcarrier :airline="airline"
                                    :leg="leg"
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
        props: ['route', 'legCarriers', 'passengerid' ,'leg'],
        components: {
            'bagcarrier': BagCarrier
        },
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


<template>
    <div class="bagleg">

        <div class="col-md-6">


            <div class="panel panel-primary">
                <div class="panel-heading">{{route}}</div>

                <div class="panel-body">


                    <div v-for="airline of bagRules">

                        <div v-for="carrier of legCarriers">
                            <div v-if="carrier === airline.carrier">

                                <bagcarrier :airline="airline"></bagcarrier>


                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>


    import BagCarrier from './BagCarrier.vue';

    export default {
        components: {
            'bagcarrier': BagCarrier
        },
        props: ['route', 'legCarriers'],
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


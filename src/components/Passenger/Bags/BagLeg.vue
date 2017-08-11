<template>
    <div class="bagleg">

        <div class="col-md-6">


            <div class="panel panel-primary">
                <div class="panel-heading">{{route}}</div>

                <div class="panel-body">


                    <div v-for="airline of bagRules">


                        <div class="panel panel-primary">
                            <div class="panel-heading">{{airline.carrier}}</div>

                            <div class="panel-body">


                                <div v-for="carrier of legCarriers">
                                    <div v-if="carrier === airline.carrier">

                                        <div v-for="bag of airline.bags">

                                            <button type="button" class="btn btn-xs btn-primary">
                                                <span class="glyphicon glyphicon-plus"></span>
                                            </button>

                                            {{bag.title}} {{bag.price}}
                                        </div>


                                    </div>
                                </div>
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
        props: ['route' ,'legCarriers'],
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


<template>
    <div class="purchasedLeg">

        <div class="col-md-6">

            <!-- shows what you have purchased -->
            <div class="panel panel-info">
                <div class="panel-heading">{{route}}</div>

                <div class="panel-body">

                    <div v-for="bag in boughtBagsDepart">

                        <div class="row">

                            <div class="col-md-6">

                                {{bag.title}}  {{bag.carrier}}


                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['route'],
        data() {
            return {}
        },
        computed :{
            boughtBagsDepart()
            {
                return this.$store.state.passengers[0].bags[0].types;
            }
        }
    }
</script>


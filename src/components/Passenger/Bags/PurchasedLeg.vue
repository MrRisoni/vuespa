<template>
    <div class="purchasedLeg">

        <div class="col-md-6">

            <!-- shows what you have purchased -->
            <div class="card card-info">
                <div class="card-heading">{{route}}</div>

                <div class="card-body">

                    <div v-for="bag in boughtBagsDepart">

                        <div class="row">

                            <div class="col-md-10">

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
        props: ['route', 'passengerid'],
        data() {
            return {}
        },
        computed :{
            boughtBagsDepart()
            {
                return this.$store.state.passengers[this.passengerid-1].bags[0].types;
            }
        }
    }
</script>


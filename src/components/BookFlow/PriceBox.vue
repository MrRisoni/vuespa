<template>
    <div class="pricebox">

        <div class="row">
            <div class="col-md-12">

                <div class="card bg-info">
                    <div class="card-header"><b>Price Analysis </b></div>
                    <div class="card-body text-white">

                        <div class="row">

                            <div class="col-md-12">
                                <h4 class="analysisCategory">Ticket Price</h4>
                                <hr>
                            </div>
                        </div>

                        <div v-for="pax in appState.paxTypes">
                            <div class="row">

                                <div class="col-md-12">

                                    <div v-if="pax.count >0">
                                        {{pax.count}} {{pax.name}} x {{pax.netPrice}}
                                    </div>
                                </div>
                            </div>


                        </div>

                        <hr>
                        <div class="row">

                            <div class="col-md-12">
                                <h4 class="analysisCategory">Upsales</h4>
                                <hr>
                            </div>
                        </div>


                        <br>
                        <div class="row">
                            <div class="col-md-12">

                                {{ $t("message.hello") }}

                                <h3> Total Price : {{getTotalPrice}} {{getCurrency}} </h3>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

    .pricebox {
        position: fixed;
        width: auto;
        min-width: 30%;
        max-width: 30%;

    }

    .analysisCategory {
        color: yellow;
    }

</style>


<script>


    export default {

        computed: {
            appState() {
                return this.$store.state
            },
            getCurrency() {
                return this.$store.state.currency
            },
            getTotalPrice() {
                let mytState = this.$store.state;
                let total = 0;

                mytState.paxTypes.forEach((pax) => {
                    if (pax.count > 0) {
                        total += pax.netPrice * pax.count;
                    }
                });

                let rate = 1;

                mytState.currencyData.forEach( (cur) => {
                   if (cur.trigram ===  mytState.currency) {
                       rate = cur.rate;

                   }
                });

                total *= rate;

                total = total.toFixed(2);

                return total;
            }

        }
    }
</script>

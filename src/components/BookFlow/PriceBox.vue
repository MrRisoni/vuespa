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
                                        {{pax.count}} {{pax.name}} x {{pax.convertedPrice}} {{getCurrency}}
                                    </div>
                                </div>
                            </div>


                        </div>

                        <hr>
                        <div class="row">

                            <div class="col-md-12">
                                <h4 class="analysisCategory">Upsales</h4>
                                <hr>


                                <div v-for="data in getUpgradeFare">

                                    <div v-if="data.count >0 ">
                                        {{data.carrier}} {{data.fareName}} {{data.price}}  x {{data.count}}
                                    </div>
                                </div>


                            </div>
                        </div>


                        <br>
                        <div class="row">
                            <div class="col-md-12">

                                <h3> Total Price : {{getTotalPrice}} {{getCurrency}} </h3>

                            </div>
                        </div>


                    </div> <!-- end div card body -->


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
            getUpgradeFare() {
                // return an array
                // Carrier Fare Nums Price
                let myState = this.$store.state;

                let rate = 1;

                myState.currencyData.forEach((cur) => {
                    if (cur.trigram === myState.currency) {
                        rate = cur.rate;
                    }
                });

                let fares = [];


                myState.upgradeFare.forEach((carrier) => {
                    carrier.options.forEach((opt) => {

                        opt.convertedPrice = (opt.price * rate).toFixed(2);

                        let newOption = {
                            carrier: carrier.carrier,
                            fareName: opt.name,
                            price: opt.convertedPrice,
                            count: 0
                        }

                        fares.push(newOption);
                    });
                });

                fares.forEach((fare) => {
                    myState.passengers.forEach((px) => {
                        px.upgradeFare.forEach((fr) => {

                            if (fr.airline === fare.carrier && fr.option === fare.fareName) {
                                fare.count++
                            }
                        });
                    });
                });

                return fares

            },
            getTotalPrice() {
                let myState = this.$store.state;
                let total = 0;


                let rate = 1;

                myState.currencyData.forEach((cur) => {
                    if (cur.trigram === myState.currency) {
                        rate = cur.rate;

                    }
                });


                myState.paxTypes.forEach((pax) => {
                    if (pax.count > 0) {
                        pax.convertedPrice = (pax.netPrice * rate).toFixed(2);
                        total += pax.convertedPrice * pax.count;
                    }
                });

                // upsales


                let fares = [];


                myState.upgradeFare.forEach((carrier) => {
                    carrier.options.forEach((opt) => {

                        opt.convertedPrice = (opt.price * rate).toFixed(2);

                        let newOption = {
                            carrier: carrier.carrier,
                            fareName: opt.name,
                            price: opt.convertedPrice,
                        }

                        fares.push(newOption);
                    });
                });

                fares.forEach((fare) => {
                    myState.passengers.forEach((px) => {
                        px.upgradeFare.forEach((fr) => {

                            if (fr.airline === fare.carrier && fr.option === fare.fareName) {
                                total += parseFloat(fare.price);
                            }
                        });
                    });
                });


                total = total.toFixed(2);

                return total;
            }

        }
    }
</script>

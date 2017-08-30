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


                            </div>
                        </div>


                        <br>
                        <div class="row">
                            <div class="col-md-12">

                                <h3> Total Price : {{getTotalPrice}} {{getCurrency}} </h3>

                            </div>
                        </div>


                        <br>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <select v-model="selectedCurrency" @change="changeCurrency" class="form-control">
                                    <option v-for="option in getCurrencies" v-bind:value="option.trigram">
                                        {{ option.trigram }}
                                    </option>
                                </select>
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
        data() {
            return {
                selectedCurrency: ''
            }
        },
        computed: {
            appState() {
                return this.$store.state
            },
            getCurrencies() {
                return this.$store.state.currencyData
            },
            getCurrency() {
                return this.$store.state.currency
            },

            getTotalPrice() {
                let myState = this.$store.state;
                let total = 0;

                let rate = myState.currentRate;


                myState.paxTypes.forEach((pax) => {
                    if (pax.count > 0) {
                        pax.convertedPrice = (pax.netPrice * rate).toFixed(2);
                        total += pax.convertedPrice * pax.count;
                    }
                });

                // upales


                // bags
                myState.passengers.bags.forEach( (bg) => {

                   total+= (bg.price * bg.count);
                });

                total = total.toFixed(2);

                return total;
            }

        },
        methods: {
            changeCurrency(currency) {
                console.log('Navbar Component', this.selectedCurrency);
                this.$store.commit('changeCurrency', this.selectedCurrency);

            }
        }
    }
</script>

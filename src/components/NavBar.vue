<template>
    <div class="NavBar">

        <nav class="navbar  navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#"> VueOTASPA.js<img class="vueLogo" src="../assets/logo.png"> </a>

                <ul> Choose your currency
                    <select v-model="selectedCurrency" @change="changeCurrency" class="form-control">
                        <option v-for="option in getCurrencies" v-bind:value="option.trigram">
                            {{ option.trigram }}
                        </option>
                    </select>
                </ul>


            </div>

        </nav>


    </div>
</template>

<script>
    export default {
        computed: {
            getCurrencies() {
                return this.$store.state.currencyData
            }
        },
        data() {
            return {
                selectedCurrency: ''
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


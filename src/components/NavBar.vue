<template>
    <div class="NavBar">

        <nav class="navbar  navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#"> VueOTASPA.js<img class="vueLogo" src="../assets/logo.png"> </a>

                <ul>{{getCurrency}}</ul>

                <ul> Choose your currency
                    <select v-model="selectedCurrency" @change="changeCurrency" class="form-control">
                        <option value="EUR">EUR</option>
                        <option value="CHF">CHF</option>
                        <option value="INF">Infant</option>
                    </select>
                </ul>


            </div>

        </nav>


    </div>
</template>

<script>
    export default {
        computed: {
            getCurrency() {
                return this.$store.state.currency
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


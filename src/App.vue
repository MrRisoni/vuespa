<template>


    <div id="app">
        <div class="container-fluid">


            <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"> <img class="vueLogo" src="./assets/logo.png"> </a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>



            <router-view></router-view>
        </div>
    </div>
    <!-- the master tpl file -->
</template>


<script>


    export default {
        name: 'app',
        methods: {
            clickAddLuggage(passengerid) {
                console.log('Bag Carrier Compo ' + this.passengerid);
                this.$store.commit('addBaggage', this.passengerid);
            }
        }
    }
</script>

<style>


    .vueLogo {
        width: 15%;
        height: auto;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: auto;
        height: 75px;
    }

</style>

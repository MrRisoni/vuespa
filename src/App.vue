<template>



    <div id="app">
        <div class="container-fluid">
            <img class="vueLogo" src="./assets/logo.png">
            <router-view></router-view>
        </div>
    </div>
    <!-- the master tpl file -->
</template>


<script>


    export default {
        name: 'app'
    }
</script>

<style>


    .vueLogo {
        width: 3%;
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

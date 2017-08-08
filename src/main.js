// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'




require('../node_modules/bootstrap/less/bootstrap.less')

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        passnegers: [
            {
                id : 1,
                type : 'ADT'
            },
            {
                id : 2,
                type: 'ADT'
            },
            {
                id : 3,
                type: 'CNN'
            }
        ],
        count: 0,
        bags : 12,
        depAirport : 'RHO',
        arrAirport: 'LHR',
        upsales : [
            {
                id : 1,
                title : 'SMS',
                price : 1.5
            },
            {
                id: 2,
                title: 'Web check-in',
                price: 3
            }
        ],
        insuranceInfo: [
            {
                id: 1,
                title: "No insurance",
                price: 0
            },
            {
                id: 2,
                title: "Globy Classic",
                price: 13.56
            },
            {
                id: 3,
                title: "Globy Cancellation",
                price: 25.68
            },
            {
                id: 4,
                title: "Globy Schengen",
                price: 39.45
            }
        ],
        bagAllowance : [
            {
                carrier: 'FR',
                maxBags :3,
                bags: [
                    {
                        id : 1,
                        title : '15KG',
                        price : 12
                    },
                    {
                        id : 2,
                        title : '25KG',
                        price : 35
                    }
                ]
            },
            {
                carrier: 'A3',
                maxBags :2,
                bags: [
                    {
                        id : 1,
                        title : '12KG',
                        price : 12
                    },
                    {
                        id : 2,
                        title : '25KG',
                        price : 18
                    }
                ]
            },
            {
                carrier: 'BA',
                maxBags :2,
                bags: [
                    {
                        id : 1,
                        title : '22KG',
                        price : 15
                    },
                    {
                        id : 2,
                        title : '30KG',
                        price : 45
                    }
                ]
            }
        ],
        itinerary: {
            info: {
                departure: {
                    AirPortName: 'Diagoras Airport',
                    IATA: 'RHO',
                },
                return : {
                    AirPortName: 'Heathrow Intl Airport',
                    IATA: 'LHR'
                },
                stops: 2,
                wait :'3h 50m',
                duration :'6h 20m'
            },
            outbound: [
                {
                    fromCity: 'Rhodes',
                    toCity: 'Athens',
                    fromAirport: 'RHO, Diagoras Airport',
                    toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                    duration: '00:50',
                    depDateTime: '10:10 Friday, 23 June 2017',
                    arrDateTime: '11:05 Friday, 23 June 2017',
                    airline: 'Ryanair',
                    code: 'FR',
                    waitTime: '01:20'
                },
                {
                    fromCity: 'Athens',
                    toCity: 'Paris',
                    fromAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                    toAirport: 'CDG, Paris Intl Arp',
                    duration: '02:30',
                    depDateTime: '18:20 Friday, 23 Jun 2017',
                    arrDateTime: '20:05 Friday, 23 Jun 2017',
                    airline: 'Aegean',
                    code: 'A3',
                    waitTime: ''
                },
                {
                    fromCity: 'Paris',
                    toCity: 'London',
                    fromAirport: 'CDG, Paris Intl Arpt',
                    toAirport: 'LHR, London Intl Arpt',
                    duration: '02:30',
                    depDateTime: '18:20 Friday, 23 Jun 2017',
                    arrDateTime: '20:05 Friday, 23 Jun 2017',
                    airline: 'British Airways',
                    code: 'BA',
                    waitTime: ''
                }
            ], inbound: [
                {
                    fromCity: 'London',
                    toCity: 'Athens',
                    fromAirport: 'LHR, London Intl Arpt',
                    toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                    duration: '02:30',
                    depDateTime: '18:20 Freitag, 29 Jun 2017',
                    arrDateTime: '20:05 Freitag, 29 Jun 2017',
                    airline: 'Ryanair',
                    code: 'FR',
                    waitTime: ''
                },
                {
                    fromCity: 'Athens',
                    toCity: 'Rhodes',
                    fromAirport: 'Rhodes Colossus Airport',
                    toAirport: 'ATH, Eleftherios Venizelos Intl Arpt',
                    duration: '00:50',
                    depDateTime: '10:10 Freitag, 30 Jun 2017',
                    arrDateTime: '11:05 Freitag, 30 Jun 2017',
                    airline: 'Aegean',
                    code: 'A3',
                    waitTime: '14:00'
                }
            ]

        }
    },
    mutations: {
        increment (state) {
            state.bags++
        }
    }
})


sync(store, router)



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},

})



import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import carResults from './dummyResults/carResults.json'

const store = new Vuex.Store({
    state: {
        carResults : carResults,
        currencyData: [
            {
                trigram: 'EUR',
                rate: 1
            },
            {
                trigram: 'JPY',
                rate: 129.30
            },
            {
                trigram: 'MXN',
                rate: 20.98
            },
            {
                trigram: 'HRK',
                rate: 7.39
            },
            {
                trigram: 'RON',
                rate: 4.57
            },
            {
                trigram: 'ILS',
                rate: 4.22
            },
            {
                trigram: 'AZN',
                rate: 2.01
            },
            {
                trigram: 'CLP',
                rate: 762.92
            },
            {
                trigram: 'PHP',
                rate: 60.34
            },
            {
                trigram: 'USD',
                rate: 1.17
            },
            {
                trigram: 'NOK',
                rate: 9.36
            },
            {
                trigram: 'CHF',
                rate: 1.14
            },
            {
                trigram: 'GBP',
                rate: 0.90
            },
            {
                trigram: 'DKK',
                rate: 7.43
            },
            {
                trigram: 'SEK',
                rate: 9.57
            }
        ],
        currency: 'EUR',
        paxTypes: [
            {
                type: 'ADT',
                name: 'Adults',
                count: 2,
                netPrice: 356,
                convertedPrice: 356

            },
            {
                type: 'CNN',
                name: 'Children',
                count: 1,
                netPrice: 275,
                convertedPrice: 275

            },
            {
                type: 'INF',
                name: 'Infant',
                count: 0,
                netPrice: 164,
                convertedPrice: 164
            }
        ],
        passengers: [{
            id: 1,
            type: 'ADT',
            upgradeFare: [
                {
                    airline: 'FR',
                    option: '',
                },
                {
                    airline: 'A3',
                    option: '',
                },
                {
                    airline: 'BA',
                    option: '',
                }
            ],
            bags: [
                {
                    route: 'ATH-LHR',
                    types: []
                },
                {
                    route: 'LHR-ATH',
                    types: []
                }
            ]
        },
            {
                id: 2,
                type: 'ADT',
                upgradeFare: [
                    {
                        airline: 'FR',
                        option: '',
                    },
                    {
                        airline: 'A3',
                        option: '',
                    },
                    {
                        airline: 'BA',
                        option: '',
                    }
                ],
                bags: [
                    {
                        route: 'ATH-LHR',
                        types: []
                    },
                    {
                        route: 'LHR-ATH',
                        types: []
                    }
                ]
            },
            {
                id: 3,
                type: 'CNN',
                upgradeFare: [
                    {
                        airline: 'FR',
                        option: '',
                    },
                    {
                        airline: 'A3',
                        option: '',
                    },
                    {
                        airline: 'BA',
                        option: '',
                    }
                ],
                bags: [
                    {
                        route: 'ATH-LHR',
                        types: []
                    },
                    {
                        route: 'LHR-ATH',
                        types: []
                    }
                ]
            }
        ],
        count: 0,
        bags: 12,
        depAirport: 'RHO',
        arrAirport: 'LHR',
        upsales: [{
            id: 1,
            title: 'SMS',
            price: 1.5
        },
            {
                id: 2,
                title: 'Web check-in',
                price: 3
            }
        ],
        insuranceInfo: [{
            id: 1,
            title: "No insurance",
            price: 0,
            convertedPrice: 0
        },
            {
                id: 2,
                title: "Globy Classic",
                price: 5.16,
                convertedPrice: 5.16
            },
            {
                id: 3,
                title: "Globy Cancellation",
                price: 15.68,
                convertedPrice: 15.68
            },
            {
                id: 4,
                title: "Globy Schengen",
                price: 22.15,
                convertedPrice: 22.15
            }
        ],
        bagAllowance: [{
            carrier: 'FR',
            maxBags: 3,
            bags: [{
                id: 1,
                title: '119 × 119 × 81 cm, 23 kg',
                price: 12
            },
                {
                    id: 2,
                    title: '25KG',
                    price: 35
                }
            ]
        },
            {
                carrier: 'A3',
                maxBags: 2,
                bags: [{
                    id: 1,
                    title: '12KG',
                    price: 12
                },
                    {
                        id: 2,
                        title: '25KG',
                        price: 18
                    }
                ]
            },
            {
                carrier: 'BA',
                maxBags: 2,
                bags: [{
                    id: 1,
                    title: '22KG',
                    price: 15
                },
                    {
                        id: 2,
                        title: '30KG',
                        price: 45
                    }
                ]
            }
        ],
        upgradeFare: [{
            carrier: "FR",
            options: [
                {
                    id: 1,
                    name: 'Light',
                    convertedPrice: 0,
                    price: 0,
                    packages: [{
                        title: 'cancellation'
                    }]
                }
            ]
        },
            {
                carrier: "A3",
                options: [{
                    id: 1,
                    name: 'Light',
                    convertedPrice: 0,
                    price: 0,
                    packages: [{
                        title: 'cancellation'
                    }]
                },
                    {
                        id: 2,
                        name: 'Flex',
                        convertedPrice: 0,
                        price: 0,
                        packages: [{
                            title: 'wifi'
                        }]
                    }
                ]
            },
            {
                carrier: "BA",
                options: [{
                    id: 1,
                    name: 'Basic',
                    convertedPrice: 0,
                    price: 0,
                    packages: [
                        {
                            title: 'Hand baggage',
                            status: 'notincl'
                        },
                        {
                            title: 'Checked baggage',
                            status: 'notincl'
                        },
                        {
                            title: 'Wifi',
                            status: 'notincl'
                        }
                        ,
                        {
                            title: 'Priority Boarding',
                            status: 'notincl'
                        },
                        {
                            title: 'Lounge Access',
                            status: 'notincl'
                        },
                        {
                            title: 'Cancellation',
                            status: 'notincl'
                        },
                        {
                            title: 'Amendment',
                            status: 'notincl'
                        }]
                },
                    {
                        id: 2,
                        name: 'Basic Plus',
                        convertedPrice: 10,
                        price: 10,
                        packages: [
                            {
                                title: 'Hand baggage',
                                status: 'free'
                            },
                            {
                                title: 'Checked baggage',
                                status: 'free'
                            },
                            {
                                title: 'Wifi',
                                status: 'notinlc'
                            },
                            {
                                title: 'Cancellation',
                                status: 'fee'
                            },
                            {
                                title: 'Priority Boarding',
                                status: 'notinlc'
                            },
                            {
                                title: 'Lounge Access',
                                status: 'notinlc'
                            },
                            {
                                title: 'Amendment',
                                status: 'notinlc'
                            }]
                    },
                    {
                        id: 3,
                        name: 'Economy Premium',
                        convertedPrice: 0,
                        price: 30,
                        packages: [
                            {
                                title: 'Hand baggage',
                                status: 'free'
                            },
                            {
                                title: 'Checked baggage',
                                status: 'free'
                            },
                            {
                                title: 'Wifi',
                                status: 'free'
                            },
                            {
                                title: 'Cancellation',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Priority Boarding',
                                status: 'free'
                            },
                            {
                                title: 'Lounge Access',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Cancellation',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Amendment',
                                status: 'free'
                            }]
                    },
                    {
                        id: 4,
                        name: 'Economy Lux',
                        convertedPrice: 0,
                        price: 40,
                        packages: [
                            {
                                title: 'Hand baggage',
                                status: 'free'
                            },
                            {
                                title: 'Checked baggage',
                                status: 'free'
                            },
                            {
                                title: 'Wifi',
                                status: 'free'
                            },
                            {
                                title: 'Cancellation',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Priority Boarding',
                                status: 'free'
                            },
                            {
                                title: 'Lounge Access',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Cancellation',
                                status: 'free'
                            }
                            ,
                            {
                                title: 'Amendment',
                                status: 'free'
                            }]
                    }
                ]
            }
        ],
        outboundCarriers: ['FR', 'A3', 'BA'],
        inboundCarriers: ['FR', 'A3'],
        carriers: ['FR', 'A3', 'BA'],
        itinerary: {
            info: {
                departure: {
                    AirPortName: 'Diagoras Airport',
                    IATA: 'RHO',
                },
                return: {
                    AirPortName: 'Heathrow Intl Airport',
                    IATA: 'LHR'
                },
                stops: 2,
                wait: '3h 50m',
                duration: '6h 20m'
            },
            outbound: [{
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
            ],
            inbound: [{
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
        increment(state) {
            state.bags++
        },
        addPassenger(state) {

            let papCount = state.passengers.length + 1;

            let new_pap = {
                id: papCount,
                type: 'ADT',
                upgradeFare: [
                    {
                        airline: 'FR',
                        option: '',
                    },
                    {
                        airline: 'A3',
                        option: '',
                    },
                    {
                        airline: 'BA',
                        option: '',
                    }
                ],
                bags: [
                    {
                        route: 'ATH-LHR',
                        types: []
                    },
                    {
                        route: 'LHR-ATH',
                        types: []
                    }
                ]
            }

            state.passengers.push(new_pap)

            state.paxTypes[0].count++;
        },
        addBaggage(state, passengerid) {
            let newbag = {
                carrier: 'FR',
                title: '119 × 119 × 81 cm, 23 kg'
            }

            console.log('store.js addBaggage');
            console.log(passengerid);

            console.log(newbag)
            state.passengers[passengerid - 1].bags[0].types.push(newbag);
        },
        changePaxType(state, args) {
            console.log('changePaxType');
            console.log(args);
            state.passengers[args.psgrid].type = args.type;

            state.paxTypes.forEach((px) => {
                let count = 0;
                state.passengers.forEach((ps) => {
                    if (ps.type === px.type) {
                        count++;
                    }
                });
                px.count = count;
            });

        },
        changeCurrency(state, newCurrency) {
            state.currency = newCurrency;
        },
        upgradeMyFare(state, args) {
            console.log('Upgrade My Fare');
            console.log(args);
            state.passengers[args.psgrid].upgradeFare.forEach((carrier) => {
                if (carrier.airline === args.carrier) {
                    // set selection
                    carrier.option = args.selection;
                }

            });
        }
    }
})


export default store;
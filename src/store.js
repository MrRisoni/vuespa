import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import carResults from './dummyResults/carResults.json'

const store = new Vuex.Store({
    state: {
        carResults : carResults,
        carIndex: 0,
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
        currentRate: 1,
        paxTypes: [
            {
                type: 'ADT',
                name: 'Adults',
                count: 1,
                netPrice: 356,
                convertedPrice: 356

            },
            {
                type: 'CNN',
                name: 'Children',
                count: 0,
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
            id: 0,
            humanID:1,
            type: 'ADT',
            active: true,
            totalBags: 0,
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
            price: 1.5,
            convertedPrice: 0

        },
            {
                id: 2,
                title: 'Web check-in',
                price: 3,
                convertedPrice: 0

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
                key: 'yN55XxTVMcil',
                title: '119 × 119 × 81 cm, 23 kg',
                price: 12,
                convertedPrice: 12
            },
                {
                    id: 2,
                    key: '5IZ9wcvsCk7M',
                    title: '25KG',
                    price: 35,
                    convertedPrice: 35
                }
            ]
        },
            {
                carrier: 'A3',
                maxBags: 2,
                bags: [{
                    id: 1,
                    key: '6WrQenE5YDx8',
                    title: '12KG',
                    price: 12,
                    convertedPrice: 12
                },
                    {
                        id: 2,
                        key: '3gYBemf65x2E',
                        title: '25KG',
                        price: 18,
                        convertedPrice: 18
                    }
                ]
            },
            {
                carrier: 'BA',
                maxBags: 2,
                bags: [{
                    id: 1,
                    title: '22KG',
                    key: 'KzV68IqmoSTs',
                    price: 15,
                    convertedPrice: 15
                },
                    {
                        id: 2,
                        key: 'M77kWAtZjDAS',
                        title: '30KG',
                        price: 45,
                        convertedPrice: 45
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

            let activePapCount = 0;

            state.passengers.forEach( (pap) => {
                if (pap.active) {
                    activePapCount++;
                }
            });

            let new_pap = {
                id: state.passengers.length,
                type: 'ADT',
                humanID: activePapCount,
                active: true,
                totalBags: 0,
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
        addBaggage(state, args) {

               let added_bag_type = {count: 1, carrier: args.carrier,
                                title:'',
                                price: 0,
                                id:0,
                                leg:args.leg,
                                key: args.key};


           console.log('arguments');
           console.log(args);
            let maxNumber = 0;

            state.bagAllowance.forEach((bgl) => {

                if (bgl.carrier === added_bag_type.carrier) {

                    maxNumber = bgl.maxBags;

                    bgl.bags.forEach((bg) => {
                        // console.log(bg);
                        if (bg.key === args.key) {
                            added_bag_type.title = bg.title;
                            added_bag_type.key = bg.key;
                            added_bag_type.price = parseFloat(bg.convertedPrice).toFixed(2);
                        }
                    });
                }
            });


            // count the number of bags for this specific carrier

            let current_count =0;
            state.passengers[args.passengerid].bags[args.leg].types.forEach( (bag) => {
                if (bag.carrier === args.carrier) {
                    current_count = bag.count;
                }
            });

            console.log('currenct-count' + current_count + ' max number' + maxNumber);
            if (current_count < maxNumber) {

                let pos = -1;
                state.passengers[args.passengerid].bags[args.leg].types.forEach((bag, idx) => {
                    if (bag.key === added_bag_type.key) {
                        pos = idx;
                    }
                });

                state.passengers[args.passengerid].totalBags++;

                if (pos < 0) {
                    // first time passenger buys this type
                    state.passengers[args.passengerid].bags[args.leg].types.push(added_bag_type);
                }
                else {
                    state.passengers[args.passengerid].bags[args.leg].types[pos].count++;
                }
            }
            /*
            else {
                //reached maximum number of allowed bags for this leg
            }*/

            console.log(state.passengers[args.passengerid].bags);
            console.log('bags of passenger ' + args.passengerid);

            let much = 0;
            state.passengers[args.passengerid].bags.forEach( (leg) => {
                leg.types.forEach( (bag) => {
                    much+= bag.count;
                })
            });



        },
        removeBag(state,args) {

            state.passengers[args.passengerid].bags[args.leg].types.forEach((bgl) => {

                if (bgl.key === args.key) {
                    bgl.count--;
                    if (bgl.count < 0) {
                        bgl.count = 0;
                    }
                }

            });
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

            state.currencyData.forEach( ( cur) => {
                if (cur.trigram === newCurrency){
                    state.currentRate = cur.rate;
                }
            });

            //recalculate prices in results
           state.carResults.forEach( (cr) => {
              cr.convertedPrice = cr.pricePerDay  * state.currentRate;
              cr.convertedPrice = cr.convertedPrice.toFixed(2);
           });

           state.bagAllowance.forEach( (carrier) => {

               carrier.bags.forEach( (bg) => {
                  bg.convertedPrice = bg.price *  state.currentRate;
                  bg.convertedPrice = bg.convertedPrice.toFixed(2);
               });
           });

           state.upgradeFare.forEach( (carrier) => {
              carrier.options.forEach( (opt) => {
                    opt.convertedPrice = opt.price* state.currentRate;

                    opt.convertedPrice = opt.convertedPrice.toFixed(2);
              });
           });

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
        },
        nextCar(state){
            state.carIndex++;
            if (state.carIndex === state.carResults.length) {
                state.carIndex =0;
            }
        },
        previousCar(state){
            state.carIndex--;
            if (state.carIndex < 0) {
                state.carIndex =0;
            }
        }
    }
})


export default store;
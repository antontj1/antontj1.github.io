
$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination', // id of chart wrapper
            data: {
                columns: [
                    ['data1', 34,197,181,401, 68],
                    ['data2', 10,188,221,424, 60],
                    ['data3',  0,142,164,212, 21],
                    ['data4',  3,143,150,250, 10],
                    ['data5', 20, 80,197,244, 17],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data1': '#1d37c9',
                    'data2': '#00a1e6',
                    'data3': '#e6a400',
                    'data4': '#7595ff',
                    'data5': '#18dcab'
                },
                names: {
                    // name of each serie
                    'data1': 'ADS',
                    'data2': 'GS',
                    'data3': 'SC',
                    'data4': 'RID',
                    'data5': 'RG'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['2017','2018','2019','2020', '2021']
                },
            },
            bar: {
                width: 10
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
            grid: {
                y: {
                lines: [
                    {value: 50},
                    {value: 100},
                    {value: 150},
                    {value: 200},
                    {value: 250},
                    {value: 300},
                    {value: 350},
                    {value: 400},
                ]
                }
            },
        });
    });

});

$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination2', // id of chart wrapper
            data: {
                columns: [
                    ['ADS', 1000,375,300,87,35,21,17,12,9,7,6,5,4,2,1,1,1,0,0,0,0,0,0,0,0],
                    ['GS' , 1000,399,315,90,32,22,14,11,8,7,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0],
                    ['SC' , 1000,248,190,43,19,14,11, 8,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                    ['RID', 1000,264,196,40,21,12, 8, 6,3,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0],
                ],
                type: 'line', // default type of chart
                colors: {
                    'ADS': '#1d37c9',
                    'GS': '#00a1e6',
                    'SC': '#e6a400',
                    'RID': '#7595ff',
                },
            },
            axis: {
                x: {
                    max: 18,
                    min: 0.5,
                },
                y: {
                    max: 30,
                    min: 2,
                },
            },
            grid: {
                x: {
                lines: [
                    {value: 8, text: 'ADS/GS h-Index = 8'},
                    {value: 7},
                    {value: 6},
                ]
                },
                y: {
                lines: [
                    {value: 8, text: 'min. citation = 8'},
                    {value: 7},
                    {value: 6},
                ]
                }
            },
        });
    });

});

$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination3', // id of chart wrapper
            data: {
                columns: [
                    ['data1', 883],
                    ['data2', 908],
                    ['data3', 541],
                    ['data4', 558],
                    ['data5', 559],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data1': '#1d37c9',
                    'data2': '#00a1e6',
                    'data3': '#e6a400',
                    'data4': '#7595ff',
                    'data5': '#18dcab'
                },
                names: {
                    // name of each serie
                    'data1': 'ADS',
                    'data2': 'GS',
                    'data3': 'SC',
                    'data4': 'RID',
                    'data5': 'RG'
                }

            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['']
                },
            },
            bar: {
                width: 40
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
            grid: {
                y: {
                lines: [
                    {value: 100},
                    {value: 200},
                    {value: 300},
                    {value: 400},
                    {value: 500},
                    {value: 600},
                    {value: 700},
                    {value: 800},
                ]
                }
            },
        });
    });

});

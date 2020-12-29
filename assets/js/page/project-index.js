
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
                    ['data1', 34,197,181,420, 18],
                    ['data2',  9,186,226,439,  0],
                    ['data3',  0,142,164,199,  3],
                    ['data4',  3,143,150,229,  0],
                    ['data5', 14, 66,187,229,  0],
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
                    ['ADS', 1000,365,293,81,35,21,15, 9,7,6,5,5,5,2,1,1,1,0,0,0,0,0,0,0,0],
                    ['GS', 1000,385,308,83,31,21,14,10,5,4,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
                    ['SC', 1000,236,181,35,19,14, 9, 8,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                    ['RID', 1000,255,188,33,20, 11, 8, 5,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                ],
                type: 'scatter', // default type of chart
                colors: {
                    'ADS': '#1d37c9',
                    'GS': '#00a1e6',
                    'SC': '#e6a400',
                    'RID': '#7595ff',
                },
            },
            axis: {
                x: {
                    max: 25,
                    min: 0.5,
                },
                y: {
                    max: 350,
                    min: 31,
                },
            },
            grid: {
                x: {
                lines: [
                    {value: 7, text: 'h-Index = 7'},
                ]
                },
                y: {
                lines: [
                    {value: 7, text: 'min. citation = 7'},
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
                    ['data1', 852],
                    ['data2', 868],
                    ['data3', 510],
                    ['data4', 527],
                    ['data5', 501],
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


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
                    ['data1', 34,197,182,304,381],
                    ['data2',  9,185,228,347,403],
                    ['data3',  0,142,168,235,154],
                    ['data4',  3,143,150,252,186],
                    ['data5', 21, 81,217,391,281],
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
                    {value: 250},
                    {value: 500},
                    {value: 750},
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
                    ['ADS', 1000,447,345,134,42,40,23,21,13,8,6,6,6,3,2,1,1,1,1,0,0,0,0,0,0],
                    ['GS' , 1000,487,375,148,39,27,26,24,14,11,9,6,4,2,2,1,1,1,1,1,0,0,0,0,0],
                    ['RG' , 1000,401,265,162,47,32,23,18,10,9,8,4,2,2,1,1,1,1,0,0,0,0,0,0,0],
                    ['SC' , 1000,313,222,79,25,20,14,10,7,5,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0],
                    ['RID', 1000,318,227,92,28,18,12,10,7,7,7,5,2,1,1,1,0,0,0,0,0,0,0,0,0],
                ],
                type: 'line', // default type of chart
                colors: {
                    'ADS': '#1d37c9',
                    'GS': '#00a1e6',
                    'RG': '#18dcab',
                    'SC': '#e6a400',
                    'RID': '#7595ff', 
                },
            },
            axis: {
                x: {
                    max: 24,
                    min: 0.4,
                },
                y: {
                    max: 15,
                    min: 1.3,
                },
            },
            grid: {
                x: {
                lines: [
                    {value: 9, text: 'h-i = 9'},
                ]
                },
                y: {
                lines: [
                    {value: 9},
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
                    ['data2', 1178],
                    ['data1', 1100],
                    ['data5', 992],
                    ['data4', 736],
                    ['data3', 701],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data2': '#00a1e6',
                    'data1': '#1d37c9',
                    'data5': '#18dcab',
                    'data4': '#7595ff',
                    'data3': '#e6a400',
                },
                names: {
                    // name of each serie
                    'data2': 'GS',
                    'data1': 'ADS',
                    'data5': 'RG',
                    'data4': 'RID',
                    'data3': 'SC',    
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
                    {value: 500},
                    {value: 1000},
                ]
                }
            },
        });
    });

});

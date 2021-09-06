
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
                    ['data1', 34,197,178,304,404,1119],
                    ['data2',  9,187,228,343,433,1206],
                    ['data3',  0,142,168,235,172, 719],
                    ['data4',  3,143,150,252,180, 730],
                    ['data5', 21, 81,217,391,308,1020],
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
                    categories: ['2017','2018','2019','2020', '2021', 'total']
                },
            },
            bar: {
                width: 7
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
                    {value:1000},
                    {value:1250},
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
                    ['ADS', 1000,451,349,140,43,41,24,21,14, 8,6,6,6,4,2,1,1,1,1,0,0],
                    ['GS' , 1000,496,384,153,39,30,27,24,14,11,9,6,4,3,2,1,1,1,1,1,0],
                    ['RG' , 1000,412,270,170,47,32,23,20,10, 9,8,4,2,2,1,1,1,1,0,0,0],
                    ['SC' , 1000,319,228, 83,26,20,14,10, 7, 5,3,2,1,1,0,0,0,0,0,0,0],
                    ['RID', 1000,311,223, 95,28,18,12,10, 9, 7,7,5,2,1,1,1,0,0,0,0,0],
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


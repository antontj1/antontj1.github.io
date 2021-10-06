
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
                    ['data3',  0,147,168,240,193, 750],
                    ['data4',  3,143,150,252,194, 744],
                    ['data5', 21, 81,217,391,362,1074],
                    ['data1', 34,197,178,300,452,1163],
                    ['data2',  9,187,228,344,491,1265],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data3': '#e6a400',
                    'data4': '#7595ff',
                    'data5': '#18dcab',
                    'data1': '#1d37c9',
                    'data2': '#00a1e6',
                },
                names: {
                    'data3': 'SC',
                    'data4': 'RID',
                    'data5': 'RG',
                    'data1': 'ADS',
                    'data2': 'GS',
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
                    ['ADS', 1000,469,355,151,48,42,24,22,15, 8,7,6,6,4,2,1,1,1,1,0,0],
                    ['GS' , 1000,515,395,167,42,37,28,25,14,13,9,7,4,3,2,1,1,1,1,1,0],
                    ['RG' , 1000,426,280,183,49,33,29,24,12, 9,8,4,2,2,1,1,1,1,0,0,0],
                    ['SC' , 1000,329,234, 89,28,21,15,10, 8, 6,5,2,1,1,1,0,0,0,0,0,0],
                    ['RID', 1000,311,223,100,30,19,13,10,10, 8,8,6,2,1,1,1,1,0,0,0,0],
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


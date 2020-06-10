
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
                    // each columns data
                    ['data1', 0,1,1,34,197,204,181],
                    ['data2', 4,2,0,8,189,238,173],
                    ['data3', 0,2,0,0,142,164,63],
                    ['data4', 0,1,1,3,143,146,67],
                    ['data5', 2,0,0,12,66,190,72],
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
                    categories: ['2014','2015','2016','2017','2018','2019','2020']
                },
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });

});
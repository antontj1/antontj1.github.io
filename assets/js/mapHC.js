Highcharts.getJSON('https://raw.githubusercontent.com/antontj1/antontj1.github.io/master/assets/maps/telescopes.json?callback=?', function (data) {
//Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json', function (data) {

  Highcharts.mapChart('container', {
    chart: {
      borderWidth: 1,
      map: 'custom/world'
    },

    title: {
      text: 'Optic telescopes around the world'
    },

    subtitle: {
      text: ''
    },

    legend: {
      enabled: false
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    series: [{
      name: 'Countries',
      color: '#E0E0E0',
      enableMouseTracking: false
    }, {
      type: 'mapbubble',
      name: 'updated by 2020',
      joinBy: ['iso-a3', 'code3'],
      data: data,
      minSize: 0,
      maxSize: '12%',
      tooltip: {
        pointFormat: '{point.properties.hc-a2}: {point.z} meter'
      }
    }]
  });
});

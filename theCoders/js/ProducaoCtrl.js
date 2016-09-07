
  angular
    .module('app')
    .controller('ProducaoCtrl',ProducaoCtrl)

function ProducaoCtrl() {
  var vm = this;
  vm.lstService = [
    {desc:"Febres tifóide e paratifóide",cliente:"Fernando da silva",data:"2016-01-10",valor:150},
    {desc:"Outras infecções por Salmonella",cliente:"Fernando da Donizete",data:"2016-01-10",valor:200},
    {desc:"Shiguelose",cliente:"Jozimar da silva",data:"2016-01-10",valor:4000},
    {desc:"Outras intoxicações alimentares bacterianas",cliente:"Crislaine fatma Aparecida",data:"2016-01-10",valor:350},
    {desc:"Infecções intestinais virais",cliente:"Henrique Craveiro",data:"2016-01-10",valor:900}

  ]




  function init () {
    var d = new Date();
    var month = new Array();
    month[0] = "Janeiro";
    month[1] = "Fevereiro";
    month[2] = "Março";
    month[3] = "Abril";
    month[4] = "Maio";
    month[5] = "Junho";
    month[6] = "Julho";
    month[7] = "Agosto";
    month[8] = "Setembro";
    month[9] = "Outubro";
    month[10] = "Novembro";
    month[11] = "Dezembro";
    var n = month[d.getMonth()];

    var area = Morris.Line({
      element: 'area',
      data: [
        { y: '2016-01', a: 100, b: 90 },
        { y: '2016-02', a: 50,  b: 65 },
        { y: '2016-03', a: 100, b: 75 },
        { y: '2016-04', a: 75,  b: 75 },
        { y: '2016-05', a: 100, b: 75 },
        { y: '2016-06', a: 25,  b: 50 },
        { y: '2016-07', a: 50, b: 60 },
        { y: '2016-08', a: 25 },
        { y: '2016-09', a: 75 },
        { y: '2016-10', a: 100 },
        { y: '2016-11', a: 50 },
        { y: '2016-12', a: 75 },
      ],
      hideHover: true,
      xkey: 'y',
      ykeys: ['a', 'b'],
      xLabels:"month",
      xLabelFormat: function(d) {
         return month[d.getMonth()];
       },
      labels: ['2015', '2016']
    });

    var line = Morris.Line({
      element: 'line',
      data: [
        { y: '2016-06-01', a: 100 },
        { y: '2016-06-04', a: 75 },
        { y: '2016-06-09', a: 50 },
        { y: '2016-06-15', a: 75 },
        { y: '2016-06-20', a: 50 },
        { y: '2016-06-25', a: 75 },
        { y: '2016-06-30', a: 100 }
      ],
      xLabels:"week",
      xLabelFormat: function(d) {
         return d.getDate();
       },
      mouseHoverPoint:false,
      xkey: 'y',
      ykeys: ['a'],
      labels: ['Series A']
    });
  }

  init();
}

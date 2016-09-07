
  angular
    .module('app')
    .controller('HomeCtrl',HomeCtrl)

  function HomeCtrl($scope) {

    function init() {
      var Area =  new Morris.Bar({
        element: 'myfirstchart',
        resize: true,
        data: [
          {y: '2012', item1: 319},
          {y: '2013', item1: 382},
          {y: '2014', item1: 443},
          {y: '2015', item1: 503}
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Faturamento'],
        barColors: ['#00a65a'],
        hideHover: 'auto'
      });


      var bar =  new Morris.Bar({
        element: 'GraficoBarra',
        data: [
          { y: 'TI', a: 100000, b: 900000 },
          { y: 'Comunidade', a: 80000,  b: 450000 },
          { y: 'Marketing', a: 90000,  b: 350000 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        barColors: ['#00a65a', '#58e0a2'],
        labels: ['Investimento', 'Retorno'],
        hideHover: 'auto'
      });

      var liquidez = new Morris.Line({
        element: 'liquidezChart',
        data: [
          {'y': '2012', 'a': 1.47, 'b': 2.04},
          {'y': '2013', 'a': 1.34, 'b': 1.95},
          {'y': '2014', 'a': 1.34, 'b': 2.02},
          {'y': '2015', 'a': 1.27, 'b': 2.09}
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Liquidez Geral', 'Liquidez Corrente'],
        hideHover: 'auto'
      });

      var numerClientes =  new Morris.Bar({
        element: 'numeroClientes',
        resize: true,
        data: [
          {y: '2012', item1: 160.425},
          {y: '2013', item1: 175.451},
          {y: '2014', item1: 181.293},
          {y: '2015', item1: 175.382}
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Número de clientes'],
        barColors: ['#00a65a'],
        hideHover: 'auto'
      });
    }

    init();
  }

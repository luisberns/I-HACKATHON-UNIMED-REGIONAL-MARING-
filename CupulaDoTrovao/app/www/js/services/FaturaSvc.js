/*global escape: true */
'use strict';

/**
 * @ngdoc service
 * @name professor3App.BaseSvc
 * @description
 * # BaseSvc
 * Factory in the professor3App.
 */
angular.module('starter')
  .factory('FaturaSvc', ['BaseSvc',function (BaseSvc) {
      // Service logic
      // ...
      var retornaListaFaturasFn = function(procedimentosRealizados){
          var faturas = new Array();
          for(var i = 0; i < 12; i++)
          {
              var listaLocal = procedimentosRealizados.filter(function(item){
                var d = new Date(item.data);
                var mes = d.getMonth();
                var dia = d.getUTCDate();
                return ((mes === i && dia <= BaseSvc.pegaDiaFechamentoFatura()) || (mes === (i - 1) && dia > BaseSvc.pegaDiaFechamentoFatura()));
              });

              if (listaLocal.length > 0)
              {
                  listaLocal.forEach(function(item){
                      item.data = new Date(item.data);
                  });
                  var mesVenc = BaseSvc.getDataFechamentoVencimentoMesFatura(new Date(listaLocal[listaLocal.length - 1].data));
                  var diaMens = new Date(mesVenc.fechamento);
                  diaMens.setDate(diaMens.getUTCDate() + 2);
                  diaMens.setMonth(diaMens.getMonth() - 1);
                  listaLocal.push({
                    data: diaMens,
                    id:40304361,
                    prestador:"Unimed Maringá",
                    procedimento:"Mensalidade",
                    valor:BaseSvc.getValorMensalidade()
                  });

                  listaLocal = listaLocal.sort(function(a,b){
                      return new Date(b.data) - new Date(a.data);
                  });
                  
                  faturas.push({
                      mes: mesVenc.mesAbrev,
                      procedimentos: listaLocal,
                      fechamento: mesVenc.fechamento,
                      vencimento: mesVenc.vencimento,
                      fechada: mesVenc.fechamento < new Date(),
                      total: listaLocal.reduce(function (a, b) {
                          return b.valor == null ? a : a + b.valor;
                      }, 0)
                  });
              }
          }

          faturas = faturas.sort(function(a,b){
              return b.vencimento - a.vencimento;
          });

          return faturas;
      };



      // Public API here
      return {
          retornaListaFaturas: function (procedimentosRealizados) {
              return retornaListaFaturasFn(procedimentosRealizados);
          }
      };
  }]);
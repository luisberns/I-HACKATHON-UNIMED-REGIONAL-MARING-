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
  .factory('BaseSvc', ['$http', '$window', function ($http, $window) {
      // Service logic
      // ...
      var calculaTimeDiff = function (data1, data2) {
          var diff = data1 - data2;
          var diffInDays = Math.floor((((diff / 1000) / 60) / 60) / 24);
          var diffInHours = Math.floor(((diff / 1000) / 60) / 60);
          var diffInMinutes = Math.floor((diff / 1000) / 60);
          var diffInSeconds = Math.floor(diff / 1000);

          var diffObject = { days: diffInDays, hours: diffInHours, minutes: diffInMinutes, seconds: diffInSeconds, miliseconds: diff };

          return diffObject;
      };

      var parseBoolean = function(bool) {
          switch (String(bool).toLowerCase()) {
              case "true": case "1": case "yes": case "y": case "on":
                  return true;
              case "false": case "0": case "no": case "n": case "off":
                  return false;
              default:
                  return false;
          }
      };

      // converte uma string normal em string base64
      var b64EncodeUnicode = function (str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
              return String.fromCharCode('0x' + p1);
          }));
      };

      // converte uma string base64 em string normal
      var b64DecodeUnicode = function (str) {
          return decodeURIComponent(escape(window.atob(str)));
      };

      // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // be sure you only allow certain HTML tags to avoid XSS threats (you should also remove unwanted HTML attributes)
      var strip_tags = function (input, allowed) {
          var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsTags = /<!--[\s\S]*?-->|<\?[\s\S]*?\?>/gi;

          // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
          allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

          return input.replace(commentsTags, '').replace(tags, function ($0, $1) {
              return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
          });
      };

      var urlBase = 'http://172.20.255.89:3000';

      var cloneFn = function (obj) {
          var copy;

          // Handle the 3 simple types, and null or undefined
          if (null == obj || "object" != typeof obj) return obj;

          // Handle Date
          if (obj instanceof Date) {
              copy = new Date();
              copy.setTime(obj.getTime());
              return copy;
          }

          // Handle Array
          if (obj instanceof Array) {
              copy = [];
              for (var i = 0, len = obj.length; i < len; i++) {
                  copy[i] = cloneFn(obj[i]);
              }
              return copy;
          }

          // Handle Object
          if (obj instanceof Object) {
              copy = {};
              for (var attr in obj) {
                  if (obj.hasOwnProperty(attr)) copy[attr] = cloneFn(obj[attr]);
              }
              return copy;
          }

          throw new Error("Unable to copy obj! Its type isn't supported.");
      };

      var queryApiFn = function(endpoint, query, fulltext){
          fulltext = fulltext === undefined ? false : fulltext;
          var url = '';
          url = urlBase.concat('/').concat(endpoint);
          if (query !== null && query !== '' && query !== undefined)
          {
              if (fulltext) {
                  url = url.concat('?').concat(query);
              } else {
                  url = url.concat('/').concat(query);
              }
          }
          return $http.get(url);
      };

      var vaiApiFn = function(endpoint, method, obj){

          return $http({
                  method: method,
                  url: url.concat('/').concat(endpoint),
                  headers: { 'Content-Type': 'application/json; charset=utf-8' },
                  data: obj
              });
      };

      var pegaNomeMesFn = function(data){
          var dt = new Date(data);
          return dt.toLocaleString('pt-br', { month: "short" }).toUpperCase();
      };

      var getDataFechamentoVencimentoMesFaturaFn = function(data){
          var dt = new Date(data);
          
          if (dt.getUTCDate() > pegaDiaFechamentoFaturaFn())
          {
              dt.setMonth(dt.getMonth() + 1);
          }

          var mes = dt.toLocaleString('pt-br', { month: "short" }).toUpperCase();
          dt.setDate(pegaDiaFechamentoFaturaFn());
          dt.setHours(23,59,59);

          var dt2 = new Date(dt);
          dt2.setMonth(dt2.getMonth() + 1);
          dt2.setDate(pegaDiaVencimentoFaturaFn());

          return {mesAbrev: mes, fechamento: dt, vencimento: dt2};
      };

      var pegaDiaFechamentoFaturaFn = function(){
          return 25;
      };

      var pegaDiaVencimentoFaturaFn = function(){
          return 10;
      };

      var getValorMensalidadeFn = function(){
          return 150.0;
      }



      // Public API here
      return {
          getUrlBase: function () {
              return urlBase;
          },
          b64EncodeUnicode: function (str) {
              return b64EncodeUnicode(str);
          },
          b64DecodeUnicode: function (str) {
              return b64DecodeUnicode(str);
          },
          parseBoolean: function (bool) {
              return parseBoolean(bool);
          },
          stripTags: function (input, allowed) {
              return strip_tags(input, allowed);
          },
          calculaTimeDiff: function (date1, date2) {
              return calculaTimeDiff(date1, date2);
          },
          clone: function (obj) {
              return cloneFn(obj);
          },
          queryApi: function(endpoint, query, fulltext){
              return queryApiFn(endpoint, query, fulltext);
          },
          vaiApi: function(endpoint, method, obj){
              return vaiApiFn(endpoint, method, obj);
          },
          pegaNomeMes: function(data){
              return pegaNomeMesFn(data);
          },
          getDataFechamentoVencimentoMesFatura: function(data){
              return getDataFechamentoVencimentoMesFaturaFn(data);
          },
          pegaDiaFechamentoFatura: function(){
              return pegaDiaFechamentoFaturaFn();
          },
          getValorMensalidade: function(){
              return getValorMensalidadeFn();
          }
      };
  }]);
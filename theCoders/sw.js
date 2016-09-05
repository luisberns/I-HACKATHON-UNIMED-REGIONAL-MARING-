var CACHE_NAME = 'unimed-cache-v6';
var urlsToCache = [
  '/',
  //IMG
  'img/bambam.jpg',
  'img/doctor.png',
  'img/doctor1.jpg',
  'img/doctor2.jpg',
  'img/doctor3.jpg',
  'img/filho.png',
  'img/hackathon-single.png',
  'img/hackathon-50.png',
  'img/hackathon.png',
  'img/homescreen48.png',
  'img/homescreen72.png',
  'img/homescreen96.png',
  'img/homescreen144.png',
  'img/homescreen168.png',
  'img/homescreen192.png',
  'img/logo-white.png',
  'img/logo.png',
  'img/mulher1.jpg',

  //CSS
  '/lib/bootstrap/css/bootstrap.min.css',
  '/lib/plugins/morris/morris.css',
  '/lib/dist/css/AdminLTE.min.css',
  'lib/dist/css/skins/_all-skins.min.css',
  'lib/angular-ui-notification.min.css',
  'lib/plugins/fullcalendar/fullcalendar.min.css',
  'lib/plugins/fullcalendar/fullcalendar.print.css',
  'lib/ionicons/css/ionicons.min.css',
  '/css/style.css',
  //JS
  'lib/plugins/jQuery/jquery-2.2.3.min.js',
  'lib/angular.min.js',
  'lib/angular-ui-router.js',
  'lib/ui-bootstrap-tpls-2.1.3.min.js',
  'lib/raphael-min.js',
  'lib/plugins/morris/morris.js',
  'lib/angular-ui-notification.min.js',
  'lib/bootstrap/js/bootstrap.min.js',
  'lib/plugins/fastclick/fastclick.js',
  'lib/dist/js/app.min.js',
  'lib/dist/js/pages/dashboard2.js',
  'lib/dist/js/demo.js',
  'lib/plugins/moment/moment.min.js',
  'lib/plugins/fullcalendar/fullcalendar.min.js',
  'js/app.js',
  'js/MeuPlanoCtrl.js',
  'js/HomeCtrl.js',
  'js/SolicitacoesCtrl.js',
  'js/CidCtrl.js',
  'js/ProducaoCtrl.js',

  //VIEWS
  'views/agenda-eventos.html',
  'views/alterar-informacoes.html',
  'views/boletos.html',
  'views/cid.html',
  'views/consultas.html',
  'views/estatuto-social.html',
  'views/home.html',
  'views/modal-confirm.html',
  'views/modal-consumo.html',
  'views/modal-solicitacao.html',
  'views/newsletter.html',
  'views/noticia-single.html',
  'views/noticias.html',
  'views/producao.html',
  'views/reclamacoes-elogios2.html',
  'views/regulamento-interno.html',
  'views/segunda-via-carteirinha.html',
  'views/single-noticias.html',
  'views/solicitacoes.html',
  'views/votacao.html',
  'manifest.json'
];



self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll(urlsToCache)
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


var appctrl = angular.module('starter.controllers', []);

appctrl.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

appctrl.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Sumário Executivo', id: 1 },
    { title: 'Análise de Mercado', id: 2 },
    { title: 'Plano de Marketing', id: 3 },
    { title: 'Plano Operacional', id: 4 },
    { title: 'Plano Financeiro', id: 5 },
    { title: 'Construção de Cenários', id: 6 },
    { title: 'Avaliação Estratégica', id: 7 },
    { title: 'Avaliação do Plano de Negócios', id: 8 },
    { title: 'Roteiro para Coleta de Informação', id: 9 }
  ];
});

appctrl.controller('PlaylistCtrl', function($scope, $rootScope) {

});

appctrl.controller('SumarioExecutivoController', function($scope, $ionicPopup, $ionicModal, $ionicListDelegate, $ionicHistory){
  $scope.su = new SumarioExecutivo();
  $scope.editar = false;
  $scope.cnpjOuCpf = false;
  $scope.addSumarioExecutivo = function(){
    $scope.plano.sumarioExecutivo = $scope.su;
    $scope.back();
  };

  $scope.escolherCnpjOuCpf = function(){
    $scope.cnpjOuCpf = !$scope.cnpjOuCpf;
  };

  $scope.adicionarSocio = function(){
    if(!$scope.editar){
      $scope.su.addSocio($scope.socio);
    }else{
      $scope.su.editarSocio($scope.socio);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeSocios();
  };

  $scope.botaoRemoverSocio = function(socio){
    $scope.su.removerSocio(socio);
  };

  $scope.botaoEditarSocio = function(socio){
    $scope.socio = socio;
    $scope.editar = true;
    $scope.openSocios();
  };


  $ionicModal.fromTemplateUrl('templates/socios.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeSocios = function() {
    $scope.modal.hide();
  };

  $scope.openSocios = function() {
    $scope.modal.show();
    if(!$scope.editar){
      $scope.socio = new Socio();
    }
  };

  $scope.back = function(){
    $ionicHistory.goBack();
  };
});

appctrl.controller('AnaliseDeMercadoController', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate) {
  $scope.adm = new AnaliseDeMercado();
  $scope.adm.cliente = new Cliente();
  $scope.editar = false;
  $scope.addAnaliseDeMercado = function(){
    $scope.plano.analiseDeMercado = $scope.adm;
    $scope.back();
  }

  $scope.addConcorrente = function(){
    if(!$scope.editar){
      $scope.adm.addConcorrente($scope.concorrente);
    }else{
      $scope.adm.editarConcorrente($scope.concorrente);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeConcorrentes();
  }

  $scope.botaoRemoverConcorrente = function(concorrente){
    $scope.adm.removerConcorrente(concorrente);
  };

  $scope.botaoEditarConcorrente = function(concorrente){
    $scope.concorrente = concorrente;
    $scope.editar = true;
    $scope.openConcorrentes();
  };

  $ionicModal.fromTemplateUrl('templates/concorrentes.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeConcorrentes = function() {
    $scope.modal.hide();
  };

  $scope.openConcorrentes = function() {
    $scope.modal.show();
    if(!$scope.editar){
      $scope.concorrente = new Concorrente();
    }

  };

  $scope.addFornecedor = function(){
    if(!$scope.editar){
      $scope.adm.addFornecedor($scope.fornecedor);
    }else{
      $scope.adm.editarFornecedor($scope.fornecedor);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeFornecedores();
  }

  $scope.botaoRemoverFornecedor = function(fornecedor){
    $scope.adm.removerFornecedor(fornecedor);
  };

  $scope.botaoEditarFornecedor = function(fornecedor){
    $scope.fornecedor = fornecedor;
    $scope.editar = true;
    $scope.openFornecedores();
  };

  $ionicModal.fromTemplateUrl('templates/fornecedores.html', {
    scope: $scope
  }).then(function(modale) {
    $scope.modale = modale;
  });

  $scope.closeFornecedores = function() {
    $scope.modale.hide();
  };

  $scope.openFornecedores = function() {
    $scope.modale.show();
    if(!$scope.editar){
      $scope.fornecedor = new Fornecedor();
    }

  };

  $scope.back = function(){
    $ionicHistory.goBack();
  };

});

appctrl.controller('PlanoDeMarketingCtrl', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate) {
  $scope.pm = new PlanoDeMarketing();
  $scope.pm.localizacaoDoNegocio = new LocalizacaoDoNegocio();
  $scope.editar = false;

  $scope.addPlanoDeMarketing = function(){
    $scope.plano.planoDeMarketing = $scope.pm;
    $scope.back();
  }

  $scope.addProduto = function(){
    if(!$scope.editar){
      $scope.pm.addProduto($scope.produto);
    }else{
      $scope.pm.editarProduto($scope.produto);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeProdutos();
  }

  $scope.botaoRemoverProduto= function(produto){
    $scope.pm.removerProduto(produto);
  };

  $scope.botaoEditarProduto = function(produto){
    $scope.produto = produto;
    $scope.editar = true;
    $scope.openProdutos();
  };

  $scope.back = function(){
    $ionicHistory.goBack();
  };

  $ionicModal.fromTemplateUrl('templates/produtos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeProdutos = function() {
    $scope.modal.hide();
  };

  $scope.openProdutos= function() {
    $scope.modal.show();
    if(!$scope.editar){
      $scope.produto = new Produto();
    }
  };
});

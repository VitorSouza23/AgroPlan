
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

appctrl.controller('PlaylistsCtrl', function($scope, $rootScope) {
  $scope.playlists = [
    { title: 'Sumário Executivo', id: 1, terminado: true},
    { title: 'Análise de Mercado', id: 2, terminado: true},
    { title: 'Plano de Marketing', id: 3, terminado: true },
    { title: 'Plano Operacional', id: 4, terminado: true },
    { title: 'Plano Financeiro', id: 5, terminado: true },
    { title: 'Construção de Cenários', id: 6, terminado: true },
    { title: 'Avaliação Estratégica', id: 7, terminado: true },
    { title: 'Avaliação do Plano de Negócios', id: 8, terminado: true },
    { title: 'Roteiro para Coleta de Informação', id: 9, terminado: true }
  ];

  $rootScope.mudarTerminado = function(id){
    $scope.playlists[id].terminado = !$scope.playlists[id].terminado;
  }
});

appctrl.controller('PlaylistCtrl', function($scope, $rootScope) {

});

appctrl.controller('SumarioExecutivoController', function($scope, $ionicPopup, $ionicModal, $ionicListDelegate, $ionicHistory){
  $scope.su = new SumarioExecutivo();
  $scope.editar = false;
  $scope.cnpjOuCpf = false;
  $scope.reordenar = false;

  $scope.addSumarioExecutivo = function(){
    $scope.plano.sumarioExecutivo = $scope.su;
    $scope.back();
    $scope.mudarTerminado(0);
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

  $scope.mostrarReordem = function(){
    $scope.reordenar = !$scope.reordenar;
  }

  $scope.moverSocio = function(item, fromIndex, toIndex) {
      $scope.su.socios.splice(fromIndex, 1);
      $scope.su.socios.splice(toIndex, 0, item);
    };

});


appctrl.controller('AnaliseDeMercadoController', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate) {
  $scope.adm = new AnaliseDeMercado();
  $scope.adm.cliente = new Cliente();
  $scope.editar = false;
  $scope.addAnaliseDeMercado = function(){
    $scope.plano.analiseDeMercado = $scope.adm;
    $scope.back();
    $scope.mudarTerminado(1);
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

  $scope.mostrarReordemConcorrente = function(){
    $scope.reordenarConcorrente = !$scope.reordenarConcorrente;
  }

  $scope.moverConcorrente = function(item, fromIndex, toIndex) {
      $scope.adm.concorrentes.splice(fromIndex, 1);
      $scope.adm.concorrentes.splice(toIndex, 0, item);
    };

    $scope.mostrarReordemFornecedor = function(){
      $scope.reordenarFornecedor = !$scope.reordenarFornecedor;
    }

    $scope.moverFornecedor = function(item, fromIndex, toIndex) {
        $scope.adm.fornecedores.splice(fromIndex, 1);
        $scope.adm.fornecedores.splice(toIndex, 0, item);
      };

});

appctrl.controller('PlanoDeMarketingCtrl', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate) {
  $scope.pm = new PlanoDeMarketing();
  $scope.pm.localizacaoDoNegocio = new LocalizacaoDoNegocio();
  $scope.editar = false;

  $scope.addPlanoDeMarketing = function(){
    $scope.plano.planoDeMarketing = $scope.pm;
    $scope.back();
    $scope.mudarTerminado(2);
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

  $scope.mostrarReordem = function(){
    $scope.reordenar = !$scope.reordenar;
  }

  $scope.moverProduto = function(item, fromIndex, toIndex) {
      $scope.pm.produtos.splice(fromIndex, 1);
      $scope.pm.produtos.splice(toIndex, 0, item);
    };
});

appctrl.controller('PlanoOperacionalCtrl', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate, $http, Camera) {
  $scope.po = new PlanoOperacional();
  $scope.editar = false;

 $scope.init = function(){


       $http.get('https://api.mlab.com/api/1/databases/agroplan/collections/cargos?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff').
           then(function(response) {
               $scope.po.cargos = response.data;
           });



 }
  $scope.addPlanoOperacional = function(){
    $scope.plano.PlanoOperacional = $scope.po;
    $scope.back();
    $scope.mudarTerminado(3);
  };

  $scope.addCargo = function(){
    if(!$scope.editar){
      $scope.po.addCargo($scope.cargo);
    }else{
      $scope.po.editarCargo($scope.cargo);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeCargos();
  };

  $scope.botaoRemoverCargo = function(cargo){
    $scope.po.removerCargo(cargo);
  };

  $scope.botaoEditarCargo = function(cargo){
    $scope.cargo = cargo;
    $scope.editar = true;
    $scope.openCargos();
  };

  $scope.back = function(){
    $ionicHistory.goBack();
  };

  $ionicModal.fromTemplateUrl('templates/cargos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeCargos = function() {
    $scope.modal.hide();
  };

  $scope.openCargos= function() {
    $scope.modal.show();
    if(!$scope.editar){
      $scope.cargo = new Cargo();
    }
  };

  $scope.takePicture = function (options) {

    var options = {
      quality : 75,
      targetWidth: 200,
      targetHeight: 200,
      sourceType: 1
    };

    Camera.getPicture(options).then(function(imageData) {
      $scope.picture = imageData;;
    }, function(err) {
      console.log(err);
    });

  };

  $scope.getPicture = function (options) {

    var options = {
      quality : 75,
      targetWidth: 200,
      targetHeight: 200,
      sourceType: 0
    };

    Camera.getPicture(options).then(function(imageData) {
      $scope.picture = imageData;;
    }, function(err) {
      console.log(err);
    });
  };

  $scope.mostrarReordem = function(){
    $scope.reordenar = !$scope.reordenar;
  }

  $scope.moverCargo = function(item, fromIndex, toIndex) {
      $scope.po.cargos.splice(fromIndex, 1);
      $scope.po.cargos.splice(toIndex, 0, item);
    };


});

appctrl.controller('PlanoFinanceiroCtrl', function($scope, $ionicModal, $ionicHistory, $ionicListDelegate) {
  $scope.pf = new PlanoFinanceiro();
  $scope.editar = false;

  $scope.addPlanoFnanceiro = function(){
    $scope.plano.planoFinanceiro = $scope.pf;
    $scope.back();
    $scope.mudarTerminado(4);
  }
  //Equipamento
  $scope.addEquipamento = function(){
    if(!$scope.editar){
      $scope.pf.estoqueInicial.addEquipamento($scope.equipamento);
    }else{
      $scope.pf.estoqueInicial.editarEquipamento($scope.equipamento);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeEquipamentos();
  };

  $scope.botaoRemoverEquipamento= function(equipamento){
    $scope.pf.estoqueInicial.removerEquipamento(equipamento);
  };

  $scope.botaoEditarEquipamento = function(equipamento){
    $scope.equipamento = equipamento;
    $scope.editar = true;
    $scope.openEquipamentos();
  };

  $ionicModal.fromTemplateUrl('templates/equipamentos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modale = modal;
  });

  $scope.closeEquipamentos = function() {
    $scope.modale.hide();
    $scope.equipamento = null;
  };

  $scope.openEquipamentos = function() {
    $scope.modale.show();
    if(!$scope.editar){
      $scope.equipamento = new Equipamento();
    }
  };

  $scope.mostrarReordemEquipamento = function(){
    $scope.reordenarEquipamento = !$scope.reordenarEquipamento;
  }

  $scope.moverEquipamento = function(item, fromIndex, toIndex) {
      $scope.pf.estoqueInicial.equipamentos.splice(fromIndex, 1);
      $scope.pf.estoqueInicial.equipamentos.splice(toIndex, 0, item);
    };

  $scope.back = function(){
    $ionicHistory.goBack();
  };

  //Máquina

  $scope.addMaquina = function(){
    if(!$scope.editar){
      $scope.pf.estoqueInicial.addMaquina($scope.maquina);
    }else{
      $scope.pf.estoqueInicial.editarMaquina($scope.maquina);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeMaquinas();
  };

  $scope.botaoRemoverMaquina= function(maquina){
    $scope.pf.estoqueInicial.removerMaquina(maquina);
  };

  $scope.botaoEditarMaquina = function(maquina){
    $scope.maquina = maquina;
    $scope.editar = true;
    $scope.openMaquinas();
  };

  $ionicModal.fromTemplateUrl('templates/maquinas.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalma = modal;
  });

  $scope.closeMaquinas = function() {
    $scope.modalma.hide();
    $scope.maquina = null;
  };

  $scope.openMaquinas = function() {
    $scope.modalma.show();
    if(!$scope.editar){
      $scope.maquina = new Maquina();
    }
  };

  $scope.mostrarReordemMaquina = function(){
    $scope.reordenarMaquina = !$scope.reordenarMaquina;
  }

  $scope.moverMaquina= function(item, fromIndex, toIndex) {
      $scope.pf.estoqueInicial.maquinas.splice(fromIndex, 1);
      $scope.pf.estoqueInicial.maquinas.splice(toIndex, 0, item);
    };


  //Móvel

  $scope.addMovel = function(){
    if(!$scope.editar){
      $scope.pf.estoqueInicial.addMovel($scope.movel);
    }else{
      $scope.pf.estoqueInicial.editarMovel($scope.movel);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeMoveis();
  };

  $scope.botaoRemoverMovel= function(movel){
    $scope.pf.estoqueInicial.removerMovel(movel);
  };

  $scope.botaoEditarMovel= function(movel){
    $scope.movel = movel;
    $scope.editar = true;
    $scope.openMoveis();
  };

  $ionicModal.fromTemplateUrl('templates/moveis.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalmo = modal;
  });

  $scope.closeMoveis = function() {
    $scope.modalmo.hide();
    $scope.movel = null;
  };

  $scope.openMoveis = function() {
    $scope.modalmo.show();
    if(!$scope.editar){
      $scope.movel = new Movel();
    }
  };

  $scope.mostrarReordemMovel = function(){
    $scope.reordenarMovel = !$scope.reordenarMovel;
  }

  $scope.moverMovel = function(item, fromIndex, toIndex) {
      $scope.pf.estoqueInicial.moveis.splice(fromIndex, 1);
      $scope.pf.estoqueInicial.moveis.splice(toIndex, 0, item);
    };

  //Utensílios

  $scope.addUtensilio = function(){
    if(!$scope.editar){
      $scope.pf.estoqueInicial.addUtensilio($scope.utensilio);
    }else{
      $scope.pf.estoqueInicial.editarUtensilio($scope.utensilio);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeUtensilios();
  };

  $scope.botaoRemoverUtensilio = function(utensilio){
    $scope.pf.estoqueInicial.removerUtensilio(utensilio);
  };

  $scope.botaoEditarUtensilio= function(utensilio){
    $scope.utensilio = utensilio;
    $scope.editar = true;
    $scope.openUtensilios();
  };

  $ionicModal.fromTemplateUrl('templates/utensilios.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalu = modal;
  });

  $scope.closeUtensilios = function() {
    $scope.modalu.hide();
    $scope.utensilio = null;
  };

  $scope.openUtensilios = function() {
    $scope.modalu.show();
    if(!$scope.editar){
      $scope.utensilio = new Utensilio();
    }
  };

  $scope.mostrarReordemUtensilio = function(){
    $scope.reordenarUtensilio = !$scope.reordenarUtensilio;
  }

  $scope.moverUtensilio = function(item, fromIndex, toIndex) {
      $scope.pf.estoqueInicial.utensilios.splice(fromIndex, 1);
      $scope.pf.estoqueInicial.utensilios.splice(toIndex, 0, item);
    };

  //Veíclo

  $scope.addVeiculo = function(){
    if(!$scope.editar){
      $scope.pf.estoqueInicial.addVeiculo($scope.veiculo);
    }else{
      $scope.pf.estoqueInicial.editarVeiculo($scope.veiculo);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeVeiculos();
  };

  $scope.botaoRemoverVeiculo = function(veiculo){
    $scope.pf.estoqueInicial.removerVeiculo(veiculo);
  };

  $scope.botaoEditarVeiculo= function(veiculo){
    $scope.veiculo = veiculo;
    $scope.editar = true;
    $scope.openVeiculos();
  };

  $ionicModal.fromTemplateUrl('templates/veiculos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalv = modal;
  });

  $scope.closeVeiculos = function() {
    $scope.modalv.hide();
    $scope.veiculo = null;
  };

  $scope.openVeiculos = function() {
    $scope.modalv.show();
    if(!$scope.editar){
      $scope.veiculo = new Veiculo();
    }
  };

  $scope.mostrarReordemVeiculo = function(){
    $scope.reordenarVeiculo = !$scope.reordenarVeiculo;
  }

  $scope.moverVeiculo = function(item, fromIndex, toIndex) {
      $scope.pf.estoqueInicial.veiculos.splice(fromIndex, 1);
      $scope.pf.estoqueInicial.veiculos.splice(toIndex, 0, item);
    };

  //venda

  $scope.addVenda = function(){
    if(!$scope.editar){
      $scope.pf.addVenda($scope.venda);
    }else{
      $scope.pf.editarVenda($scope.venda);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeVendas();
  };

  $scope.botaoRemoverVenda = function(venda){
    $scope.pf.removerVenda(venda);
  };

  $scope.botaoEditarVenda= function(venda){
    $scope.venda = venda;
    $scope.editar = true;
    $scope.openVendas();
  };

  $ionicModal.fromTemplateUrl('templates/vendas.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalven = modal;
  });

  $scope.closeVendas = function() {
    $scope.modalven.hide();
    $scope.venda = null;
  };

  $scope.openVendas = function() {
    $scope.modalven.show();
    if(!$scope.editar){
      $scope.venda = new Venda();
    }
  };

  $scope.mostrarReordemVenda = function(){
    $scope.reordenarVenda= !$scope.reordenarVenda;
  }

  $scope.moverVenda= function(item, fromIndex, toIndex) {
      $scope.pf.vendas.splice(fromIndex, 1);
      $scope.pf.vendas.splice(toIndex, 0, item);
    };

  //compra

  $scope.addCompra = function(){
    if(!$scope.editar){
      $scope.pf.addCompra($scope.compra);
    }else{
      $scope.pf.editarCompra($scope.compra);
      $scope.editar = false;
      $ionicListDelegate.closeOptionButtons();
    }
    $scope.closeCompras();
  };

  $scope.botaoRemoverCompra = function(compra){
    $scope.pf.removerCompra(compra);
  };

  $scope.botaoEditarCompra= function(compra){
    $scope.compra = compra;
    $scope.editar = true;
    $scope.openCompras();
  };

  $ionicModal.fromTemplateUrl('templates/compras.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalcom = modal;
  });

  $scope.closeCompras = function() {
    $scope.modalcom.hide();
    $scope.venda = null;
  };

  $scope.openCompras = function() {
    $scope.modalcom.show();
    if(!$scope.editar){
      $scope.compra = new Compra();
    }
  };
  $scope.mostrarReordemCompra = function(){
    $scope.reordenarCompra = !$scope.reordenarCompra;
  }

  $scope.moverCompra = function(item, fromIndex, toIndex) {
      $scope.pf.compras.splice(fromIndex, 1);
      $scope.pf.compras.splice(toIndex, 0, item);
    };

});

appctrl.controller('ConstrucaoDeCenarioCtrl', function($scope, $ionicHistory) {
  $scope.cdc = new ConstrucaoDeCenario();
  $scope.addConstrucaoDeCenarios = function(){
    $scope.plano.construcaoDeCenarios = $scope.cdc;
    $scope.back();
    $scope.mudarTerminado(6);
  }

  $scope.back = function(){
    $ionicHistory.goBack();
  };
});



appctrl.controller('AnaliseFOFACtrl', function($scope, $ionicHistory) {
  $scope.fofa = new AnaliseFOFA();
  $scope.addAnaliseFOFA = function(){
    $scope.plano.analiseFOFA = $scope.fofa;
    $scope.back();
    $scope.mudarTerminado(6);
  }

  $scope.back = function(){
    $ionicHistory.goBack();
  };
});

appctrl.controller('AvaliacaoDoPlanoCtrl', function($scope, $ionicHistory) {
  $scope.ap = new AvaliacaoDoPlano();

  $scope.addAvaliacaoDoPlano = function(){
    $scope.plano.avalicaoDoPlano = $scope.ap;
    $scope.back();
    $scope.mudarTerminado(7);
  }

  $scope.back = function(){
    $ionicHistory.goBack();
  };

});

appctrl.controller('RoteiroParaColetaCtrl', function($scope, $ionicHistory) {
  $scope.rpc = new RoteiroParaColeta();

  $scope.addRoteiroParaColeta = function(){
    $scope.plano.roteiroParaColeta = $scope.rpc;
    $scope.back();
    $scope.mudarTerminado(8);
  }

  $scope.back = function(){
    $ionicHistory.goBack();
  };

});

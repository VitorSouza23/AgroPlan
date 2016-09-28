function PlanoFinanceiro(){
  this.estoqueInicial = new EstoqueInicial();
}

function Equipamento(){
  this.descricao;
  this.quantidade;
  this.valorUnitario;


  this.calcularTotal = function(){
    return this.valorUnitario * this.quantidade;
  }
}

function Maquina(){
  this.descricao;
  this.quantidade;
  this.valorUnitario;


  this.calcularTotal = function(){
    return this.valorUnitario * this.quantidade;
  }
}

function Movel(){
  this.descricao;
  this.quantidade;
  this.valorUnitario;


  this.calcularTotal = function(){
    return this.valorUnitario * this.quantidade;
  }
}

function Utensilio(){
  this.descricao;
  this.quantidade;
  this.valorUnitario;

  this.calcularTotal = function(){
    return this.valorUnitario * this.quantidade;
  }
}

function Veiculo(){
  this.descricao;
  this.quantidade;
  this.valorUnitario;


  this.calcularTotal = function(){
    return this.valorUnitario * this.quantidade;
  }
}

function EstoqueInicial(){
  this.equipamentos = new Array();
  this.maquinas = new Array();
  this.moveis = new Array();
  this.utensilios = new Array();
  this.veiculos = new Array();


  this.addEquipamento = function(equipamento){
    this.equipamentos.push(equipamento);
  };

  this.removerEquipamento = function(equimapmento){
    var pos = this.equipamentos.indexOf(equimapmento);
    this.equipamentos.splice(pos,1);
  };

  this.editarEquipamento = function(equimapmento){
    var pos = this.equipamentos.indexOf(equimapmento);
    this.equipamentos[pos] = equimapmento;
  };

  this.addMaquina = function(maquina){
    this.maquinas.push(cargo);
  };

  this.removerMaquina = function(maquina){
    var pos = this.maquinas.indexOf(maquina);
    this.maquinas.splice(pos,1);
  };

  this.editarMaquina = function(maquina){
    var pos = this.maquinas.indexOf(maquina);
    this.maquinas[pos] = maquina;
  };

  this.addMovel = function(movel){
    this.moveis.push(moveis);
  };

  this.removerMovel = function(movel){
    var pos = this.moveis.indexOf(movel);
    this.moveis.splice(pos,1);
  };

  this.editarMovel = function(movel){
    var pos = this.moveis.indexOf(movel);
    this.moveis[pos] = movel;
  };

  this.addUtensilio= function(utensilio){
    this.utensilios.push(utensilio);
  };

  this.removerUtensilio = function(utensilio){
    var pos = this.utensilios.indexOf(utensilio);
    this.utensilios.splice(pos,1);
  };

  this.editarUtensilio = function(utensilio){
    var pos = this.utensilios.indexOf(utensilio);
    this.utensilios[pos] = utensilio;
  };

  this.addVeiculo = function(veiculo){
    this.veiculos.push(veiculo);
  };

  this.removerVeiculo = function(veiculo){
    var pos = this.veiculos.indexOf(veiculo);
    this.veiculos.splice(pos,1);
  };

  this.editarVeiculo = function(veiculo){
    var pos = this.veiculos.indexOf(veiculo);
    this.veiculos[pos] = veiculo;
  };

  this.valorFinalDeGastosIniciais(){
    var valorFinal = 0;
    for(e in this.equipamentos){
      valorFinal += e.calcularTotal();
    }
    for(e in this.maquinas){
      valorFinal += e.calcularTotal();
    }
    for(e in this.moveis){
      valorFinal += e.calcularTotal();
    }
    for(e in this.utensilios){
      valorFinal += e.calcularTotal();
    }
    for(e in this.veiculos){
      valorFinal += e.calcularTotal();
    }
    return valorFinal;
  }
}

var app = angular.module('myapp',['ngRoute', 'ngResource', 'LicitationService']);
app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: "Panel/minhaArea.html",
        controller :'minhaAreaControl'
    });

     $routeProvider.when('/pesquisa',{
        templateUrl: "Panel/pesquisar.html",
        controller :'pesquisarControl'
    });

    $routeProvider.when('/novasLicit',{
        templateUrl: "Panel/novasLicit.html",
        controller :'novasLicitControl'
    });

    $routeProvider.when('/historico',{
        templateUrl: "Panel/historico.html",
        controller :'historicoControl'
    });

    $routeProvider.when('/verPainel',{
        templateUrl: "Panel/verPainel.html",
        controller :'verPainelControl'
    });

    $routeProvider.when('/objetivos',{
        templateUrl: "Panel/objetivos.html",
        controller :'objetivosControl'
    });

    $routeProvider.when('/quemSomos',{
        templateUrl: "Panel/quemSomos.html",
        controller :'quemSomosControl'
    });

    $routeProvider.when('/contatos',{
        templateUrl: "Panel/contatos.html",
        controller :'contatosControl'
    });

     $routeProvider.when('/mapaDoSite',{
        templateUrl: "Panel/mapaDoSite.html",
        controller :'mapaDoSiteControl'
    });

      $routeProvider.when('/entrar',{
        templateUrl: "Panel/entrar.html",
        controller :'entrarControl'
    });

	$routeProvider.when('/registrar',{
        templateUrl: "Panel/registrar.html",
        controller :'registrarControl'
    });

	$routeProvider.when('/trocarSenha',{
        templateUrl: "Panel/trocarSenha.html",
        controller :'trocarSenhaControl'
    });

	$routeProvider.when('/esqueciSenha',{
        templateUrl: "Panel/esqueciSenha.html",
        controller :'esqueciSenhaControl'
    });

     $routeProvider.otherwise({redirectTo : "/index"});
});

app.controller("pesquisarControl",function($scope, Licitation)
{
  Licitation.getLicitations($scope);

    $scope.listOpcoes =    [
        { op2:"Id",op:"Id", id: 1},
        { op2:"Titulo",op:"Titulo", id: 2},
        { op2:"Descricao",op:"Descrição", id: 3},
        { op2:"Data",op:"Data de Entrega", id: 4}
    ];

  $scope.pesquisarLicitacao = function(campoBusca,tipoBusca){
      switch(tipoBusca) {
        case "Id":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Id == campoBusca; });
             console.log(tipoBusca);
            break;
        case "Titulo":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Titulo.indexOf(campoBusca) !== -1 });
            break;
        case "Descricao":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Descricao.indexOf(campoBusca) !== -1 });
            break;
        case "Data":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Data == campoBusca; });
            break;
        default:
           $scope.listaLicitacao = listaLicitacaoTemp;
        }
	}

  $scope.OrdenarPor = function(campo){
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoOrdenacao =! $scope.direcaoOrdenacao;
  }

});

app.controller("minhaAreaControl",function($scope, Licitation)
{
  Licitation.findUser($scope);

	$scope.addTag = function()
  {
    Licitation.addTag($scope.adicTag, $scope);
		//$scope.tags.push({tag:$scope.adicTag});
		$scope.adicTag = '';
	}
	$scope.removeTag = function()
  {
		$scope.remTag = '';
		var index = $scope.tags.indexOf($scope.remTag);
		$scope.tags.splice(index, 1);
	}
});

app.controller("novasLicitControl",function($scope, Licitation)
{
  Licitation.getUserLicitations($scope);

  $scope.OrdenarPor = function(campo){
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoOrdenacao =! $scope.direcaoOrdenacao;
  }
});

app.controller("historicoControl",function($scope){
    $scope.message= "Histórico"
	
	var listaHistoricoTemp = [
        {Id:1001, Titulo:"Titulo1", Descricao:"Lorem1 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem1", Vis: true},
        {Id:1004, Titulo:"Titulo4", Descricao:"Lorem4 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem4", Vis: false},
        {Id:1005, Titulo:"Titulo5", Descricao:"Lorem5 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem5", Vis: false},
        {Id:1007, Titulo:"Titulo7", Descricao:"Lorem7 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem7", Vis: true},
        {Id:1010, Titulo:"Titulo10", Descricao:"Lorem10 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem10", Vis: true}
    ];
	
	$scope.listaHistorico = listaHistoricoTemp;
	
	$scope.tipoHistLicitacao = function(){
      switch(tab) {
        case "2":
            $scope.listaHistorico = listaHistoricoTemp.filter(function(obj) { return obj.Vis == false; });
            console.log(tipoBusca);
            break;

        default:
			$scope.listaHistorico = listaHistoricoTemp.filter(function(obj) { return obj.Id == true; });
            console.log(tipoBusca);
	  }
	}
});

app.controller("verPainelControl",function($scope){
    $scope.message= "Ver Painel"
});

app.controller("objetivosControl",function($scope){
    $scope.message= "Objetivos"
});

app.controller("quemSomosControl",function($scope){
    $scope.message= "Quem Somos"
});

app.controller("contatosControl",function($scope){
    $scope.message= "Contatos"
});

app.controller("mapaDoSiteControl",function($scope){
    $scope.message= "Mapa do Site"
});

app.controller("entrarControl",function($scope, Licitation)
{
    //$scope.message= "Entrar",
    $scope.submit = function()
    {
      Licitation.login($scope.user);
    }
});

app.controller("registrarControl",function($scope, Licitation)
{
  $scope.submit = function()
  {
    Licitation.register($scope.user);
  }
  //$scope.message= "Registrar"
});

app.controller("trocarSenhaControl",function($scope){
    $scope.message= "Trocar Senha"
});

app.controller("esqueciSenhaControl",function($scope){
    $scope.message= "Esqueci a Senha"
});
// <<<<<<< HEAD
// var modalLogin = true;
// var modalRegistrar = false;
// var modalEsqueciSenha = false;
// =======
// app.controller("esqueciSenhaControl",function($scope){
//     $scope.message= "Esqueci a Senha"
// });
// >>>>>>> c09fd9d055ba99b84e3da771d8929443c75e4c52

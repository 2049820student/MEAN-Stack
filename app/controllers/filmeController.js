routerApp.controller('filmeController', function($scope, $http, $state, $stateParams, globalConfig) {

    $scope.saveData = function(filme) {
        var newFilme = {
            nome: filme.nome,
            descricao: filme.descricao,
            data_lancamento: filme.data_lancamento,
            idioma: filme.idioma,
            imagem: filme.imagem,
            avaliacao: filme.avaliacao
        }
        newFilme.avaliacao = filme.avaliacao;

        if ($state.current.name === 'create') {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/filmes",
                data: newFilme,
            }).then(function mySuccess(response) {
                alert('CRIADO COM SUCESSO');
            }, function myError(response) {
                alert('ERRO AO CRIAR');
            });
        } else if ($state.current.name === 'edit') {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/filmes/" + $stateParams._id,
                data: newFilme,
            }).then(function mySuccess(response) {
                $state.go("verfilmes");
            }, function myError(response) {

            });
        }
    };


    if ($state.current.name === 'verfilmes')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/filmes"
        }).then(function mySuccess(response) {
            $scope.filmes = response.data;
        }, function myError(response) {

        });
    }
    else if ($state.current.name === 'edit')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/filmes/" + $stateParams._id
        }).then(function mySuccess(response) {
            $scope.filmes = response.data;
        }, function myError(response) {

        });
    }

    $scope.deleteFilme = function(filme)
    {
        $http({
            method: "DELETE",
            url: globalConfig.apiAddress + "/filmes/" + filme,
            data: filme,
        }).then(function mySuccess(response) {
            alert('ELIMINADO COM SUCESSO');
            $state.reload();
        }, function myError(response) {
            alert('ERRO AO ELIMINAR');
        });
    };

});


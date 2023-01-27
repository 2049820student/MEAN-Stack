routerApp.controller('peopleController', function($scope, $http, $state, $stateParams, globalConfig) {

    //------------------Atores---------------------

    $scope.saveAtor = function(ator)
    {
        if ($state.current.name === 'createator')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/atores",
                data: ator,
            }).then(function mySuccess(response) {
                alert('CRIADO COM SUCESSO');
                // $state.go("atores");
            }, function myError(response) {
                alert('ERRO AO CRIAR');
            });
        }

        else if ($state.current.name === 'editator')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/atores/" + $stateParams._id,
                data: ator,
            }).then(function mySuccess(response) {
                $state.go("verpeople");
            }, function myError(response) {

            });
        }
    };

    if ($state.current.name === 'verpeople')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/atores"
        }).then(function mySuccess(response) {
            $scope.atores = response.data;
        }, function myError(response) {

        });
    }
    else if ($state.current.name === 'editator')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/atores/" + $stateParams._id
        }).then(function mySuccess(response) {
            $scope.ator = response.data;
        }, function myError(response) {

        });
    }

    $scope.deleteAtor = function(ator)
    {
        $http({
            method: "DELETE",
            url: globalConfig.apiAddress + "/atores/" + ator,
            data: ator,
        }).then(function mySuccess(response) {
            alert('ELIMINADO COM SUCESSO');
            $state.reload();
        }, function myError(response) {
            alert('ERRO AO ELIMINAR');
        });
    };




    //---------------Diretores------------------



    $scope.saveDiretor = function(diretor)
    {
        if ($state.current.name === 'creatediretor')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/diretores",
                data: diretor,
            }).then(function mySuccess(response) {
                alert('CRIADO COM SUCESSO');
                // $state.go("diretores");
            }, function myError(response) {
                alert('ERRO AO CRIAR');
            });
        }

        else if ($state.current.name === 'editdiretor')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/diretores/" + $stateParams._id,
                data: diretor,
            }).then(function mySuccess(response) {
                $state.go("verpeople");
            }, function myError(response) {

            });
        }
    };

    if ($state.current.name === 'verpeople')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/diretores"
        }).then(function mySuccess(response) {
            $scope.diretores = response.data;
        }, function myError(response) {

        });
    }
    else if ($state.current.name === 'editdiretor')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/diretores/" + $stateParams._id
        }).then(function mySuccess(response) {
            $scope.diretor = response.data;
        }, function myError(response) {

        });
    }

    $scope.deleteDiretor = function(diretor)
    {
        $http({
            method: "DELETE",
            url: globalConfig.apiAddress + "/diretores/" + diretor,
            data: diretor,
        }).then(function mySuccess(response) {
            alert('ELIMINADO COM SUCESSO');
            $state.reload();
        }, function myError(response) {
            alert('ERRO AO ELIMINAR');
        });
    };
});
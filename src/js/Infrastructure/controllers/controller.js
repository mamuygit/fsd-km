(function(){
    console.log('Controller lib');  
    angObj.controller('MainController', function($scope){
        console.log('Main Controller Loaded');
        $scope.data = {};
        $scope.data.content = ' World !!!'
    })
    angObj.controller('TabController', function ($scope) {
        $scope.tabIndex = 1;
    });

    angObj.controller('TestController', function ($scope) {
        $scope.data = {};
        $scope.data.content = ' World !!!'
    });
    //angObj.controller('ArticleController', ['$scope', '$stateParams', '$state', 'articlesService', 
    //    function ($scope, $stateParams, $state, articlesService, articles) {
    //        $scope.ArticleName = $stateParams.pageName.toUpperCase();
    //        $scope.ArticleType = $stateParams.pageType;
    //    }
    //]);
})();

(function () {
    angObj.config(function ($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('master',
            {
                abstract: true,
                url: '/',
                views: {
                    '': {
                        templateUrl: '../view/templates/shared/master.html',
                        controller: function ($scope, articles) {
                            $scope.articles = articles.data;
                        }
                    }
                },
                resolve: {
                    articles: ['articlesService',
                        function (articlesService) {
                            return articlesService.getArticles();
                        }]
                }
            })
            .state('master.home',
            {
                url: 'home',
                views: {
                    'content': { templateUrl: '../view/templates/home/index.html' },
                    controller: function ($scope) {
                    }
                    //controller: 'ContentController'//,
                }
            })
            .state('master.article', {
                abstract: true,
                params: { pageType: '' },
                url: 'article',
                views: {
                    'content': {
                        templateUrl: '../view/templates/article/index.html',
                        controller: function ($scope, $stateParams, articles) {
                            $scope.articleCurrent = {}, $scope.articles = {};
                            $scope.articleCurrent.pageType = $stateParams.pageType;
                            $scope.article = articles.data[$stateParams.pageType];
                        }
                    }
                },
                resolve: {
                    articles: ['articlesService',
                        function (articlesService) {
                            console.log('Article data Loaded');
                            return articlesService.getArticles();
                        }]
                }
                /*https://jsonformatter.curiousconcept.com/*/
            })
            .state('master.article.list', {
                params: { pageType: '' },
                url: '/:pageType/',
                views: {
                    'articledetail': {
                        templateUrl: '../view/templates/article/list.html'//,
                        //controller: function ($scope, articles) {
                        //    _($scope.article).find(function (items) {
                        //        _(items.contents).find(function (content) {
                        //            content.description = (content.description.length > 100) ? content.description.substring(0, 100) + ' ...' : content.description;
                        //        });
                        //    });
                        //    console.log($scope.article);
                        //}
                    }
                }
            })
            .state('master.article.detail', {
                params: { pageType: '', pageName: '' },
                url: '/:pageType/:pageName',
                views: {
                    'articledetail': {
                        templateUrl: function ($stateParams) {
                            //pageName = ($stateParams.pageName == '' || $stateParams.pageName == null || $stateParams.pageName == undefined) ? 'list' : 'detail';
                            //console.log($stateParams.pageName, pageName);
                            return '../view/templates/article/detail.html';
                        },
                        controller: function ($scope, $stateParams, articles) {
                            $scope.articleCurrent.pageName = $stateParams.pageName;
                        }
                    },
                    'content@master.article.detail': {
                        templateUrl: function ($stateParams) {
                            //pageName = ($stateParams.pageName == '' || $stateParams.pageName == null || $stateParams.pageName == undefined) ? 'none' : 'article/article-template/' + $stateParams.pageType + '/' + $stateParams.pageName;
                            return '../view/templates/article/article-template/' + $stateParams.pageType + '/' + $stateParams.pageName +'.html';
                        }
                    }
                }
            })
            .state('NotFound',
            {
                url: '/NotFound',
                views: {
                    '': { templateUrl: '/templates/NotFound/NotFound.htm' }
                }
            });
            // Set Url HTML5
            $locationProvider.html5Mode({
              enabled: true//  enabled: true,requireBase: false
            });
        // Set Url Direction

        $urlRouterProvider.otherwise('/home');

    });
})();

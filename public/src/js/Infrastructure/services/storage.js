(function () {
    angObj.service('articlesService', ['$http', function ($http) {
        //this.searchArticles = function (query) {
        //    return $http.get('/goats/search/' + query);
        //};

        this.getArticles = function () {
            return $http.get('../src/data/article.txt');
        };

        //this.getArticle = function (name) {
        //    return $http.get('/goat/' + name);
        //};
    }]);
})();
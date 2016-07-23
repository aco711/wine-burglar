'use strict';

function reccomendationController() {
    $scope.addedContent = [];
    $scope.conent_link = "";
    $scope.consumed = true;
    $scope.comments = '';
    $scope.addedBy = "Alex Cohen";

    $scope.add_content = function () {
        var content = {
            "link" : $scope.content_link,
            "consumed" : $scope.consumed,
            "comments" : $scope.comments,
            "user" : $scope.addedBy
        };
    $scope.addedContent.push(content);
    clear();
    }


    $scope.submit_content = function() {
        data = {"content" : $scope.addedContent};
        $http.post('/recContent',data).
        success(function(d) {
            console.log("posted successfully");
        }).error(function(d) {
            console.error("error in posting");
        })
    };


    function clear() {
        $scope.content_link = "";
        $scope.consumed = true;
        $scope.comments = '';
        $scope.addedBy = "Alex Cohen";


    }
}

angular.module('wineBurglarApp')
  .controller('ReccomendationController', reccomendationController);


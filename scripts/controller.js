angular.module("tabs.Ctrl",[])
.controller("myCtrl",function($scope){
	
})
.controller("disCtrl",function($scope){
	
})
.controller("themeCtrl",function($scope,$http,$ionicModal,$timeout){
	var urlPath="/mock/theme.json";
	$http.get(urlPath).then(function(res){
		$scope.picList=res.data.data;
	},function(err){});
})
.controller( 'actionsheetCtl',['$scope','$timeout' ,'$http',function($scope,$timeout,$http){

     $scope.items=[

     ];

    $scope.doRefresh = function() {
        $http.get('mock/test01.json')  //注意改为自己本站的地址，不然会有跨域问题
            .success(function(newItems) {
                for(i=4;i<10;i++){
                   $scope.items.push( newItems.data[i].path );
                }
            })
            .finally(function() {
            	 $scope.$broadcast('scroll.refreshComplete');
            });
    };  
    $timeout(function() {
        $scope.loadOlderStories=function(){};
     }, 100);
}])

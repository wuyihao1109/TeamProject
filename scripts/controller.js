angular.module("tabs.Ctrl",[])
.controller("myCtrl",function($scope){
	
})
.controller("disCtrl",function($scope){
	
})
.controller( 'actionsheetCtl',['$scope','$timeout' ,'$http',function($scope,$timeout,$http){

     $scope.items=[

       
    //     // {
    //     //     "path":"http:\/\/img2.handybest.com\/Uploads\/topic\/20160707\/14678872823911.jpg!phone"
    //     // },
    //     // {
    //     //     "path":"http:\/\/img1.handybest.com\/Uploads\/topic\/20160708\/14679336857445.jpg!phone"
    //     // }


     ];

    $scope.doRefresh = function() {
        $http.get('http://localhost:8100/mock/test01.json')  //注意改为自己本站的地址，不然会有跨域问题
            .success(function(newItems) {
                
                for(i=4;i<10;i++){
                    // $scope.items = [];
                   // $scope.items=newItems.data[i].path;
                   $scope.items.push( newItems.data[i].path );
                  // console.log(newItems.data[i].path);
                   // = newItems.data.path; 
                   // console.log(newItems.data);
                   // console.log(newItems.data[1].path);
                   // console.log($scope.items);
                }
               // console.log($scope.items[1]);
            })
            .finally(function() {
            	 $scope.$broadcast('scroll.refreshComplete');
            });
    };
    
    $timeout(function() {
        $scope.loadOlderStories=function(){};
     }, 100);

    //$scope.loadOlderStories=function(){};
}])
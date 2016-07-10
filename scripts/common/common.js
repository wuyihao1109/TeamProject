angular.module("commonModule",[])
.factory("UtilInterface",function($http,$scope){
	//ajax获取数据
	var gData=function(dataPath,picArr){
		$http.get(dataPath).then(function(res){
			$scope[picArr]=res.data.data;
		},function(err){
			console.log(err);
		})
	};
	
	return {
		getData:"gData"
	}
})
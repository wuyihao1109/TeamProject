angular.module("myApp",["ionic","tabs.Ctrl"])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state("tab",{
		url:"/tab",
		abstract: true,
		templateUrl:"./tpls/tabs.html"
	})
	.state("tab.home",{
		url:"/home",
	  views: {
	  	'tab-home': {
	    templateUrl: './tpls/home.html',
	    controller: 'homeCtrl'
 		 }
    }
	})
	.state("tab.discover",{
		url:"/discover",
		views:{
			"tab-discover":{
				templateUrl: './tpls/discover.html',
	    	controller: 'disCtrl'
			}
		}
	})
	.state("tab.my",{
		url:"/my",
		views:{
			"tab-my":{
				templateUrl: './tpls/my.html',
	    	controller: 'myCtrl'
			}
		}
	});
	$urlRouterProvider.otherwise('/tab/home');
})



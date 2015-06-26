angular.module('Platzi', []);
    angular.module( 'Platzi' ).controller('BaseCtrl', ['$scope', function($scope){

    	io.socket.get('/emoji', function(data){
    		$scope.emojis = data;
    		$scope.$apply();
    	});

    	io.socket.on('emoji', function(event){
    		switch(event.verb){
    			case 'created': $scope.emojis.push(event.data);
    			//case 'created': $scope.emojis.shift();
    			$scope.$apply();
    			break;
    		}
    	});

    	//fake
    	/*
        $scope.emojis = [ {
            id: 1,
            text : '=)'
        },{
            id: 2,
            text : '=D'
        },{
            id: 3,
            text : '=('
        },{
            id: 4,
            text : '=P'
        },{
            id: 5,
            text : '=$'
        } ];

        */
    }]) ;
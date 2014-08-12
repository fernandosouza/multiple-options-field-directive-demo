angular.module('app', [])

    .controller('multipleOptionsController', ['$scope', function($scope){
    	$scope.field = {
            lable: 'Demo Multiple Options Field',
            type: '1',
            name: '' ,
            options: [
                {
                    'text': 'option 1',
                    'value': '1',
                    'checked': false
                },
                {
                    'text': 'option 2',
                    'value': '2',
                    'checked': false
                },
                {
                    'text': 'option 3',
                    'value': '3',
                    'checked': true
                }
            ]
        };
    }])

    .directive('multipleOptionsField', function($compile){
	   return {
		  restrict: "E",
    		templateUrl: 'template.html',
            replace: false,
            scope: {
                field:'='
            }
    	}
    });
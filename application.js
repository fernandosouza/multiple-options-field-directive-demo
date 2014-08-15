angular.module('app', [])

    .controller('multipleOptionsController', ['$scope', function($scope){
    	$scope.fields = [
            {
                label: 'Multiple Options Field',
                type: '2',
                name: 'multiOptions' ,
                selected: '0',
                required: true,
                emptyString: 'Selecione uma opção',
                options: [
                    {
                        'text': 'option 1',
                        'value': '1'
                    },
                    {
                        'text': 'option 2',
                        'value': '2'
                    },
                    {
                        'text': 'option 3',
                        'value': '3'
                    }
                ]
            }
        ];

        window.fieldValues = $scope.fields;
    }])

    .directive('multipleOptionsField', function($compile){
	   return {
		  restrict: "E",
    		templateUrl: 'template.html',
            replace: false,
            scope: {
                fields:'='
            }
    	}
    });
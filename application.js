angular.module('app', [])

    .controller('multipleOptionsController', ['$scope', function($scope){
    	$scope.fields = [
            {
                label: 'Multiple Options Field',
                type: '2',
                name: 'multiOptions' ,
                selected: '',
                required: true,
                emptyString: 'Selecione uma opção',
                options: [
                    {
                        'text': 'option 1',
                        'value': '1',
                        'selected': false
                    },
                    {
                        'text': 'option 2',
                        'value': '2',
                        'selected': false
                    },
                    {
                        'text': 'option 3',
                        'value': '3',
                        'selected': false
                    }
                ]
            }
        ];

        window.fieldValues = $scope.fields;
    }])

    .directive('multipleOptionsField', function($compile){

        function controller($scope){
            var fields = $scope.fields;

            [].forEach.call(fields, function(field){
                var options = field.options;

                [].forEach.call(options, function(option){
                    if(option.selected){
                        field.selected = option;
                        return false;
                    }
                });
            });
        };

        return {
            restrict: "E",
    		templateUrl: 'template.html',
            replace: false,
            scope: {
                fields:'='
            },
            controller: controller
    	}
    });
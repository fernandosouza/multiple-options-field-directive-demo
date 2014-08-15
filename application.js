angular.module('app', [])

    .controller('multipleOptionsController', ['$scope', function($scope){
    	$scope.fields = [
            {
                label: 'Multiple Options Field 1',
                type: '2',
                name: 'multiOptions',
                selected: null,
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
                        'selected': true
                    },
                    {
                        'text': 'option 3',
                        'value': '3',
                        'selected': false
                    }
                ]
            },
            {
                label: 'Multiple Options Field 2',
                type: '1',
                name: 'multiOptions2',
                selected: null,
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
                        'selected': true
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
            replace: true,
            scope: {
                fields:'='
            },
            controller: controller
    	}
    });
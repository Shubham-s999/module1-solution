(function (){

    angular.module('firstapp', [])
    .controller('controller', bodyController);

    bodyController.$inject = ['$scope'];
    function bodyController($scope){

        // andular scope declaration
        $scope.items = "";
        $scope.message = "";
        $scope.checker = function (){

            // declaration
            var items = $scope.items;
            var item = $scope.items.split(',');
            var itemEmpty = true;
            var count = 0;

            // remove empty items
            item = item.filter(
                function(entry){
                        return entry.trim() != '';
            });

            // count item length and item array empty or not
            count = item.length;
            if( !count < 1){
                itemEmpty = false;
            }else{
                itemEmpty = true;
            }

            // show message
            if( itemEmpty == true && count == 0 ){
                $scope.message= "Please enter data first";
            }else if( count <= 3 && itemEmpty == false && !count <= 0 ){
                $scope.message = "Enjoy! " + count;
            }else if( count > 3 && itemEmpty == false ){
                $scope.message = "Too much! " + count;
            }

        }
    }
})();
angular.module('notareFrontendApp')
	.controller('RoomController', function ($scope, $http, $stateParams, $ionicModal) {
		$scope.messages = [
			{
				text: 'Dies ist ein Test',
				user: 'Daniel'
			}, {
				text: 'Dies ist ein anderer Test!',
				user: 'Pascal'
			}
		];

		$scope.roomID = $stateParams.roomID;

		/*$modalInstance.fromTemplateUrl('askForUserName.html', {
			scope: $scope,
			animate: 'slide-in-down'
		}).then(function (modal) {
			$scope.model = modal;
		});

		var modalInstance = $modal.open({
			animation: true,
			templateUrl: "askForUserName.html",
			controller: "UsernameCtrl",
			resolve: {
				user: function () {
					console.log($scope.name);
				}
			}
		});*/


	}).controller('UsernameCtrl', function ($scope, $modalInstance) {
		$scope.name = "";

		$scope.submit = function () {
			$modalInstance.close($scope.name);
		}

	});
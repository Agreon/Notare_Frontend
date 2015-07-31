angular.module('notareFrontendApp' /*, ['ngSocket']*/ )
	.controller('RoomController', function ($scope, $http, $stateParams, $modal /*, ngSocket*/ ) {

		//var socket = ngSocket();

		$scope.messages = [
			{
				text: 'Dies ist ein Test',
				user: 'Daniel'
			}, {
				text: 'Dies ist ein anderer Test!',
				user: 'Pascal'
			}
		];

		$scope.user = {
			username: 'name'
		};

		//$scope.user = "";

		/*$socket.on("update", function (msg) {
			//$("#msgs").append("<li>" + msg + "</li>");
			console.log(msg);
		});*/

		$scope.roomID = $stateParams.roomID;

	});
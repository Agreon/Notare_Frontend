'use strict';

angular.module('notareFrontendApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			})
			.state('room', {
				url: '/room/:roomID',
				templateUrl: 'app/room/room.html',
				controller: 'RoomController'
			});
	});
LampBike.controller('AppController', ['$scope', '$interval', function ($scope, $interval) {

	var intervalPromise = null;

	var timer = {
		minutes: 20,
		seconds: 0
	};

	$scope.timerString = {
		minutes: '20',
		seconds: '00',
	}

	$scope.lamps = {
		back: 0,
		front: 0,
		both: 0,
		none: 0
	};

	function updateTimerString() {
		$scope.timerString.minutes = (timer.minutes < 10) ? '0' + timer.minutes : '' + timer.minutes;
		$scope.timerString.seconds = (timer.seconds < 10) ? '0' + timer.seconds : '' + timer.seconds;
	}

	$scope.startStop = function ($event) {
		if (intervalPromise) {
			$event.currentTarget.innerHTML = 'Start';
			$event.currentTarget.classList.remove('stop');
			$interval.cancel(intervalPromise);
			intervalPromise = null;
			timer.minutes = 20;
			timer.seconds = 0;
			updateTimerString();
			$scope.lamps.back = 0;
			$scope.lamps.front = 0;
			$scope.lamps.both = 0;
			$scope.lamps.none = 0;
		} else {
			$event.currentTarget.innerHTML = 'Reset';
			$event.currentTarget.classList.add('stop');

			intervalPromise = $interval(function () {
				if (timer.seconds === 0) {
					timer.seconds = 59;
					--timer.minutes;
				} else {
					--timer.seconds;
				}
				updateTimerString();

				if (timer.minutes === 0 && timer.seconds === 0) {
					$interval.cancel(intervalPromise);
				}
			}, 1000);
		}
	};

	$scope.addBack = function () {
		++$scope.lamps.back;
	};

	$scope.addFront = function () {
		++$scope.lamps.front;
	};

	$scope.addBoth = function () {
		++$scope.lamps.both;
	};

	$scope.addNone = function () {
		++$scope.lamps.none;
	};

}]);

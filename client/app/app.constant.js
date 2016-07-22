(function(angular, undefined) {
  angular.module("wineBurglarApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);
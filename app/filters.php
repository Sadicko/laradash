<?php
// Filters out unauthorised requests.
Route::filter('site', 'AuthFilter@site');
Route::filter('api', 'AuthFilter@api');
Route::filter('userAPI', 'AuthFilter@userAPI');
Route::filter('tutorOrg', 'AuthFilter@tutorOrg');
Route::filter('tutorAPI', 'AuthFilter@tutorAPI');
Route::filter('guest', function () {
	if (Auth::check()) return Redirect::to('/');
});

// Adds CSRF protection.
Route::filter('csrf', function () {
	if (Session::token() != Input::get('_token')) {
		throw new Illuminate\Session\TokenMismatchException;
	}
});

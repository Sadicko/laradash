<?php

// Filters authentication details.
Route::filter('site', 'AuthFilter@site');
Route::filter('api', 'AuthFilter@api');
Route::filter('tutorAPI', 'AuthFilter@tutorAPI');

// Filters guests.
Route::filter('guest', function () {
	if (Auth::check()) return Redirect::to('/');
});

// Protects CSRF.
Route::filter('csrf', function () {
	if (Session::token() != Input::get('_token')) {
		throw new Illuminate\Session\TokenMismatchException;
	}
});

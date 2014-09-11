<?php

Route::get('/', ['before'=>'auth', 'uses'=>function () {
	return View::make('app');
}]);

// Login.
Route::get('login', array(
  'before' => 'guest',
  'uses'   => 'LoginController@create',
  'as'     => 'login.create'
));
Route::post('login', array(
  'before' => 'guest',
  'uses'   => 'LoginController@login',
  'as'     => 'login.store'
));
Route::get('logout', array(
  'uses' => 'LoginController@destroy',
  'as'   => 'logout'
));

// API.
Route::group(['prefix'=>'api', 'before'=>'api.auth'], function () {
	Route::get('test', function(){
		return Response::json('API test', 200);;
	});
	Route::model('organisations', 'Organisation');
	Route::model('tutors', 'Tutor');
	Route::model('attrs', 'Attr');
	Route::model('parts', 'Part');
	Route::resource('organisations', 'API\OrgsController');
	Route::resource('organisations.tutors', 'API\TutorsController');
	Route::resource('organisations.attrs', 'API\AttrsController');
	Route::resource('organisations.attrs.parts', 'API\PartsController');
});



App::error(function (Exception $exception) {
  Log::error($exception);
  
  if (method_exists($exception, 'getStatusCode')) {
    $code = $exception->getStatusCode();
  } else {
    $code = 500;
  }

  if(Request::segment(1) == "api") {
    $error = [
        'error'     =>  true,
        'message'   =>  $exception->getMessage(),
        'code'      =>  $code
    ];

    if(Config::get('app.debug')) {
      $error['trace'] = $exception->getTrace();
    }

    return Response::json( $error, $code);
  } else {
    return Response::make("Status: ".$code." Error: ".$exception->getMessage());
  }
});


App::missing(function ($exception) {
  if (Request::ajax() || Request::segment(1) == "api") {
    return Response::json([], 404);
  } else {
    return View::make('errors.missing');
  }
});
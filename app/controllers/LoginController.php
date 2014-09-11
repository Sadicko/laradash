<?php

class LoginController extends BaseController {

 
  /**
   * Returns the Login view.
   * @return View Login view.
   */
  public function create() {
    return View::make('login');
  }

  /**
   * Logs the user in.
   */
  public function login() {
    $creds = array(
      'email'    => Input::get('email'),
      'password' => Input::get('password')
    );

    $remember_me = Input::get('remember', 0);

    if( Auth::attempt($creds, $remember_me) ){
      return Redirect::to('/');
    } 

    return Redirect::route('login.create')
        ->withInput()
        ->withErrors(array('There is a problem with those credentials.'));

  }

  /**
   * Logs out the current user.
   * @return Redirect Sends the user to the login page.
   */
  public function destroy() {
    Auth::logout();
    return Redirect::to('/');
  }
}
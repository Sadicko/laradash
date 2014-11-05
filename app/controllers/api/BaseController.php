<?php namespace API;

use \View, Illuminate\Routing\Route;

abstract class BaseController extends \Controller {

	/**
	 * Constructs a controller.
	 * This is used to authenticate the request for particular methods.
	 */
	public function __construct() {
		$this->beforeFilter('tutorOrg', ['except' => ['auth']]);
		$this->beforeFilter('@validateShowPath', ['only' => ['show', 'update', 'destroy']]);
		$this->beforeFilter('userAPI', ['only'=>['store', 'update', 'destroy']]);
	}

	public function validateShowPath(Route $route) {}

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout() {
		if (! is_null($this->layout)) {
			$this->layout = View::make($this->layout);
		}
	}

}

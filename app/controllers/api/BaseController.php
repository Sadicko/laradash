<?php namespace API;

use \View;

class BaseController extends \Controller {

	/**
	 * Constructs a controller.
	 * This is used to authenticate the request for particular methods.
	 */
	public function __construct() {
		$this->beforeFilter('auth', ['except'=>['index', 'show']]);
	}

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

<?php

class AuthFilter {
	private function tutor() {
		$email = Request::getUser();
		$password = Request::getPassword();
		$userAuth = Input::get('userAuth', false);

		if(isset($email) && isset($password) && !$userAuth) {
			$tutor = Tutor::where('email', $email)->first();
			return $tutor && Hash::check($password, $tutor->password) ? $tutor : null;
		} else {
			return false;
		}
	}

	private function user() {
		$email = Request::getUser();
		$password = Request::getPassword();
		$userAuth = Input::get('userAuth', false);

		if(isset($email) && isset($password) && $userAuth) {
			$user = User::where('email', $email)->first();
			return $user && Hash::check($password, $user->password) ? $user : null;
		} else {
			return false;
		}
	}

	private function session() {
		return !Auth::guest();
	}

	private function basic() {
		$email = Request::getUser();
		$password = Request::getPassword();
		return isset($email) && isset($password);
	}

	public function tutorAPI() {
		if (!$this->tutor()) {
			return Response::json(null, 401);
		}
	}

	public function tutorOrg($route) {
		$org = $route->getParameter('organisations');
		$tutor = $this->tutor();
		if (!Input::get('userAuth', false) && ($tutor && $tutor->organisation_id !== $org->id)) {
			return Response::json(null, 403);
		}
	}

	public function userAPI() {
		if (!$this->user() || $this->session()) {
			return Response::json(null, 401);
		}
	}

	public function api() {
		if (!($this->tutor() || $this->user()) && !$this->session()) {
			return Response::json(null, 401);
		}
	}

	public function site() {
		if (!$this->session()) {
			return Redirect::guest('login');
		}
	}
}

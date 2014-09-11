<?php namespace API;

use \Organisation, \Tutor;
use \Input, \Validator, \Response;

class TutorsController extends BaseController {

	/**
	 * Gets accepted fields from the input.
	 * @return AssocArray The accepted fields.
	 */
	private function input() {
		return Input::only('name', 'email', 'password');
	}

	/**
	 * Validates the given data.
	 * @param  AssocArray $data The data to be validated.
	 * @return Validator The validator used to validate the data.
	 */
	private function validate($data) {
		return Validator::make($data, Tutor::$rules);
	}

	/**
	 * Creates (POSTs) a new tutor.
	 * @param Organisation $org Organisation to add the tutor to.
	 * @return Tutor The created tutor.
	 */
	public function store(Organisation $org) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$tutor = new Tutor($data);
			$tutor->organisation()->associate($org);
			$tutor->save();
			return Response::json($tutor);
		}
	}

	/**
	 * Updates (PUTs) a tutor.
	 * @param Organisation $org Organisation containing the tutor.
	 * @param Tutor $tutor Tutor to be retrieved.
	 * @return Tutor The updated tutor.
	 */
	public function update(Organisation $org, Tutor $tutor) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$tutor->update($data);
			return Response::json($tutor);
		}
	}

	/**
	 * Gets all tutors.
	 * @param Organisation $org Organisation containing the tutors.
	 * @return [Tutor] Array of tutors that have been stored.
	 */
	public function index(Organisation $org) {
		$org->load(['tutors']);
		$tutors = $org->tutors;
		return Response::json($tutors);
	}

	/**
	 * Deletes an tutor.
	 * @param Organisation $org Organisation containing the tutor.
	 * @param Tutor $tutor Tutor to be deleted.
	 * @return Boolean Success of the deletion.
	 */
	public function destroy(Organisation $org, Tutor $tutor) {
		if ($tutor->delete()) {
			return Response::json(['success'=>true]);
		} else {
			return Response::json(['success'=>false]);
		}
	}

	/**
	 * Gets an tutor.
	 * @param Organisation $org Organisation containing the tutor.
	 * @param Tutor $tutor Tutor to be retrieved.
	 * @return Tutor The tutor with the given id.
	 */
	public function show(Organisation $org, Tutor $tutor) {
		return Response::json($tutor);
	}
}

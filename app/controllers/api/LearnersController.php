<?php namespace API;

use \Organisation, \Learner;
use \Input, \Validator, \Response;

class LearnersController extends BaseController {

	/**
	 * Constructs a controller.
	 * This is used to authenticate the request for particular methods.
	 */
	public function __construct() {}

	/**
	 * Gets accepted fields from the input.
	 * @return AssocArray The accepted fields.
	 */
	private function input() {
		return Input::only('name', 'email');
	}

	/**
	 * Validates the given data.
	 * @param  AssocArray $data The data to be validated.
	 * @return Validator The validator used to validate the data.
	 */
	private function validate($data) {
		return Validator::make($data, Learner::$rules);
	}

	/**
	 * Creates (POSTs) a new learner.
	 * @param Organisation $org Organisation to add the learner to.
	 * @return Learner The created learner.
	 */
	public function store(Organisation $org) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$learner = new Learner($data);
			$learner->organisation()->associate($org);
			$learner->save();
			return Response::json($learner);
		}
	}

	/**
	 * Updates (PUTs) a learner.
	 * @param Organisation $org Organisation containing the learner.
	 * @param Learner $learner Learner to be retrieved.
	 * @return Learner The updated learner.
	 */
	public function update(Organisation $org, Learner $learner) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$learner->update($data);
			return Response::json($learner);
		}
	}

	/**
	 * Gets all learners.
	 * @param Organisation $org Organisation containing the learners.
	 * @return [Learner] Array of learners that have been stored.
	 */
	public function index(Organisation $org) {
		$org->load(['learners']);
		$learners = $org->learners;
		return Response::json($learners);
	}

	/**
	 * Deletes an learner.
	 * @param Organisation $org Organisation containing the learner.
	 * @param Learner $learner Learner to be deleted.
	 * @return Boolean Success of the deletion.
	 */
	public function destroy(Organisation $org, Learner $learner) {
		if ($learner->delete()) {
			return Response::json(['success'=>true]);
		} else {
			return Response::json(['success'=>false]);
		}
	}

	/**
	 * Gets an learner.
	 * @param Organisation $org Organisation containing the learner.
	 * @param Learner $learner Learner to be retrieved.
	 * @return Learner The learner with the given id.
	 */
	public function show(Organisation $org, Learner $learner) {
		return Response::json($learner);
	}
}

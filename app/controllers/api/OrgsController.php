<?php namespace API;

use \Organisation;
use \Input, \Validator, \Response;

class OrgsController extends BaseController {

	/**
	 * Constructs a controller.
	 * This is used to authenticate the request for particular methods.
	 */
	public function __construct() {
		$this->beforeFilter('tutorOrg', ['only' => ['show']]);
		$this->beforeFilter('userAPI', ['only'=>['index', 'store', 'update', 'destroy']]);
	}

	/**
	 * Gets accepted fields from the input.
	 * @return AssocArray The accepted fields.
	 */
	private function input() {
		return Input::all();
	}

	/**
	 * Creates (POSTs) a new organisation.
	 * @return Organisation The created organisation.
	 */
	public function store() {
		$data = $this->input();
		$validator = Validator::make($data, Organisation::$storeRules);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$org = Organisation::create($data);
			return Response::json($org);
		}
	}

	/**
	 * Updates (PUTs) an organisation.
	 * @param Organisation $org Organisation to be updated.
	 * @return Organisation The updated organisation.
	 */
	public function update(Organisation $org) {
		$data = $this->input();
		$validator = Validator::make($data, Organisation::$updateRules);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$org->update($data);
			return Response::json($org);
		}
	}

	/**
	 * Gets all organisations.
	 * @return [Organisation] Array of organisations that have been stored.
	 */
	public function index() {
		$orgs = Organisation::all();
		if(!Input::has('hideRelations')) {
			$orgs->load(['tutors', 'attrs.parts']);
		}
		return Response::json($orgs);
	}

	/**
	 * Deletes an organisation.
	 * @param Organisation $org Organisation to be deleted.
	 * @return Boolean Success of the deletion.
	 */
	public function destroy(Organisation $org) {
		if ($org->delete()) {
			return Response::json(['success'=>true]);
		} else {
			return Response::json(['success'=>false]);
		}
	}

	/**
	 * Gets an organisation.
	 * @param Organisation $org Organisation to be retrieved.
	 * @return Organisation The organisation with the given id.
	 */
	public function show(Organisation $org) {
		$org->load(['tutors', 'attrs.parts', 'learners']);
		return Response::json($org);
	}
}

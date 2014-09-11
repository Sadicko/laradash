<?php namespace API;

use \Organisation, \Attr;
use \Input, \Validator, \Response;

class AttrsController extends BaseController {

	/**
	 * Gets accepted fields from the input.
	 * @return AssocArray The accepted fields.
	 */
	private function input() {
		return Input::only('name');
	}

	/**
	 * Validates the given data.
	 * @param  AssocArray $data The data to be validated.
	 * @return Validator The validator used to validate the data.
	 */
	private function validate($data) {
		return Validator::make($data, Attr::$rules);
	}

	/**
	 * Creates (POSTs) a new attr.
	 * @param Organisation $org Organisation to add the attr to.
	 * @return Attr The created attr.
	 */
	public function store(Organisation $org) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$attr = new Attr($data);
			$attr->organisation()->associate($org);
			$attr->save();
			return Response::json($attr);
		}
	}

	/**
	 * Updates (PUTs) a attr.
	 * @param Organisation $org Organisation containing the attr.
	 * @param Attr $attr Attr to be retrieved.
	 * @return Attr The updated attr.
	 */
	public function update(Organisation $org, Attr $attr) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$attr->update($data);
			return Response::json($attr);
		}
	}

	/**
	 * Gets all attrs.
	 * @param Organisation $org Organisation containing the attrs.
	 * @return [Attr] Array of attrs that have been stored.
	 */
	public function index(Organisation $org) {
		$org->load(['attrs']);
		$attrs = $org->attrs;
		if(!Input::has('hideRelations')) {
			$attrs->load(['parts']);
		}
		return Response::json($attrs);
	}

	/**
	 * Deletes an attr.
	 * @param Organisation $org Organisation containing the attr.
	 * @param Attr $attr Attr to be deleted.
	 * @return Boolean Success of the deletion.
	 */
	public function destroy(Organisation $org, Attr $attr) {
		if ($attr->delete()) {
			return Response::json(['success'=>true]);
		} else {
			return Response::json(['success'=>false]);
		}
	}

	/**
	 * Gets an attr.
	 * @param Organisation $org Organisation containing the attr.
	 * @param Attr $attr Attr to be retrieved.
	 * @return Attr The attr with the given id.
	 */
	public function show(Organisation $org, Attr $attr) {
		$attr->load(['parts']);
		return Response::json($attr);
	}
}

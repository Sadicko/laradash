<?php namespace API;

use \Organisation, \Attr, \Part;
use \Input, \Validator, \Response;

class PartsController extends BaseController {

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
		return Validator::make($data, Part::$rules);
	}

	/**
	 * Creates (POSTs) a new part.
	 * @param Organisation $org Organisation to add the part to.
	 * @return Part The created part.
	 */
	public function store(Organisation $org, Attr $attr) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$part = new Part($data);
			$part->attr()->associate($attr);
			$part->save();
			return Response::json($part);
		}
	}

	/**
	 * Updates (PUTs) a part.
	 * @param Organisation $org Organisation containing the part.
	 * @param Part $part Part to be retrieved.
	 * @return Part The updated part.
	 */
	public function update(Organisation $org, Attr $attr, Part $part) {
		$data = $this->input();
		$validator = $this->validate($data);

		if ($validator->fails()) {
			return Response::json(['success'=>false, 'errors'=>$validator->errors() ], 400);
		} else {
			$part->update($data);
			return Response::json($part);
		}
	}

	/**
	 * Gets all parts.
	 * @param Organisation $org Organisation containing the parts.
	 * @return [Part] Array of parts that have been stored.
	 */
	public function index(Organisation $org, Attr $attr) {
		$attr->load(['parts']);
		$parts = $attr->parts;
		return Response::json($parts);
	}

	/**
	 * Deletes an part.
	 * @param Organisation $org Organisation containing the part.
	 * @param Part $part Part to be deleted.
	 * @return Boolean Success of the deletion.
	 */
	public function destroy(Organisation $org, Attr $attr, Part $part) {
		if ($part->delete()) {
			return Response::json(['success'=>true]);
		} else {
			return Response::json(['success'=>false]);
		}
	}

	/**
	 * Gets an part.
	 * @param Organisation $org Organisation containing the part.
	 * @param Part $part Part to be retrieved.
	 * @return Part The part with the given id.
	 */
	public function show(Organisation $org, Attr $attr, Part $part) {
		return Response::json($part);
	}
}

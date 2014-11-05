<?php

class Part extends \Eloquent {
	protected $fillable = ['name'];

	public static $storeRules = [
		'name' => 'required|min:1'
	];
	public static $updateRules = [
		'name' => 'min:1'
	];

	public function attr() {
		return $this->belongsTo('Attr');
	}
}
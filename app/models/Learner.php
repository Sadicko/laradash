<?php

class Learner extends \Eloquent {

	// Add your validation rules here
	public static $storeRules = [
		'identifier' 	=> 'required|min:1',
		'name' 		=> 'required|min:1'
	];
	public static $updateRules = [
		'identifier' 	=> 'min:1',
		'name' 		=> 'min:1'
	];

	protected $fillable = ['identifier', 'name'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

}
<?php

class Learner extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		'identifier' 	=> 'required',
		'name' 		=> 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['identifier', 'name'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

}
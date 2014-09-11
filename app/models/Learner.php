<?php

class Learner extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		'email' 	=> 'required|email',
		'name' 		=> 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['email', 'name'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

}
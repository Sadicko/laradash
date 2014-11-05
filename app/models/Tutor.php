<?php

class Tutor extends \Eloquent {

	// Add your validation rules here
	public static $storeRules = [
		'email' 	=> 'required|email|unique:tutors',
		'name' 		=> 'required|min:1',
		'password'	=> 'required|min:6'
	];
	public static $updateRules = [
		'email' 	=> 'email|unique:tutors',
		'name' 		=> 'min:1',
		'password'	=> 'min:6'
	];

	// Don't forget to fill this array
	protected $fillable = ['email', 'name', 'password'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

	public function setPasswordAttribute($password) {
	    $this->attributes['password'] = Hash::make($password);
	}

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password'];

}
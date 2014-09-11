<?php

class Tutor extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		'email' 	=> 'required|email',
		'name' 		=> 'required',
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
<?php

class Organisation extends \Eloquent {
	protected $fillable = ['name', 'lrsUser', 'lrsPass'];

	public static $storeRules = [
		'name'=>'required|min:4'
	];
	public static $updateRules = [
		'name'=>'required|min:4'
	];

	public function tutors() {
		return $this->hasMany('Tutor');
	}

	public function attrs() {
		return $this->hasMany('Attr');
	}

	public function learners() {
		return $this->hasMany('Learner');
	}

}
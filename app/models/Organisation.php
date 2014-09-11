<?php

class Organisation extends \Eloquent {
	protected $fillable = ['name', 'lrsUser', 'lrsPass'];

	public static $rules = [
		'name'=>'required|min:4'
	];

	public function tutors() {
		return $this->hasMany('Tutor');
	}

	public function attrs() {
		return $this->hasMany('Attr');
	}

}
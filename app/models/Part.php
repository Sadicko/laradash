<?php

class Part extends \Eloquent {
	protected $fillable = ['name'];

	public static $rules = [
		'name' => 'required'
	];

	public function attr() {
		return $this->belongsTo('Attr');
	}
}
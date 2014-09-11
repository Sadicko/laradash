<?php

class Attr extends \Eloquent {
	protected $table = 'attributes';

	public static $rules = [
		'name' => 'required'
	];
	
	protected $fillable = ['name'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

	public function parts() {
		return $this->hasMany('Part');
	}
}
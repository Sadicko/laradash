<?php

class Attr extends \Eloquent {
	protected $table = 'attributes';

	public static $storeRules = [
		'name' => 'required|min:1'
	];
	public static $updateRules = [
		'name' => 'min:1'
	];
	
	protected $fillable = ['name'];

	public function organisation() {
		return $this->belongsTo('Organisation');
	}

	public function parts() {
		return $this->hasMany('Part');
	}
}
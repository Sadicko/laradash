<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLearnersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('learners', function($table) {
	        $table->increments('id');
	        $table->string('identifier');
	        $table->string('name');
	        $table->timestamps();

	        // Foreign keys.
	        $table->integer('organisation_id')->unsigned();
	        $table->foreign('organisation_id')
	        	->references('id')
	        	->on('organisations')
      			->onDelete('cascade');
	    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('learners');
	}

}

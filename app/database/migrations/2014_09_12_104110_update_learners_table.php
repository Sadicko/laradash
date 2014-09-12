<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateLearnersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('learners', function(Blueprint $table) {
			DB::statement('ALTER TABLE `learners` CHANGE COLUMN `email` `identifier` varchar(2047) NOT NULL;');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('learners', function(Blueprint $table) {
			DB::statement('ALTER TABLE `learners` CHANGE COLUMN `identifier` `email` varchar(2047) NOT NULL;');
		});
	}

}

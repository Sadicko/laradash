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
			$table->renameColumn('email', 'identifier');
			DB::statement('ALTER TABLE `learners` ALTER COLUMN `identifier` varchar(2047)')
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('learners', function(Blueprint $table) {
			$table->renameColumn('identifier', 'email');
			DB::statement('ALTER TABLE `learners` ALTER COLUMN `email` varchar(255)')
		});
	}

}

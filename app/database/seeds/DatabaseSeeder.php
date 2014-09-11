<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('OrganisationsTableSeeder');
		$this->call('TutorsTableSeeder');
		$this->call('AttributesTableSeeder');
		$this->call('PartsTableSeeder');
		$this->call('UsersTableSeeder');
	}

}

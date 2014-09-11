<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		User::create([
			'name' => 'Ryan',
			'email' => 'ryan.smith@ht2.co.uk',
			'password' => Hash::make('password')
		]);
	}

}
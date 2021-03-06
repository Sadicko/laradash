<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run() {
		$name = getenv('user_name') ? getenv('user_name') : 'Dummy';
		$email = getenv('user_email') ? getenv('user_email') : 'ex@mple.co.uk';
		$password = getenv('user_password') ? getenv('user_password') : 'password';

		User::create([
			'name' => $name,
			'email' => $email,
			'password' => $password
		]);
	}

}
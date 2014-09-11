<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class TutorsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();
		$faker->seed(1234);

		foreach( Organisation::get() as $org ) {
			foreach(range(1, $faker->numberBetween(1, 10)) as $index) {
				$tutor = new Tutor([
					'name' 		=> $faker->name,
					'email' 	=> $faker->email,
					'password' 	=> Hash::make('password')
				]);

				$tutor = $org->tutors()->save($tutor);
			}
		}
	}

}
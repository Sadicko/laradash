<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class LearnersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach( Organisation::get() as $org ) {
			foreach(range(1, $faker->numberBetween(1, 10)) as $index) {
				$learner = new Learner([
					'name' 		=> $faker->name,
					'email' 	=> $faker->email
				]);

				$learner = $org->learners()->save($learner);
			}
		}
	}

}
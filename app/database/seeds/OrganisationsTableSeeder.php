<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class OrganisationsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, $faker->numberBetween(5, 10)) as $index) {
			Organisation::create([
				'name' => $faker->company,
				'lrsUser' => $faker->userName,
				'lrsPass' => '345hb34b5uh34b54u6hu45b6hub35b'
			]);
		}
	}

}
<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class PartsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach( Attr::get() as $attr ) {
			foreach(range(1, $faker->numberBetween(1, 10)) as $index) {
				$part = new Part([
					'name' 		=> $faker->domainWord
				]);

				$part = $attr->parts()->save($part);
			}
		}
	}

}
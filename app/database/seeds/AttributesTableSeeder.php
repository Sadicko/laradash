<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class AttributesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach( Organisation::get() as $org ) {
			foreach(range(1, $faker->numberBetween(1, 10)) as $index) {
				$attribute = new Attr([
					'name' 		=> $faker->domainWord
				]);

				$attribute = $org->attrs()->save($attribute);
			}
		}
	}

}
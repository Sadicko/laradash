<?php

return [
	'fetch' => PDO::FETCH_CLASS,
	'default' => 'mysql',
	'connections' => [
		'mysql' => [
			'driver'    => 'mysql',
			'host'      => 'localhost',
			'database'  => 'laradash',
			'username'  => getenv('db_username'),
			'password'  => getenv('db_password'),
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
		]
	],
	'migrations' => 'migrations'
];

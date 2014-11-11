<?php

// Creates the application.
$app = new Illuminate\Foundation\Application;

// Detects the environment.
$env = $app->detectEnvironment([
	getenv('laradash_env') ?: 'debug' => [gethostname()]
]);

// Binds paths.
$app->bindInstallPaths(require __DIR__.'/paths.php');

// Loads the application.
$framework = $app['path.base'].'/vendor/laravel/framework/src';

require $framework.'/Illuminate/Foundation/start.php';

return $app;

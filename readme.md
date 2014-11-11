# Laradash
> An administrator dashboard for the Learning Locker feedback app.

*Laradash is copyright [HT2](http://ht2.co.uk)*

## Users
### Requirements
1. MySQL
2. Composer
3. PHP

### Installation
1. Get the source by either:
  1. Cloning the repository with `git clone https://github.com/ryansmith94/laradash.git`.
  2. [Downloading the repository](https://github.com/ryansmith94/laradash/archive/master.zip).
2. Install the dependencies with `composer install`.
3. Add your username and password for your database to `app/config/debug/database.php`.
4. Migrate the database with `php artisan migrate`.
5. Seed the database `php artisan db:seed`.
6. Open Laradash in your browser and login using `ex@mple.com` and `password`.

### Upgrading
1. Get the latest source by either:
  1. Cloning the repository with `git clone https://github.com/ryansmith94/laradash.git`.
  2. [Downloading the repository](https://github.com/ryansmith94/laradash/archive/master.zip).
2. Install the dependencies with `composer install`.
3. Migrate the database with `php artisan migrate`.

### Production Configuration
In production please replace steps 3-6 in the installation steps with the following.

1. Set the following environment variables.
  1. `db_username` - your database username.
  2. `db_password` - your database password.
  3. `user_name` - your desired user name.
  4. `user_email` - your desired email.
  5. `user_password` - your desired password.
  6. `laradash_env` - your Laradash environment, most likely `production`.
2. Run step 4 of the installation steps.
3. Seed the database with your user `php artisan db:seed --class=UsersTableSeeder`.
4. I advise you to remove `user_name`, `user_email`, and `user_password` from you environment variables after step 3.
5. Open Laradash in your browser and login using your `user_email` and `user_password`.

@todo remove the need for `user_name`, `user_email`, and `user_password` in the environment variables.

## Developers
Tasks for this project are currently recorded via Asana. You may however contribute to this project via [issues](/issues) and [pull request](/pulls), however, please see the [guidelines](/contributing.md) before doing so.

### Getting Started
1. Install [requirements](#requirements).
2. [Install and setup](#installation) Laradash.
3. Change the code.
4. Commit and push your changes to Github.
5. Create a [pull request](/pulls) on Github.

Note that Laradash is built upon the [Laravel](http://laravel.com/) PHP framework. To learn more about the code structure, please view the [Laravel documentation](laravel.com/docs/).

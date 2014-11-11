<?php

return [
  'connections' => [
    'mysql' => [
      'username'  => getenv('db_username'),
      'password'  => getenv('db_password')
    ]
  ]
];

@extends('layout')

@section('content')

  <h2>Admin Login</h2>

  {{ Form::open(array('route' => 'login.store', 'class' => 'form-horizontal')) }}

    <div class="form-group">
      {{ Form::label('email', 'Email', array('class' => 'control-label')) }}
      <div>
        {{ Form::text('email','',array('class' => 'form-control')) }}
      </div>
    </div>

    <div class="form-group">
      {{ Form::label('password', 'Password', array('class' => 'control-label')) }}
      <div>
        {{ Form::password('password',array('class' => 'form-control')) }}
      </div>
    </div>

    <div class="form-group">
      <div>
        {{ Form::submit('Submit',array('class' => 'btn btn-primary center-block')) }}
      </div>
    </div>

  {{ Form::close() }}

@stop
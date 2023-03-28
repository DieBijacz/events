@extends('layout')

@section('content')
<div class="flex-2">
  <div class="side">
    <ul id="main-menu">
      <li>
        <label for="latest-input">latest
          <input type="radio" class="menu-radio-btn" id="latest-input" name="menu-checkbox" value="latest">
        </label>
      </li>
      <li>
        <label for="search-input">search
          <input type="radio" class="menu-radio-btn" id="search-input" name="menu-checkbox" value="search">
        </label>
      </li>
      <li>
        <label for="explore-input">explore
          <input type="radio" class="menu-radio-btn" id="explore-input" name="menu-checkbox" value="explore">
        </label>
      </li>
      <li>
        <label for="create-input">create
          <input type="radio" class="menu-radio-btn" id="create-input" name="menu-checkbox" value="create">
        </label>
      </li>
    </ul>
  </div>
  <div class="side">
    <div class="home-page-content">
      <div class="content" data-content='latest'>
        <x-latest :events='$events' />
      </div>
      <div class="content" data-content='search'>
        <x-search />
      </div>
      <div class="content" data-content='explore'>
        <x-explore />
      </div>
      <div class="content" data-content='create'>
        <x-create />
      </div>
    </div>
  </div>
</div>
@endsection
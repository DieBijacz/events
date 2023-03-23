<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <title>events</title>
  @vite(['resources/scss/main.scss', 'resources/js/app.js'])
</head>

<body>
  <div class="grid-2">
    <div class="side">
      <ul id="main-menu">
        <li>
          <label for="latest">latest
            <input type="radio" id="latest" name="menu-checkbox" value="latest">
          </label>
        </li>
        <li>
          <label for="search">search
            <input type="radio" id="search" name="menu-checkbox" value="search">
          </label>
        </li>
        <li>
          <label for="explore">explore
            <input type="radio" id="explore" name="menu-checkbox" value="explore">
          </label>
        </li>
        <li>
          <label for="create">create
            <input type="radio" id="create" name="menu-checkbox" value="create">
          </label>
        </li>
      </ul>
    </div>
    <div class="side">
      <div id="home-page-content">
        <div class="content" data-content='latest'>
          <x-latest />
        </div>
        <div class="content" data-content='search'>
          <x-search />
        </div>
        <div class="content" data-content='explore'>explore</div>
        <div class="content" data-content='create'>
          <x-create />
        </div>
      </div>
    </div>
  </div>
</body>

</html>
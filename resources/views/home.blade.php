<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>events</title>
  @vite(['resources/scss/app.scss', 'resources/js/app.js'])
</head>

<body>
  <nav>
    <a href="/" class="logo">evente</a>
  </nav>
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
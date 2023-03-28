@props(['events'])

<div id="latest">
  <div class="carousel-container">
    <div class="carousel">
      @foreach ($events as $event)
      <a href="/event/{{$event->id}}" class="carousel-cell" data-value='1'>{{$event->location}}</a>
      @endforeach
    </div>
  </div>
</div>
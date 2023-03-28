<div id="create">
  {{-- IF LOGGED IN --}}
  <div>
    <div class="event-header">
      <div id="calendar-selected-date" class="date date-format-2">
        <div id="calendar-selected-day" class="day">24</div>
        <div>
          <p id='calendar-month' class="month">MAR</p>
          <p id='calendar-year'>2024</p>
        </div>
      </div>
      <div class="title-location">
        <div>Eminem</div>
        <div>London</div>
      </div>
    </div>
    <div id="form-container-with-photos">
      <form id="create-event-form" action="/event/create">
        @csrf
        <label for="create-title">title</label>
        <input id="create-title" type="text">
        <label for="create-date">date</label>
        <input id="create-date" type="date">
        <label for="create-locaiton">where</label>
        <input id="create-locaiton" type="text">
        <button type="submit">submit</button>
      </form>
      <div id="photos">
        <div class="photo">img</div>
        <div class="photo">img</div>
        <div class="photo">img</div>
      </div>
    </div>
  </div>
</div>
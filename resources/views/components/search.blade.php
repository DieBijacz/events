<div id="search">
  <div class="field">
    <label for="what">What?
      <div class="swtich">
        <span>any</span>
        <span>select</span>
      </div>
      <input type="checkbox" id="what" class="checkbox-toggle" name='checkbox-what'>
    </label>
    <div id='toggle-section-what' class="toggle-section">
      <div id="search-select-what">
        <div class="cell">
          <i class="fa-solid fa-masks-theater"></i>
          <p>theater</p>
        </div>
        <div class="cell">
          <i class="fa-solid fa-guitar"></i>
          <p>concert</p>
        </div>
        <div class="cell">
          <i class="fa-solid fa-champagne-glasses"></i>
          <p>ocasional</p>
        </div>
        <div class="cell">
          <i class="fa-solid fa-hippo"></i>
          <p>circus / zoo</p>
        </div>
        <div class="cell">
          <i class="fa-solid fa-masks-theater"></i>
          <p>theater</p>
        </div>
        <div class="cell">
          <i class="fa-solid fa-masks-theater"></i>
          <p>theater</p>
        </div>
      </div>
    </div>
  </div>

  <div class="field">
    <label for="when">When?
      <div class="swtich">
        <span>this week</span>
        <span>calendar</span>
      </div>
      <input type="checkbox" id="when" class="checkbox-toggle" name='checkbox-when'>
    </label>
    <div id='toggle-section-when' class="toggle-section">
      <div id="calendar">
        <div id="calendar-controls">
          <button id="prev-month" type="button">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div id="calendar-selected-date" class="date-format-1">
            <div id="calendar-selected-day" class="day"></div>
            <div>
              <p id='calendar-month' class="month"></p>
              <p id='calendar-year'></p>
            </div>
          </div>
          <button id="next-month" type="button">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <ul id="calendar-weeks">
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        <ul id="calendar-days"></ul>
      </div>
    </div>
  </div>

  <div class="field">
    <label for="where">Where?
      <div class="swtich">
        <span>local</span>
        <span>travel</span>
      </div>
      <input type="checkbox" id="where" class="checkbox-toggle" name='checkbox-where'>
    </label>
    <div id='toggle-section-where' class="toggle-section">
      content
    </div>
  </div>

  <button type="submit" id="search-button">search</button>
</div>
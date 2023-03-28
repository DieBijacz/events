<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
  public function index()
  {
    return view('home', [
      'events' => Event::latest()->get()
    ]);
  }

  public function show(Event $event)
  {
    return view('event', ['event' => $event]);
  }
}

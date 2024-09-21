<!-- src/routes/admin/+page.svelte -->
<script>
    import { events } from '$lib/stores';
  
    let newEventName = '';
    let newEventDate = '';
  
    function addEvent() {
      events.update(evts => [...evts, { name: newEventName, date: newEventDate, registeredUsers: [] }]);
      newEventName = '';
      newEventDate = '';
    }
  </script>
  
  <h1>Admin Dashboard</h1>
  
  <div>
    <h2>Create New Event</h2>
    <input type="text" placeholder="Event Name" bind:value={newEventName} />
    <input type="date" bind:value={newEventDate} />
    <button on:click={addEvent}>Create Event</button>
  </div>
  
  <div>
    <h2>All Events</h2>
    <ul>
      {#each $events as event}
        <li>{event.name} - {event.date}</li>
      {/each}
    </ul>
  </div>
  
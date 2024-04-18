<script lang="ts">
	import FullCalendar, { type CalendarOptions } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import frLocale from '@fullcalendar/core/locales/fr';

	let options: CalendarOptions = {
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin],
		locale: frLocale,
		events: [
			{ title: 'Event Avril 3', start: '2024-04-09T12:30:00', allDay: false }
		]
	};
</script>

<section class="c-calendar">
	<FullCalendar {options} />
</section>

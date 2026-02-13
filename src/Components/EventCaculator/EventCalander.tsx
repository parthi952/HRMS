import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

type CalendarEvent = {
  title: string;
  date: string;
};

const EventCalendar: React.FC = () => {
  const events: CalendarEvent[] = [
    { title: "Team Meeting", date: "2026-02-15" },
    { title: "Leave - John", date: "2026-02-17" },
    { title: "Payroll Day", date: "2026-02-25" },
  ];

  return (
    <div className="p-4 bg-white rounded shadow">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </div>
  );
};

export default EventCalendar;
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
  
};


type CalendarViewProps = {
  events: CalendarEvent[];
  EventColor: string;
  handleDateClick: (arg: any) => void;
  
};


const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  EventColor,
  handleDateClick,
  
}) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
      height="auto"
      eventBackgroundColor={EventColor}
      
    />
  );
};

export default CalendarView;
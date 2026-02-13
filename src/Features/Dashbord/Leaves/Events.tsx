import { useEffect, useState } from "react";
import CalendarView from "../../../Components/Common/Calander/CalendarView";
import { Button } from "../../../Components/Common/Button";

export type NotifyScope = "ALL" | "TEAM" | "DEPARTMENT" | "EMPLOYEE";

export interface EventFormData {
  title: string;
  startDateTime: string;
  endDateTime: string;
  category: string;
  plan: string;
  description: string;
  notifyScope: NotifyScope;
  notifyTargets: string[];
}




const API_URL = "http://localhost:3001/Events";
export const Events = () => {
 const [EventDatas, setEventDatas] = useState<EventFormData[]>([]);

 const fetchEvents = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data: EventFormData[] = await response.json();
      setEventDatas(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    console.log("Fetched Events:", EventDatas); // Debug log to check fetched data
  }, []);







  const handleDateClick = (arg: any) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  const AddEvent = () => {
    alert("Add Event button clicked! Implement your logic here.");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">

      {/* Left Sidebar - Event Details */}
      <div className="lg:w-1/3 space-y-6">

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Event Schedules
          </h1>
          <div className="text-sm text-gray-600">
            <Button 
              ClickToAction={AddEvent} 
              B_name="Add Event"
            />
          </div>
        </div>

        {/* Event Lists Container */}
        <div className="space-y-4">

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Upcoming Events
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 hover:bg-blue-50 p-2 rounded-md transition-colors">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                Rath Yatra - 16th July 2026
              </li>
              <li className="flex items-center text-gray-700 hover:bg-blue-50 p-2 rounded-md transition-colors">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                Other Event
              </li>
            </ul>
          </div>

          {/* Holidays */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Holidays
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 hover:bg-green-50 p-2 rounded-md transition-colors">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                {EventDatas.length > 0 ? (
                  EventDatas[0].title + " - " + new Date(EventDatas[0].startDateTime).toLocaleDateString()
                ) : (
                  "No holidays available"
                )}
              </li>
              <li className="flex items-center text-gray-700 hover:bg-green-50 p-2 rounded-md transition-colors">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                Gandhi Jayanti - 2nd October 2026
              </li>
            </ul>
          </div>

          {/* Celebrations */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Celebrations
            </h2>
            
            {/* Categories */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Categories</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 hover:bg-purple-50 p-2 rounded-md transition-colors">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Diwali - 4th November 2026
                </li>
                <li className="flex items-center text-gray-700 hover:bg-purple-50 p-2 rounded-md transition-colors">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Christmas - 25th December 2026
                </li>
              </ul>
            </div>

            {/* Personal Events */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Personal Events</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 hover:bg-purple-50 p-2 rounded-md transition-colors">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                  Birthday
                </li>
                <li className="flex items-center text-gray-700 hover:bg-purple-50 p-2 rounded-md transition-colors">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                  Anniversary
                </li>
                <li className="flex items-center text-gray-700 hover:bg-purple-50 p-2 rounded-md transition-colors">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                  Other
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="lg:w-2/3 bg-white rounded-lg shadow-sm p-4">
        <CalendarView
          events={EventDatas.map(event => ({
            title: event.title,
            start: event.startDateTime,
            end: event.endDateTime,
          }))}
          handleDateClick={handleDateClick}
          EventColor="#88aeeb"
        />
      </div>
    </div>
  );
};
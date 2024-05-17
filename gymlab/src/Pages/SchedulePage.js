import React, { useState, useEffect } from "react";
import SmallBanner from "../Components/SmallBanner";
import Pill from "../Components/SchedulePageComponents/Pill";
import "../Styles/SchedulePageStyles/SchedulePage.css";

const SchedulePage = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [schedule, setSchedule] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [dataReady, setDataReady] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setDataReady(false);
      try {
        const response = await fetch(process.env.PUBLIC_URL + "/schedule.json");
        const data = await response.json();

        if (data) {
          setSchedule(data);
          setDataReady(true);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error during files download:", error);
      }
    };

    fetchData();
  }, []);

  const changeSchedule = (selectedDayName) => {
    setSelectedDay(selectedDayName);
  };

  return (
    <div className="schedulePage">
      <SmallBanner title="Schedule" />
      <div className="daysButtonsContainer">
        {days.map((day) => (
          <Pill
            content={day}
            name={day === selectedDay ? "selected" : day}
            onClick={() => changeSchedule(day)}
          />
        ))}
      </div>

      {dataReady ? (
        <div className="scheduleContainer">
          {schedule[selectedDay] ? (
            schedule[selectedDay].map((activity, index) => (
              <div className="activityItem">
                <div className="activityName" key={Math.random(1, 10000)}>
                  {activity[0]}
                </div>
                <div className="activityHours" key={Math.random(1, 10000)}>
                  {activity[1]}
                </div>
                <div className="activityTrainer" key={Math.random(1, 10000)}>
                  {activity[2]}
                </div>
                <Pill className="joinNowBtn" name="joinNow" content="Join Now"/>
              </div>
            ))
          ) : (
            <div className="infoContainer">Nothing planned for {selectedDay}</div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default SchedulePage;

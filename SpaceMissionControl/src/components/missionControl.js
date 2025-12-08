import { useState } from "react";

import styles from "./missionControl-styles.css";

import MissionCard from "./missionCard.js";
import MissionAction from "./missionAction.js";
import MissionFilter from "./missionFilter.js";

function MissionControl({ initialMissions }) {
  //function for the missions
  const INITIAL_FILTER = "All"; //the initial filter is set to ALL

  const [missions, setMissions] = useState(initialMissions); //missions is current state (array of missions), setMission is the function to update missions state and trigger re-render
  const [filter, setFilter] = useState(INITIAL_FILTER); //filter is the current filter state ("All", "Planned", etc.), setFilter is the function that will update filter

  function updateMissionStatus(id, newStatus) {
    //function to change the status of a mission
    setMissions(
      (
        prevMissions //current state of the mission
      ) =>
        prevMissions.map(
          (
            mission //return new array called mission going through each prevMission
          ) => (mission.id === id ? { ...mission, status: newStatus } : mission) //if the id matches, change the status of that mission to newStatus
        )
    );
  }

  const filteredMissions = missions.filter(
    (mission) => filter === "All" || mission.status === filter
  );
  // Create a new array of missions based on the current filter
  // If filter is "All" → return all missions
  // Otherwise → return only missions matching the selected status

  return (
    //title
    <div>
      <h1>Space Mission Control</h1>

      <div className={styles.filterContainer}>
        <MissionFilter //Render MissionFilter component
          setFilter={setFilter} // Pass down setFilter so the child can update the filter in the parent
        />
      </div>

      {filteredMissions.map((mission) => {
        const { id, name, status, crew } = mission;
        // Destructure mission properties for easier use

        return (
          <div
            key={id}
            className={styles.missionContainer} // Each mission must have a unique key
          >
            <div>
              <MissionCard
                name={name}
                status={status}
                crew={crew} // Render mission details
              />
            </div>

            <div>
              <MissionAction // use button to update status
                missionId={id}
                onUpdateMissionStatus={updateMissionStatus} //Pass missionId and parent callback function
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MissionControl;

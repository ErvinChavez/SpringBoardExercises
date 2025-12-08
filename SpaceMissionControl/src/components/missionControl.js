import { useState } from "react"; // useState lets this component store and update data over time //Still not sure how it works but saw it's needed along with missionFilter to be able to change status
import MissionCard from "./missionCard"; // Displays mission info
import MissionAction from "./missionAction"; // Buttons to change mission status
import MissionFilter from "./missionFilter"; // Buttons to filter the mission list

function MissionControl({ initialMissions }) {
  // Receive the initial mission list from App.js using props

  const [missions, setMissions] = useState(initialMissions); // missions in state so UI updates when modified (missions is the orginial from App.js and setMission is a FUNCTION used to change the state)
  const [filter, setFilter] = useState("All"); // Store current mission filter ("All", "Planned", "Active", "Completed")

  // Function to update a mission's status
  function updateMissionStatus(id, newStatus) {
    // Map through each mission and replace the one with this current id
    const updatedMissions = missions.map(
      (m) => (m.id === id ? { ...m, status: newStatus } : m) // If IDs match, return a NEW updated mission object with new status. If not, return mission unchanged
    );
    setMissions(updatedMissions);
    // Update React state → automatically updates UI
  }

  // Filter missions based on the selected filter
  const filteredMissions =
    filter === "All" // If "All" selected,
      ? missions // show all missions
      : missions.filter((m) => m.status === filter); // Otherwise show only missions with matching status

  return (
    <>
      <h1>Mission Control Dashboard</h1>
      {/* Page title */}

      <MissionFilter currentFilter={filter} setFilter={setFilter} />
      {/* Filtering options at top */}

      {/* Loop through filtered missions and render UI */}
      {filteredMissions.map((mission) => (
        <div
          key={mission.id}
          style={{
            border: "1px solid white",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          {/* Show the mission info */}
          <MissionCard
            name={mission.name}
            status={mission.status}
            crew={mission.crew}
          />

          {/* Show the action buttons */}
          <MissionAction id={mission.id} updateStatus={updateMissionStatus} />
        </div>
      ))}
    </>
  );
}

export default MissionControl;

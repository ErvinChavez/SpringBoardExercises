import styles from "./missionFilter-styles.css";

function MissionFilter({ setFilter }) {
  // setFilter = function from parent (MissionControl) to update the filter state
  const STATUSES = ["All", "Planned", "Active", "Completed"]; // Array of all possible filter statuses

  return (
    <>
      {STATUSES.map(
        (
          status,
          index //For each status in STATUSES, render a button
        ) => (
          <button
            key={index}
            onClick={() => setFilter(status)} //Clicking a button calls setFilter → updates parent state → UI re-renders
            className={styles.button}
          >
            {status}
          </button>
        )
      )}
    </>
  );
}

export default MissionFilter;

import styles from "./missionAction-styles.css";

function MissionAction({ missionId, onUpdateMissionStatus }) {
  // missionId = identifies which mission is being updated
  // onUpdateMissionStatus = callback function from MissionControl
  return (
    <>
      <button
        className={styles.button}
        onClick={
          () => onUpdateMissionStatus(missionId, "Active") //status to Active
        }
      >
        Launch
      </button>

      <button
        className={styles.button}
        onClick={
          () => onUpdateMissionStatus(missionId, "Completed") //status to Completed
        }
      >
        Complete
      </button>
    </>
  );
}

export default MissionAction;

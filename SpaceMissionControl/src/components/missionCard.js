import styles from "./missionCard-styles.css";

function MissionCard({ name, status, crew }) {
  // Receives props from MissionControl
  // name = mission name
  // status = mission status
  // crew = array of crew member names

  return (
    <>
      <h2 className={styles.title}>{name}</h2>

      <p className={styles.detail}>Status: {status}</p>
      <p className={styles.detail}>Crew: {crew.join(", ")}</p>
    </>
  );
}

export default MissionCard;

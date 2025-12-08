function MissionAction({ id, updateStatus }) {
  // id → identifies which mission we are changing
  // updateStatus → function from MissionControl to change mission status

  return (
    <>
      <button onClick={() => updateStatus(id, "Planned")}>Set Planned</button>
      {/* Calls updateStatus with id + the new status */}

      <button onClick={() => updateStatus(id, "Active")}>Launch Mission</button>
      {/* Change mission to Active */}

      <button onClick={() => updateStatus(id, "Completed")}>
        Complete Mission
      </button>
      {/* Change mission to Completed */}
    </>
  );
}

export default MissionAction;

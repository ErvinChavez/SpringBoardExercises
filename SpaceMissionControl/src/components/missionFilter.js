function MissionFilter({ currentFilter, setFilter }) {
  // currentFilter → tells user which filter is active
  // setFilter → updates the filter state in MissionControl

  return (
    <>
      <h3>Filter Missions</h3>

      {/* Each button sets filter to a new value */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Planned")}>Planned</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>

      <p>Current filter: {currentFilter}</p>
      {/* Display the currently active filter */}
    </>
  );
}

export default MissionFilter;

function MissionCard({ name, status, crew }) {
  // This component ONLY displays mission info — no logic here.

  return (
    <>
      <h2>{name}</h2>
      {/* Mission name */}

      <p>
        <strong>Status:</strong> {status}
      </p>
      {/* Mission status */}

      <p>
        <strong>Crew Members:</strong>
      </p>
      <ul>
        {/* Loop through crew array */}
        {crew.map((member, id) => (
          <li key={id}>{member}</li> // Use index as key since names aren't guaranteed unique
        ))}
      </ul>
    </>
  );
}

export default MissionCard;

function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3 className="mb-3">{character.name}</h3>
      <div className="mb-3">
        <img
          className="img-fluid rounded-pill"
          src={character.image}
          alt={character.name}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>
      <p className="mb-0">
        <strong>Origen:</strong> {character.origin.name}
      </p>
    </div>
  );
}

export default Character;

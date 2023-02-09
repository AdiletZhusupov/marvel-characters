import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {} from "../../store/reducers/charactersSlice";
import { RootState } from "../../store/store";

const CharacterPage = () => {
  const { id } = useParams();
  const { charactersToDisplay } = useSelector(
    (state: RootState) => state.characters
  );

  const singleCharacterPage = charactersToDisplay.find((character) => {
    return character.id === Number(id);
  });

  const powerStats = Object.entries(singleCharacterPage!.powerstats)

  return (
    <>
      <Link to="/" className="btn home-link">
        back home
      </Link>
      <section className="productItem">
        <div className="productItem-wrapper">
          <img
            src={singleCharacterPage!.image}
            className="img"
            alt={singleCharacterPage!.name}
          />
          <div className="productItem-info">
            <h3>{singleCharacterPage!.name}</h3>
            <h5>{singleCharacterPage!.fullname}</h5>
            <p>{singleCharacterPage!.description}</p>
            <ul>
              {powerStats.map(([power, stat]) => {
                return <li key={power}>
                  <span style={{textTransform: "uppercase"}}>{power}</span> - <span>{stat}</span>
                </li>
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterPage;

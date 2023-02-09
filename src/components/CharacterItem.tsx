import { Link } from "react-router-dom";
import { ICharacter } from "../dummy_data/charactersData";
interface CharacterItemProps {
  character: ICharacter;
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  return (
    <Link to={`/character/${character.id}`} className="product">
      <img src={character.image} alt={character.name} className="product-img img" />
      <footer>
        <h5 className="product-name">{character.name}</h5>
        <span className="product-price">{character.fullname}</span>
      </footer>
    </Link>
  );
};

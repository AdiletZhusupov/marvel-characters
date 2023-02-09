import { debounce } from "lodash";
import { ChangeEvent, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICharacter } from "../../dummy_data/charactersData";
import { filterByName } from "../../store/reducers/charactersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CharacterItem } from "../../components/CharacterItem";
import List from "../../components/List";
import NewCharacterForm from '../../components/NewCharacterForm';

const MainPage = () => {
  const { charactersToDisplay } = useSelector(
    (state: RootState) => state.characters
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByName(e.target.value));
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <div className="title">
        <h2>Marvel Characters</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        <div className="filters-container">
          <h5>Search</h5>
          <input
            type="text"
            className="search-input"
            placeholder="type here..."
            onChange={debouncedResults}
          />
          <h5>New Character</h5>
          <NewCharacterForm />
        </div>
        <div className="products-container">
          {charactersToDisplay.length > 0 ? (
            <List
              items={charactersToDisplay}
              renderItem={(item: ICharacter) => (
                <CharacterItem character={item} key={item.id} />
              )}
            />
          ) : (
            <h6>Sorry, no characters matched your search</h6>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;

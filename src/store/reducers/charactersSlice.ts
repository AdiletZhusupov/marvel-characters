import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {characters, ICharacter} from "../../dummy_data/charactersData"

const LOCAL_STORAGE_MARVEL_CHAR_KEY = "marvelCharacters";

const charactersJson = localStorage.getItem(LOCAL_STORAGE_MARVEL_CHAR_KEY);
const currentCharacters:ICharacter[] = charactersJson !== null ? JSON.parse(charactersJson) : characters;


interface IInitialState {
  characters: ICharacter[];
  charactersToDisplay: ICharacter[];
}

const initialState: IInitialState = {
  characters: currentCharacters,
  charactersToDisplay: currentCharacters,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.charactersToDisplay = state.characters;
      } else {
        state.charactersToDisplay = state.characters.filter((character) => {
          return character.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()) || character.fullname
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      }
    },
    createNewCharacter: (state, action: PayloadAction<ICharacter>) => {
      state.characters.push(action.payload)
      state.charactersToDisplay.push(action.payload)
      localStorage.setItem(LOCAL_STORAGE_MARVEL_CHAR_KEY, JSON.stringify(state.characters))
    }
  },
});

export default charactersSlice.reducer;

export const {filterByName, createNewCharacter} = charactersSlice.actions;
import { useRef, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { createNewCharacter } from '../store/reducers/charactersSlice';
import { generateRandomImage } from '../helpers/generateRandomImage';

export default function NewCharacterForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("")
  const nameRef = useRef<HTMLInputElement>(null)
  const fullnameRef = useRef<HTMLInputElement>(null)
  const intelligenceRef = useRef<HTMLInputElement>(null);
  const strengthRef = useRef<HTMLInputElement>(null);
  const speedRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const { characters } = useSelector(
    (state: RootState) => state.characters
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    if(nameRef.current?.value && fullnameRef.current?.value && intelligenceRef.current?.value && strengthRef.current?.value && speedRef.current?.value && descriptionRef.current?.value){
      const newCharacter = {
        id: characters.length + 1,
        name: nameRef.current.value,
        fullname: fullnameRef.current.value,
        powerstats: {
          intelligence: String(intelligenceRef.current.value),
          strength: String(strengthRef.current.value),
          speed: String(speedRef.current.value),
        },
        image: generateRandomImage(),
        description: descriptionRef.current.value,
      }
      dispatch(createNewCharacter(newCharacter));
      handleClose()
    } else {
      setError("Required Details Missing")
    }
    setTimeout(()=>{
      setError("")
    }, 2000)
  }
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Click to Create
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Character Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the character details here
          </DialogContentText>
          {error && (
            <DialogContentText style={{ color: "red" }}>
              {error}
            </DialogContentText>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            required
            inputRef={nameRef}
            />
          <TextField
            margin="dense"
            id="fullname"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            required
            inputRef={fullnameRef}
            />
          <TextField
            margin="dense"
            id="intelligence"
            label="Intelligence"
            type="number"
            fullWidth
            variant="standard"
            required
            inputRef={intelligenceRef}
            />
          <TextField
            margin="dense"
            id="strength"
            label="Strength"
            type="number"
            fullWidth
            variant="standard"
            required
            inputRef={strengthRef}
            />
          <TextField
            margin="dense"
            id="speed"
            label="Speed"
            type="number"
            fullWidth
            variant="standard"
            required
            inputRef={speedRef}
            />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            required
            inputRef={descriptionRef}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

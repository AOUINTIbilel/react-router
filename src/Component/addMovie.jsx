import React,{useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({obj}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Titre , setTitre] = useState("")
  const [Description , setDescription] = useState("")
  const [rang , setrang] = useState(0)
  const [url , seturl] = useState("")

function hanldeTitre(e) {
  setTitre (e.target.value)
}
function hanldeDescription(e) {
  setDescription (e.target.value)
}
function hanlderang(e) {
  setrang (e.target.value)
}
function hanldeurl(e) {
  seturl (e.target.value)
}

const handleAddMovie =() => {
  const NewMov ={
  Titre,  
  Description,
  rang,
  url,
};
obj(NewMov)

}

     
 return (
    <div>
      <Button onClick={handleOpen}>Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 >Add Movie</h2>
            
            Titre
            <TextField fullWidth label="Titre" id="fullWidth" value={Titre} onChange={hanldeTitre} />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Description
            <TextField fullWidth label="Discreption" id="fullWidth" value={Description} onChange={hanldeDescription} />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Url
            <TextField fullWidth label="Url" id="fullWidth" value={url} onChange={hanldeurl} />
          </Typography>
          <Typography id="Url" variant="h6" component="h2">
            rating
            <TextField fullWidth label="rating" id="fullWidth" value={rang} onChange={hanlderang} />
          </Typography>
          <br />
          <Button variant="contained" color="success" onClick={() =>{handleAddMovie();handleClose()}}  >
                  Add Movie
      </Button>
             </Box>
      </Modal>
    </div>
  );
}

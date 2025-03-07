import React, { useState } from 'react';
import "../styles/Account.css";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Modal = () => {
  var [modalContent, setText] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

   //For modal Popup
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

  return (
    <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open} //onClose={handleClose}
            aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Alert
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalContent}
              </Typography>
              <br />
              <button style={{ cursor: 'pointer' }} className="btn btn-danger " onClick={handleClose}>Close</button>
            </Box>
          </Modal>
        </div>
  );
}


export default Modal;
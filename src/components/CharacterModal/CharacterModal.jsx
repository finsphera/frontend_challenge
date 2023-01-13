import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./charactermodal.css";

const CharacterModal = (props) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const person = useSelector((state) => state.characterReducer.characters[props.cid]);

	return (
		<div>
			<button onClick={handleOpen} className="btn-secondary">
				More Info
			</button>
			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box className="modal-box">
					<img src={person.image} alt="a character" />
					<hr />
					<Typography id="modal-modal-title" variant="h4" component="h2" sx={{ mt: 3, color: "#d93f87" }}>
						{person.id} - {person.name}
					</Typography>
					<Typography id="modal-modal-description-1" sx={{ mt: 2 }}>
						<b>Status:</b> {person.status}
					</Typography>
					<Typography id="modal-modal-description-2" sx={{ mt: 2 }}>
						<b>Species:</b> {person.species}
					</Typography>
					<Typography id="modal-modal-description-3" sx={{ mt: 2 }}>
						<b>Gender:</b> {person.gender}
					</Typography>
					<Typography id="modal-modal-description-4" sx={{ mt: 2 }}>
						<b>Origin:</b> {person.origin.name}
					</Typography>
					<Typography id="modal-modal-description-5" sx={{ mt: 2 }}>
						<b>Location:</b> {person.location.name}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default CharacterModal;

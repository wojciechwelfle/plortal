import { Button } from "react-bootstrap";
import CloseIcon from "./CloseIcon";
import ImageCropper from "./ImageCropper";
import './Modal.css'; 

const Modal = ({ updateAvatar, closeModal, skipBackdrop }) => {
  return (
    <div className="modal-overlay">
      {!skipBackdrop && <div className="modal-backdrop"></div>}
      <div className="modal-container">
        <div className="modal-content">
          <Button variant="secondary" className="close-btn" onClick={closeModal}>
            <CloseIcon />
          </Button>
          <ImageCropper updateAvatar={updateAvatar} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};
export default Modal;

import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import PencilIcon from "./icons-folder/PencilIcon";
import Modal from "./Modal";
import './ProfileCard.css';

const ProfileCard = () => {
  const avatarUrl = useRef("https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain");
  const [modalOpen, setModalOpen] = useState(false);


  const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="profile-card">
      <div className="avatar-container">
        <img src={avatarUrl.current} alt="Avatar" className="avatar" />
        <Button variant="dark" className="change-photo-btn" onClick={() => setModalOpen(true)}>
          <PencilIcon />
        </Button>
      </div>
      <h3 className="user-name" style={{ fontSize: `${fontSize + 5}px` }}>{localStorage.getItem("firstname")} {localStorage.getItem("lastname")}</h3>
      <p className="user-role" style={{ fontSize: `${fontSize}px` }}>{localStorage.getItem("role")}</p>
      {modalOpen && (
        <Modal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} skipBackdrop={true} />
      )}
    </div>
  );
};

export default ProfileCard;

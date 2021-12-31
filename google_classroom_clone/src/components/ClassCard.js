import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClassCard.css";

function ClassCard({ name, creatorName, creatorPhoto, id, style }) {
  const history = useNavigate();

  const goToClass = () => {
    history(`/class/${id}`);
  };

  return (
    <div className="classCard" style={style} onClick={goToClass}>
      <div className="classCard__upper">
        <div className="classCard__className">{name}</div>
        <div className="classCard__creatorName">{creatorName}</div>
        <img
          src={creatorPhoto}
          className="classCard__creatorPhoto"
          alt="creator"
        />
      </div>
      <div className="classCard__middle"></div>
      <div className="classCard__lower">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default ClassCard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import RouterLink from "../link/RouterLink";

const SharedCard = ({ title, imgUrl, linkInfo }) => {
  return (
    <div>
      <Card className="card">
        <RouterLink to="/shop">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={imgUrl} />
            <Button variant="link">{linkInfo}</Button>
          </Card.Body>
        </RouterLink>
      </Card>
    </div>
  );
};

export default SharedCard;

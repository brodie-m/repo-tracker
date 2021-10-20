import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Results() {

  const results = useSelector((state) => state.results);
  const username = useSelector((state) => state.username);

  

  return (
    <Container className="text-white mt-2">
      <h1>user: {username}</h1>
      <ListGroup>
        {results.map((repo, index) => {
            return (<ListGroup.Item key={index}>{repo}</ListGroup.Item>)
          
        })}
      </ListGroup>
    </Container>
  );
}

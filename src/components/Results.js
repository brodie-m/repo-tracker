import React, { useState } from "react";
import { Container, ListGroup, Card, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Results() {
  const results = useSelector((state) => state.results);
  const username = useSelector((state) => state.username);
  const [show, setShow] = useState(false);
  const [activeRepo, setActiveRepo] = useState(null);
  const renderModal = (repo) => (
    <Modal
      className="d-flex align-items-center justify-content-center"
      show={show}
      
    >
      <Modal.Header>
        <Modal.Title>{repo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>stars: {repo.stargazers_count}</p>
        <p>forks: {repo.forks_count}</p>
        <p>open issues: {repo.open_issues_count}</p>
      </Modal.Body>
      <Modal.Footer>
        <Container>
        <p>created at: {repo.created_at}</p>
        <p>last updated at at: {repo.updated_at}</p>
        <p><a href={`https://github.com/${username}/${repo.name}`}>visit repo</a></p>
        
        <Button
          variant="dark"
          onClick={() => {
            
            setShow(false);
          }}
        >
          Close
        </Button>
        </Container>
      </Modal.Footer>
    </Modal>
  );

  return (
    <Container className="text-white mt-2">
      {username ? <h1>user: {username}</h1> : ''}
      <ListGroup className="dark-bg ">
        {results.map((repo, index) => {
          return (
            <>
              <ListGroup.Item key={index} >
                <Card className="text-white">
                  <h3
                    onClick={() => {
                      setActiveRepo(repo)
                      setShow(true)
                    }}
                  >
                    {repo.name}
                  </h3>
                </Card>
              </ListGroup.Item>
            </>
          );
        })}
      </ListGroup>
      {show ? renderModal(activeRepo) : null}
    </Container>
  );
}

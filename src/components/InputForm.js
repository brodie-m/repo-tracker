import React from "react";
import { Form, Button } from "react-bootstrap";
import Results from "./Results";
export default function InputForm({getResult, results}) {
  
    
    
    function handleSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('search-form');
        const username = input.value
        getResult(username)
    }
    
  return (
    <div>
      <Form className="text-white mt-2">
        <Form.Group className="mb-3">
          <Form.Label>github username</Form.Label>
          <Form.Control type="email" placeholder="e.g. brodie-m" id="search-form"/>
          <Form.Text className="text-muted">
            no one will ever know who you're stalking this time
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit"  onClick = {handleSubmit}>
          search
        </Button>
      </Form>
      <Results results={[...results]}/>
    </div>
  );
}

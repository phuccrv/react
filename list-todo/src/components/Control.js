import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { BiAddToQueue, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

function Control(props) {
  const { onToggleModal, onFilter, onSearch, searchTerm } = props;

  return (
    <Container fluid className="control-group">
      <h1>LIST WORD</h1>
      {/* Mở form thêm công việc */}
      <Button onClick={() => onToggleModal(true, "add")}>
        Add <BiAddToQueue />
      </Button>
      <InputGroup>
        <Form.Control
          placeholder="Enter search Name..."
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={onSearch}
        />
        <Button variant="outline-secondary" id="button-addon2">
          <BiSearchAlt />
        </Button>
      </InputGroup>
    </Container>
  );
}

export default Control;

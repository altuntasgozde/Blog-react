import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function Entry({ TitleValue, TextareaValue, GetText, postStatus }) {
  return (
    <div className="Entry">
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label>Title</Label>
                <Input className="mt-2" onChange={TitleValue} type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Post</Label>
                <Input type="textarea"  className=" textarea mt-2" onChange={TextareaValue} />
              </FormGroup>             
              <Button className="mt-3 addBtn" onClick={GetText}>
                Add
              </Button>
              {postStatus ? <p className="mt-5 addText">Blog added</p> : null}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Entry;

import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import { QRCode } from "react-qr-svg";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      class: '',
      section: '',
      school: '',
      data: 'Form Not Filled Yet'
    };

  }

  handleChange(event) {
    event.preventDefault();

    
  }

  handleSubmit = (event) => {
    const name =`${this.state.name}`;
    const School = ` is a sudent of ${this.state.school}`;
    const Class = `. Studying in Class ${this.state.class}`;
    const Section = ` ${this.state.section}`;
    
    const dataString = name + School + Class + Section ; 

    this.setState({
      data: dataString
    })
    // alert(dataString);

    // document.getElementById('qr-code').innerHTML = '<QRCode bgColor="#FFFFFF" fgColor="#000000" level="Q" style={{ width: 256 }} value="Nothing to show" />';
    event.preventDefault();

  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleClassChange= (event) => {
    this.setState({
      class: event.target.value
    })
  }
  handleSectionChange= (event) => {
    this.setState({
      section: event.target.value
    })
  }
  handleSchoolChange= (event) => {
    this.setState({
      school: event.target.value
    })
  }

  printDocument() {
    
    const input = document.getElementById('qr-code');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 50, 50);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Col>
              <br/>
              <p>
                Hi There To Generate QR Code fill in the below form.
              </p>
              <h3>Student Information</h3>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.handleNameChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="class">Class</Label>
                    <Input type="text" id="class" placeholder="Enter Class" ref="class" value={this.state.class} onChange={this.handleClassChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="section">Section</Label>
                    <Input type="text" id="section" placeholder="Enter Section" ref="section" value={this.state.section} onChange={this.handleSectionChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="school">School</Label>
                    <Input type="text" id="school" placeholder="Enter School" value={this.state.school} onChange={this.handleSchoolChange} />
                  </FormGroup>
                  <Button type="submit">
                    Generate QR Code
                  </Button>
                </Form>
              </Col>
              <Col>
                <div id="print-this" >
                      <br/>
                      <div id="qr-code">
                      <QRCode
                          bgColor="#FFFFFF"
                          fgColor="#000000"
                          level="L"
                          style={{ width: 200, height : 200 }}
                          value={this.state.data}
                      />
                      </div>
                      <br/>
                      <Button onClick={this.printDocument}>You can Save Now</Button>
                </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
  };
}

export default App;

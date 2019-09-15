import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { QRCode } from "react-qr-svg";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      class: '',
      section: '',
      school: '',
      data: ''
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

  render() {
    return (
      <div className="App">
          <div className='col-lg-4 col-sm-4'>
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
            </div>
            <div className='col-lg-4 col-sm-4' id="qr-code"><h3>QR Code</h3>
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={this.state.data}
            />
            </div>
      </div>
    );
  };
}

export default App;

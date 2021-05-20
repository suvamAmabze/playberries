import React, { Component } from "react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";
import { isEmail } from "validator";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      name: "",
      telephone: "",
      email: "",
      age: "",
      // occupation: "",
      // income: "",
      address: "",
    },
    errors: {},
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: "",
      },
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.name === "") errors.name = "Name can not be blank.";
    // if (data.telephone === "") errors.telephone = "Telephone can not be blank.";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.age === "") errors.age = "Age can not be blank.";
    // if (data.occupation === "")
    //   errors.occupation = "Occupation can not be blank.";
    // if (data.income === "") errors.income = "Income can not be blank.";
    if (data.address === "") errors.address = "Address can not be blank.";

    function digitsCount(n) {
      var count = 0;
      if (n >= 1) ++count;

      while (n / 10 >= 1) {
        n /= 10;
        ++count;
      }
      return count;
    }
    if (digitsCount(data.telephone) <= 9 || digitsCount(data.telephone) > 10)
      errors.telephone = "length of a phone number is 10 digits";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      alert(`Thank you ${data.name} for getting in touch!`);
      console.log(data);
      //Call an api here
      //Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1 className="Title">{this.props.FormTitle}</h1>
        <Form onSubmit={this.handleSubmit} className="ContactFormContainer">
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input
              placeholder="Enter Full Name"
              type="text"
              value={data.name}
              invalid={errors.name ? true : false}
              name="name"
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="telephone">Telephone</Label>
            <Input
              type="number"
              placeholder="Enter Telephone"
              value={data.telephone}
              invalid={errors.telephone ? true : false}
              name="telephone"
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.telephone}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="name@example.com"
              value={data.email}
              invalid={errors.email ? true : false}
              name="email"
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              placeholder="Enter Age"
              value={data.age}
              type="number"
              name="age"
              invalid={errors.age ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.age}</FormFeedback>
          </FormGroup>

          {/* <FormGroup>
            <Label for="occupation">Occupation</Label>
            <Input
              value={data.occupation}
              placeholder="Enter Occupation"
              type="text"
              name="occupation"
              invalid={errors.occupation ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.occupation}</FormFeedback>
          </FormGroup> */}

          {/* <FormGroup>
            <Label for="income">Income</Label>
            <Input
              value={data.income}
              placeholder="Enter Income"
              type="number"
              name="income"
              invalid={errors.income ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.income}</FormFeedback>
          </FormGroup> */}

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              value={data.address}
              placeholder="Enter Address"
              type="textarea"
              name="address"
              invalid={errors.address ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.address}</FormFeedback>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

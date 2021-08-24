import { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import Input from "../Input";
import Label from "../Label";
import options from "../options";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <Label id={this.nameInputId} title="Name">
          <Input
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            handleChange={this.handleChange}
            options={options.name}
          />
        </Label>
        <Label id={this.numberInputId} title="Number">
          <Input
            id={this.numberInputId}
            type="tel"
            name="number"
            value={number}
            handleChange={this.handleChange}
            options={options.number}
          />
        </Label>
        <button className={s.button} type="submit">
          add Contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

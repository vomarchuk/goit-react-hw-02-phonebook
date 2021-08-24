import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import s from "./App.module.css";
import Container from "../Container";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList/";
import Filter from "../Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  checkName = (newName) =>
    this.state.contacts.find(({ name }) => name === newName);

  addContact = ({ name, number }) => {
    if (!this.checkName(name)) {
      const newContact = {
        id: uuidv4(),
        name,
        number,
      };

      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      return;
    }
    alert(`${name} is already in contacts`);
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Container>
          <h1 className={s.title}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Container>
        {contacts.length > 0 ? (
          <Container>
            <h2 className={s.title}>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contactList={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        ) : (
          <Container>
            <h2 className={s.title}>Phone book is empty</h2>
          </Container>
        )}
      </>
    );
  }
}

export default App;

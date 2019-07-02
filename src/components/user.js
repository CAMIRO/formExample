import React, { Component } from "react";
import FormFields from "../widgets/forms/formFields";

class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        laberText: "Name",
        config: {
          name: "name_input",
          text: "text",
          placeholder: "Enter your name"
        }
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        laberText: "Lastname",
        config: {
          name: "lastname_input",
          text: "text",
          placeholder: "Enter your Lastname"
        }
      }
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.SubmitForm}>
          <FormFields formData={this.state.formData} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;

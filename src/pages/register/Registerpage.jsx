import React, { useState } from "react";
import { registerUserApi } from "../../apis/Api";
import { toast } from "react-toastify";

const Register = () => {
  // Coding Section

  // Make a state variables - 5 States
  // Format (variableName, ChangingVarName) = State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  // State for Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // Make a function to save the state
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  // Validation
  var validate = () => {
    var isValid = true;
    if (firstName.trim() === "") {
      setFirstNameError("Firstname is Required");
      isValid = false;
    }

    if (lastName.trim() === "") {
      setLastNameError("lastname is Required");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email Address is Required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is Required");
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      setConfirmPassword("Confirm password is Required");
      isValid = false;
    }
    if (phone.trim() === "") {
      setPhoneError("Phone Number is required");
      isValid = false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPassword("Confirm password is Required");
      isValid = false;
    }

    return isValid;
  };

  // For button
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const isValid = validate();
    if (!isValid) {
      return;
    }
    // making api request
    // Making json object of register data
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    };
    registerUserApi(data).then((res) => {
      // success : true/false , message

      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };

  return (
    <>
      <div className="m-3">
        <h1>Create an Account!</h1>

        <form className="w-50">
          <label>Firstname : {firstName}</label>
          <input
            onChange={handleFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your firstname"
          />

          {firstNameError && <p className="text-danger">{firstNameError}</p>}
          <label className="mt-2">Lastname</label>
          <input
            onChange={handleLastname}
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
          />
          {lastNameError && <p className="text-danger">{lastNameError}</p>}

          <label className="mt-2">Email Address</label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter your email address"
          />
          {emailError && <p className="text-danger">{emailError}</p>}
          <label className="mt-2">Phone Number</label>
          <input
            onChange={handlePhone}
            type="Number"
            className="form-control"
            placeholder="Enter your Phone Number"
          />
          {emailError && <p className="text-danger">{emailError}</p>}

          <label className="mt-2">Password</label>
          <input
            onChange={handlePassword}
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <label className="mt-2">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          {confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p>
          )}

          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

// Make UI Complete - DONE
// Make a Variables to save value of each input temporarily
// Change everytime we write something

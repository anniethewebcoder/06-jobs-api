let activeDiv = null;

export const setDiv = (newDiv) => {
  if (newDiv != activeDiv) {
    if (activeDiv) {
      activeDiv.style.display = "none";
    }

    newDiv.style.display = "block";
    activeDiv = newDiv;
  }
};

export let inputEnabled = true;

export const enableInput = (state) => {
  inputEnabled = state;
};

export let token = null;

export const setToken = (value) => {
  token = value;
  if (value) {
    localStorage.setItem("token", value);
  } else {
    localStorage.removeItem("token");
  }
};

export let message = null;

import { showJobs, handleJobs } from "./jobs";
import { showLoginRegister, handleLoginRegister } from "./loginRegister";
import { handleLogin } from "./login";
import { handleAddEdit } from "./addEdit";
import { handlleRegister } from "./register";

document.addEventListener("DOMContentLoaded", () => {
  token = localStorage.getItem("token");
  message = document.getElementById("message");

  handleLoginRegister();
  handleLogin();
  handleJobs();
  handlleRegister();
  handleAddEdit();

  if (token) {
    showJobs();
  } else {
    showLoginRegister();
  }
});

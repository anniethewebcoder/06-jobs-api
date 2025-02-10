import { showAddEdit } from "./addEdit";
import {
  inputEnabled,
  setDiv,
  token,
  message,
  enableInput,
  setToken,
} from "./index";
import { showLogin } from "./login";
import { showLoginRegister } from "./loginRegister";

let jobsDiv = null;
let jobsTable = null;
let jobsTableHeader = null;

export const handleJobs = () => {
  jobsDiv = document.getElementById('jobs')
  jobsTable = document.getElementById('jobs-table')
  jobsTableHeader = document.getElementById('jobs-table-header')

  const logoff = document.getElementById('logoff')
  const addJob = document.getElementById('add-job')

  jobsDiv.addEventListener('click', (e) => {
    if(inputEnabled && e.target.nodeName === 'BUTTON') {
      if (e.target === addJob) {
        showAddEdit(null)
      } else if (e.target === logoff) {
        setToken(null)

        message.textContent = "You have been logged off."

        jobsTable.replaceChildren([jobsTableHeader])
        
        showLoginRegister()
      }
    }
  })
};

export const showJobs = () => {
  setDiv(jobsDiv)
};

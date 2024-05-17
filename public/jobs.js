import { inputEnabled, setDiv, message, setToken, token, enableInput } from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";

let jobsDiv = null;
let jobsTable = null;
let jobsTableHeader = null;

export const handleJobs = () => {
    
    jobsDiv = document.getElementById("jobs");
    jobsTable = document.getElementById("add-job");
    jobsTableHeader = document.getElementById("jobs-table-header");

    const addJob = document.getElementById("add-job");
    const logoff = document.getElementById("logoff");

    jobsDiv.addEventListener("click", (e) => {
        if(inputEnabled && e.target.nodeName === "BUTTON") {
            if(e.target === addJob) {
                showAddEdit(null);
            } else if(e.target === logoff) {
                setToken(null);

                message.textContent = "You have been logged off.";

                jobsTable.replaceChildren([jobsTableHeader]);
                
                showLoginRegister();
            }
        }
    })
}

export const showJobs = async() => {
    setDiv(jobsDiv)
}
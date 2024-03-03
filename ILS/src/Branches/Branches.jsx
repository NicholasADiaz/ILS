import { useState, useEffect } from 'react'
import axios from 'axios';

import './Branches.css'

function Branches() {
    const [branchList, setBranchList] = useState([])
    const [selectedBranch, setSelectedBranch] = useState('');

    const handleCommit = (event) => {
      event.preventDefault(); // Prevent the default form submit action
    
      // Example: Submitting some specific data, not the entire form
      const formData = {
        username: 'anthony',
        branch: selectedBranch
      };
    
      axios.post("http://127.0.0.1:5000/update-branch", formData)
        .then(response => {
          // Handle successful commit
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors
          console.error("Commit failed", error);
        });
    };

    useEffect(() => {
        axios.post("http://127.0.0.1:5000/get-branch-data")
        .then((response) => {
            if (response.data.length > 0) {
                const newBranchList = response.data.map(item => item[1]);
                setBranchList(newBranchList);
            } else {
            console.log("There was no response from the server.")
            }
        })
        .catch((error) => {
            console.log(error);
        });
        }, []);
    

    const handleSelectChange = (event) => {
        setSelectedBranch(event.target.value);
    };

  return (
    <>
    <div className="outer-div">
      <h1>Set Branch</h1>
      <div className='inner-div'>
      <select onChange={handleSelectChange} value={selectedBranch}>
        {branchList.map((branch, index) => (
          <option key={index} value={branch}>{branch}</option>
        ))}
      </select>
      <br/>
      <button onClick={handleCommit}>Commit</button>
      </div>
    </div>

    </>
  )
}

export default Branches

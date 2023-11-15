import { useState, useEffect } from 'react'
import axios from 'axios';

import './Branches.css'

function Branches() {
    const [branchList, setBranchList] = useState([])
    const [selectedBranch, setSelectedBranch] = useState('');

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
      <button>Submit</button>
      </div>
    </div>

    </>
  )
}

export default Branches

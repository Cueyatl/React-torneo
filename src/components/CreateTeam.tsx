import { useState } from "react"

export const CreateTeam = () => {

  const [newTeam, setNewTeam]=useState<string>("");
  const [listTeam, setListTeam]=useState<string[]>([]);

  const handleAddTeam=()=>{
    if (newTeam.trim()==="")return
    setListTeam((teams)=>[...teams, newTeam]);
    setNewTeam("");


  }
  
  return (

    <div >
      <h1>Teams registry</h1>

      //input space and button for add.
      <div>

        <input type="text" 
        value={newTeam}
        onChange={(e)=>setNewTeam(e.target.value)}
        placeholder="New team"
        />

        <button type="button" onClick={handleAddTeam}>Add New Team</button>
       </div>

    </div>
  )
}

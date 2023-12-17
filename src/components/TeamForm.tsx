import { useState } from "react";
import { InputElement } from "./InputElement";
import { SubmitButton } from "./elements/SubmitButton";

type Props = {
  teams?: string;
};

export const TeamForm = ({ teams, setTeams }: Props) => {
  //headcoach, Teamname. additionalInfo:
  const [headCoach, setHeadCoach] = useState<string>("");
  const [newTeam, setNewTeam] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");

  const generateID = () => {
    const dateId = Date.now().toString(36);
    const randomID = Math.random().toString(36).substring(2);
    return dateId + randomID;
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
    if ([headCoach, newTeam].includes("")) {
      return;
    }
    const teamObject = {
      headCoach,
      newTeam,
      additionalInfo,
      id: generateID(),
    };
    console.log(teamObject.id);
    setTeams([...teams, teamObject]);

    setHeadCoach("");
    setNewTeam("");
    setAdditionalInfo("");
  };

  return (
    <div className="mb-3 col-3 m-4 ">

      <h1>Team registration</h1>

      <form onSubmit={handleSubmit} className="row  g-3    needs-validation  was-validated   ">


        <InputElement
          value={headCoach}
          setValue={(e) => setHeadCoach(e.target.value)}
          id="headcoach"
          label="Head coach: "
          type="string"
          placeholder=""
          invalidMessage="Pleace provide coach or representative name."
          validMessage="Looks Good"
        ></InputElement>

        <InputElement
          value={newTeam}
          setValue={(e) => setNewTeam(e.target.value)}
          id="newTeam"
          label="Team's name: "
          type="string"
          placeholder=""
          invalidMessage="Please provide team's name"
          validMessage="Looks Good"
          
        ></InputElement>

        <div className="my-2 ">
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            id="additionalInfo"
            placeholder="optional additional info"
            name="additionalInfo"
            className="form-control my-2 "
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <SubmitButton text="Add new team" onclick={handleSubmit}></SubmitButton>
      </form>
    </div>
  );
};

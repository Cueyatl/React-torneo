import { InputElement } from "./InputElement";
import { SubmitButton } from "./elements/SubmitButton";

export const CreateTournament = () => {
  return (
    <div className="mx-auto justify-content-center mt-5  card    col-sm-10 col-md-8 col-lg-6">
      <h1 className="card-title">Create tournament</h1>
        <div className="card-body input-group d-flex  justify-content-center ">
            <form   className=" was-validated"  action="">

              <InputElement 
              
              id="tournamentName"
              type="text"
              placeholder="Insert tournament name"
              label="Tournament name"
              ></InputElement>

              <div id="sportType" className="input-group my-3 mx-auto ">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Choose your Sport:
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option value={1}>Soccer</option>
                  <option value={2}>Basketball</option>
                  <option value={3}>Padel</option>
                  <option value={4}>other</option>
                </select>
              </div>

              <InputElement
              type="number"
              min={2}
              id="NumberOfTeams"
              label="Number of teams"
              placeholder="set a number"
              
              ></InputElement>
 
 

            <SubmitButton text="Create tournament"></SubmitButton>
              
              <p className="   text-center pt-3  ">or</p>

            <SubmitButton text="Join Current Tournament"></SubmitButton> 
            </form>
         
        </div>
      </div>
   
  );
};

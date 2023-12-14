export const CreateTournament = () => {
  return (
    <div className="d-flex justify-content-center mt-5  ">
      <div className="card    col-sm-10 col-md-8 col-lg-6 ">
        <div className="card-body form-control  ">
          <h1 className="card-title">Create tournament</h1>
          <div className="card-body input-group d-flex  justify-content-center     ">
            <form className="" action="">
              <div className="    ">
                <input
                  className="mb-3 rounded w-100 "
                  type="text"
                  id="tournamentName"
                  placeholder="Insert Tournament Name"
                />
              </div>

              <div className="input-group mb-3 mx-auto ">
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

              <input
                className="mb-3 rounded  w-100"
                type="number"
                min={2}
                name=""
                id=""
                placeholder="Number of teams in tournament"
              />

              <button type="submit" className="btn btn-primary w-100 ">
                Create
              </button>
              <p className="   text-center pt-3  ">or</p>
              <button type="button" className="btn btn-primary w-100  mt-3 ">
                Join Current Tournament
                
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

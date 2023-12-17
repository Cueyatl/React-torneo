import { TeamForm } from "./TeamForm"
import { TeamList } from "./TeamList"

export const TeamApp = () => {
  return (
<div className="row">
<div className="col-4">
    <TeamForm></TeamForm>
</div>
<div className="col-8">
    <TeamList></TeamList>
</div>
</div>
  )
}
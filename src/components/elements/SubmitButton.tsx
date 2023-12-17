type Props={
 text:string,
 onclick?:any,
}
export const SubmitButton = ({text, onclick}:Props) => {
  return (
    <button type="submit"  onClick={onclick}  className="btn btn-primary w-100 my-2  ">
    {text}
  </button>
 
  )
}

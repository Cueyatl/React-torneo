type Props = {
  value?: string,
  setValue?: any,
  id: string,
  label: string,
  placeholder: string,
  type: string,
  min?: number,
  invalidMessage?: string,
  validMessage?:string,
};

export const InputElement = ({
  min,
  type,
  value,
  setValue,
  id,
  label,
  placeholder,
  invalidMessage,
  validMessage
}: Props) => {
  return (
    <div className=" my-2 ">
      <label className=" form-label " htmlFor="element">
        {label}
      </label>
    <div className=" has-validation  input-group">
      <input
        className=" rounded w-100  form-control "
        aria-describedby="inputGroupPrepend2"
        required
        min={min}
        type={type}
        id={id}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      /> 
      <div className="invalid-feedback">
      {invalidMessage}
    </div>
    
    <div className="valid-feedback">
      {validMessage}
    </div>
    

          </div>
    </div>
    //
  );
};

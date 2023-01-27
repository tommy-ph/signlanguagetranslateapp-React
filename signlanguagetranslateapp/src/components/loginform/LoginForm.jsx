import { useForm } from "react-hook-form";
import { BiRadio } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "../../Utils/card/Card";
import InputContainer from "../../Utils/input-container/InputContainer";

import "./loginform.css";
const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.getSubmitedValue(data.username);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span className="errmsg"> Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return (
        <span className="errmsg">
          {" "}
          Username is too short, it has to be at least 3 characters
        </span>
      );
    }
  })();
  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer btnType="submit">
          <fieldset style={{border:"none"}}>
            <input
              type="text"
              placeholder="What's your name? "
              {...register("username", usernameConfig)}
            />
            {errorMessage}
          </fieldset>
        </InputContainer>
      </form>
    </Card>
  );
};
export default LoginForm;

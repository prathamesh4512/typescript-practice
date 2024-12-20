
const FormType = () => {
  return (
    <form
      onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  );
};

export default FormType;


// type Admin = {
//     role: string;
//   }
//   type User = {
//     email: string;
//   }

//   let user1: Admin | User ={
//     role:"",
//  }

//  let user2: Admin | User ={
//     email:"",
//  }

//  let user: Admin | User ={
//     role:"",
//     email:""
//  }

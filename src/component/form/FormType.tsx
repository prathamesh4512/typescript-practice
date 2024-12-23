const FormType = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const target = e.target as typeof e.target & {
  //     email: { value: string };
  //     password: { value: string };
  //   };
  //   const email = target.email.value; // typechecks!
  //   const password = target.password.value; // typechecks!

  //   alert("Login Success")
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password }); // Safely extracted values


    // if more than 2 values, as formData is of Map type 
    // const formDataObj = Object.fromEntries(formData.entries())
    // const {email,password, name} = formDataObj
    // // error handling
    // for (let [key,value] of formData){
    //     value = (value as string).trim()
    //     if(!value){
    //       setError(prev=>({...prev,key:'Enter value'}))
    //     }
    // }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <br />
      <input type="email" name="email" />
      <br />

      <label>Password:</label>
      <br />
      <input type="password" name="password" />
      <br />

      <button type="submit">Log In</button>
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

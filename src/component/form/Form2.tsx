import { useState } from "react";

const FormType = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <form>
      <label>Email:</label>
      <br />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <br />

      <label>Password:</label>
      <br />
      <input
        type="password"
        value={formState.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default FormType;

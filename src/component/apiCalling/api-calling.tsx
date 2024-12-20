import { useEffect, useState } from "react";
import axios from "axios";

type StateType = {
    a : string;
    id : number;
}

const TempComp = () => {
  const [state, setState] = useState<StateType[]>([]);

  useEffect(() => {
    fetch("api")
      .then((res) => res)
      .then((res) => res.json())
      .then((res) => setState(res as StateType[]));

      axios.get<StateType[]>("api")
      .then(res=>setState(res.data))

  }, []);

  return (
    <div>
      {state.map((ele) => (
        <div key={ele.id}>{ele.a}</div>
      ))}
    </div>
  );
};



async function fetchUsers(): Promise<{}[]> {
  const response = await axios.get('/api/users');
  return response.data;
}

const [users, setUsers] = useState<{}[]>([]);
useEffect(() => {
  fetchUsers().then((data) => setUsers(data));
}, []);


type ButtonProps = {
  color?:string;
  bgColor?:string;
  fontSize?:number;
  padding:[number,number,number,number]
}


interface

type TUrlType = string;

const url : TUrlType = "www.abc.com"
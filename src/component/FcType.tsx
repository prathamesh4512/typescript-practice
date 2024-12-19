const Abc : React.FC<{type:number}> = (type) =>  <div>Hello</div>

type AppProps = {
  message : string;
}
const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;
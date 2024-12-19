import Parent from "./Parent";
import Child from "./Child";


const App = () => {
  return (
    <div>
      <Parent child={Child} />
    </div>
  );
};

export default App;


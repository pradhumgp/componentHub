import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const list = [
    {
      name: "Modal",
    },
    {
      name: "Accordion",
    },
    {
      name: "Tooltip",
    },
  ];
  
  const toComponent = (name) => {
    navigate(name);
  };
  
  return (
    <>
      <div className="flex flex-col w-screen h-screen p-8 bg-gray-900">
        <p className="my-4 text-4xl text-white font-poppins">
          This is a personal project for creating and storing logic/code for
          different components.
        </p>

        <div>
          {list.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 my-2 text-white"
              onClick={() => toComponent(item.name)}
            >
              {/* <span>{index+1}</span> */}
              <span className="text-sm font-poppins">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

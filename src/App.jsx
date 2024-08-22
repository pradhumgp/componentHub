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
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-1 text-3xl font-bold">
          <span className="text-white">Component</span>
          <span className="p-0.5 text-black bg-orange-400 rounded-sm">hub</span>
        </div>

        <div>
          {list.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 my-2 text-white"
              onClick={() => toComponent(item.name)}
            >
              <span>{index+1}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

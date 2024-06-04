import Tooltip from "../components/Tooltip";

const TooltipPage = () => {
  return (
    <>
    <Tooltip>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Hover me</button>
    </Tooltip>
    </>
  )
}

export default TooltipPage
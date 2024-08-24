import Tooltip from "../components/Tooltip";

const TooltipPage = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <Tooltip text="This is a tooltip!">
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Hover me</button>
    </Tooltip>
    </div>
    </>
  )
}

export default TooltipPage
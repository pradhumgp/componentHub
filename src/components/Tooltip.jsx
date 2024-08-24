

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative flex items-center group">
    <span className="absolute hidden p-2 mt-4 text-xs text-white bg-gray-700 rounded-md top-full group-hover:block w-max">{text}</span>
    {children}
    </div>
  )
}

export default Tooltip
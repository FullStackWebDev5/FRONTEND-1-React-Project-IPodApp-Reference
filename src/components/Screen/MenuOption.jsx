import { MdChevronRight } from "react-icons/md";

const MenuOption = ({ text, isHighlighted, setSelectedOpt }) => {
  return (
    <li 
      className={`px-3 ${isHighlighted ? 'bg-primary' : ''}`}
      onClick={() => setSelectedOpt(text)}
    >
      {text} <MdChevronRight />
    </li>
  )
}

export default MenuOption
import { MdChevronRight } from "react-icons/md";

const MenuOption = ({ text, isHighlighted }) => {
  return (
    <li 
      className={`px-3 ${isHighlighted ? 'bg-primary' : ''}`}
    >
      {text} <MdChevronRight />
    </li>
  )
}

export default MenuOption
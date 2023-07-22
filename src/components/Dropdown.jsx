import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }
  
  // Map over the links array and generate anchor elements
  const linkElements = props.links.map(link => {
    return (
      <a 
        key={uuidv4()}
        onClick={link.onClick}
        href={link.href}
      >
        {link.name}
      </a>
    )
  });

  return (
    <li 
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      {props.title}
      {isOpen && (
        <div className={`dropdown--content ${props.darkMode ? 'dark-mode' : 'light-mode'}`}
        >
          {linkElements}
        </div>
      )}
    </li>
  );
};

export default Dropdown
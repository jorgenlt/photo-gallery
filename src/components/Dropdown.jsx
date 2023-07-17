import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.title}
      {isOpen && (
        <div       className={`dropdown--content ${props.darkMode ? 'dark-mode' : 'light-mode'}`}
        >
          {linkElements}
        </div>
      )}
    </li>
  );
};

export default Dropdown
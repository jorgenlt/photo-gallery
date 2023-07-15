import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
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
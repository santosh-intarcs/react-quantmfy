import React, { useState } from "react";
import COLORS from '../../constants/colors';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const array = [
    {
      label: 'Services',
      id: 1,
    },
    {
      label: 'Expertise',
      id: 2,
    },
    {
      label: 'Value',
      id: 3,
    },
    {
      label: 'Industries',
      id: 4,
    },
    {
      label: 'Contact',
      id: 5,
    },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div style={{ display: 'flex', position: 'relative', marginTop: 28 }}>
      {array.map((item) => (
        <React.Fragment key={item.id}>
          <div style={{ position: 'relative' }} onClick={() => handleItemClick(item.id)}>
            <p
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                color: 'black',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </p>
            {/* Bottom Circle */}
            <div style={{
              position: 'absolute',
              top: '5%',
              width: '100%',
              height: '1px',
              backgroundColor: COLORS.carbon,
              zIndex: -1,
            }}></div>
            {activeItem === item.id ? (
              <div style={{
                position: 'absolute',
                top: 2,
                left: '50%',
                width: '12px', // Adjusted width for the top circle
                height: '12px', // Adjusted height for the top circle
                borderRadius: '50%',
                backgroundColor: 'transparent',
                marginLeft: '-6px', // Half of the width to center the circle
                marginTop: '-6px', // Half of the height to center the circle
                border: '1px solid',
                borderColor: COLORS.carbon
              }}>
                {/* Inner Circle */}
                <div style={{
                  position: 'absolute',
                  top: '50%', // Center vertically within the outer circle
                  left: '50%', // Center horizontally within the outer circle
                  width: '6px', // Adjusted width for the inner circle
                  height: '6px', // Adjusted height for the inner circle
                  borderRadius: '50%',
                  backgroundColor: COLORS.carbon,
                  marginLeft: '-3px', // Half of the width to center the inner circle
                  marginTop: '-3px', // Half of the height to center the inner circle
                }}></div>
              </div>              
            ) : (
              // Second Circle
              <div style={{
                position: 'absolute',
                top: 4,
                left: '50%',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: COLORS.carbon,
                marginLeft: '-4px',
                marginTop: '-4px',                
              }}></div>
            )}
          </div>

        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;

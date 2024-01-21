import React from "react";
import COLORS from '../../constants/colors';
import Typography from "../../constants/textStyle";

const NavbarVertical = ({ array, activeItem, handleItemClick }) => {
  
  const calculateLineHeight = (index) => {
    const totalItems = array.length;
    const lineHeight = (totalItems - 1) * 24; // Adjust the gap between circles
    return `calc(${index * 24}px + ${lineHeight}px)`; // Adjust the line position
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 28, position: 'relative' }}>
      {array.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'end',
              cursor: 'pointer',
              padding: '12px 0px',
              position: 'relative',
            }}
            onClick={() => handleItemClick(item.id)}
          >
            {/* Outer Circle (visible only for active item) */}
            {activeItem === item.id && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: -4,
                  transform: 'translateY(-50%)',
                  width: '20px', // Adjust the outer circle size
                  height: '20px', // Adjust the outer circle size
                  borderRadius: '50%',
                  backgroundColor: 'transparent', // Set the desired background color for the outer circle
                  border: '2px solid',
                  borderColor: COLORS.carbon,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1, // Ensure the outer circle is above the inner circle
                }}
              >
                {/* Inner Circle */}
                <div
                  style={{
                    width: '10px', // Adjust the inner circle size
                    height: '10px', // Adjust the inner circle size
                    borderRadius: '50%',
                    backgroundColor: COLORS.carbon,
                  }}
                />
              </div>
            )}
            {/* Inner Circle (visible for all items except active item) */}
            {activeItem !== item.id && (
              <div
                style={{
                  width: '10px', // Adjust the inner circle size
                  height: '10px', // Adjust the inner circle size
                  borderRadius: '50%',
                  backgroundColor: COLORS.carbon,
                  position: 'absolute',
                  top: '50%',
                  right: 1,
                  transform: 'translateY(-50%)',
                  zIndex: 2, // Ensure the inner circle is above the line
                }}
              />
            )}
            {/* Text */}
            <p style={{...Typography.label, marginRight: 30 }}>{item.label}</p>
          </div>
        </React.Fragment>
      ))}
      {/* Vertical Line */}
      <div
        style={{
          position: 'absolute',
          top: 12, // Half of the circle height
          right: 6,
          width: '1px',
          height: calculateLineHeight(array.length - 1),
          backgroundColor: COLORS.carbon, // Set the background color to match your line color
          zIndex: 0, // Ensure the line is behind the circles
        }}
      />
    </div>
  );
};

export default NavbarVertical;

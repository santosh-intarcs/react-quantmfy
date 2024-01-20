import React, { useState } from 'react';
import COLORS from '../../constants/colors';
import Typography from '../../constants/textStyle';


const InputStyle = {
  border: '2px solid',
  borderColor: COLORS.carbon,
  borderRadius: 4,
  padding: 10
}

const ContainerStyle = {
  marginBottom: 24,
  display: 'flex',
  flexDirection: 'column',


}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organizationName: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: 24, marginRight: 0 }}>
            <label htmlFor="firstName" style={Typography.bodyM}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={InputStyle}
            />
          </div>
          <div style={ContainerStyle}>
            <label htmlFor="lastName" style={Typography.bodyM}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={InputStyle}
            />
          </div>
        </div>
        <div style={ContainerStyle}>
          <label style={Typography.bodyM} htmlFor="email" >Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={InputStyle}
          />
        </div>
        <div style={ContainerStyle}>
          <label htmlFor="organizationName" style={Typography.bodyM}>Organisation Name</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            style={InputStyle}
          />
        </div>
        <div style={ContainerStyle}>
          <label htmlFor="comments" style={Typography.bodyM}>Comments</label>
          <textarea
            id="comments"
            name="Comment (optional)"
            value={formData.comments}
            onChange={handleChange}
            style={InputStyle}
          />
        </div>
        <button style={{ alignSelf:'end', width:'25%', backgroundColor: COLORS.carbon, padding: 10, color: COLORS.white, borderRadius: 4, border: "none", textTransform: 'uppercase', fontSize: 14, fontWeight: 600, minHeight: 44, marginBottom: 30 }}>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;

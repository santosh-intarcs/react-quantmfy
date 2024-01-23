import React, { useState } from 'react';
import Typography from '../../constants/textStyle';
import { ContactFormWrapper } from './Footer.styles';



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
    <ContactFormWrapper>
      <form onSubmit={handleSubmit} >
        <div className='form-container'>
          <div className='name-container'>
            <div className='container-style'>
              <label htmlFor="firstName" style={Typography.bodyM}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className='input-style'
              />
            </div>
            <div  className='container-style'>
              <label htmlFor="lastName" style={Typography.bodyM}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className='input-style'
              />
            </div>
          </div>
          <div  className='container-style'>
            <label style={Typography.bodyM} htmlFor="email" >Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='input-style'
            />
          </div>
          <div  className='container-style'>
            <label htmlFor="organizationName" style={Typography.bodyM}>Organisation Name</label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className='input-style'
            />
          </div>
          <div className='container-style'>
            <label htmlFor="comments" style={Typography.bodyM}>Comments</label>
            <textarea
              id="comments"
              name="Comment (optional)"
              value={formData.comments}
              onChange={handleChange}
              className='input-style'
            />
          </div>
          <button className='button'>Submit</button>
        </div>
      </form>
    </ContactFormWrapper>
  );
};

export default ContactForm;

import React, { useState } from 'react'

const Details = () => {
    const [formdata, setFormdata] = useState({
         name: "",
         placeOfBirth: "",
         timeOfBirth: "",
         dateOfBirth: "",
        name1: "",
         placeOfBirth1: "",
         timeOfBirth1: "",
         dateOfBirth1: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormdata({ ...formdata, [name]: value});
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formdata);
    alert(`Form submitted! Check console for data.`);
  };

  return (
    <>
    <div className='Details'>
        <p>Fill the details</p>
        <div className='Flex'>
        <form className='sub-details' onSubmit={handleSubmit}>
            <p>You💓</p>
             
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            required
            placeholder='Enter Your Name'
            
          />
        

       
          
          <input
            type="text"
            name="placeOfBirth"
            value={formdata.placeOfBirth}
            onChange={handleChange}
            required
            placeholder='Enter Your Place Of Birth'
            
          />
        

        
          
          <input
            type="time"
            name="timeOfBirth"
            value={formdata.timeOfBirth}
            onChange={handleChange}
            required
        
            
          />
       
         
          <input
            type="date"
            name="dateOfBirth"
            value={formdata.dateOfBirth}
            onChange={handleChange}
            required

            
          />
        

        <button
          type="submit"
          
        >
          Submit
        </button>
            
        </form>


         <form className='sub-details' onSubmit={handleSubmit}>
            <p>Your Partner💓</p>
             
          <input
            type="text"
            name="name"
            value={formdata.name1}
            onChange={handleChange}
            required
            placeholder='Enter Your Name'
            
          />
        

       
          
          <input
            type="text"
            name="placeOfBirth"
            value={formdata.placeOfBirth1}
            onChange={handleChange}
            required
            placeholder='Enter Your Place Of Birth'
            
          />
        

        
          
          <input
            type="time"
            name="timeOfBirth"
            value={formdata.timeOfBirth1}
            onChange={handleChange}
            required
        
            
          />
       
         
          <input
            type="date"
            name="dateOfBirth"
            value={formdata.dateOfBirth1}
            onChange={handleChange}
            required

            
          />
        

        <button
          type="submit"
          
        >
          Submit
        </button>
            
        </form>
        </div>
    </div>

    </>
    
  )
}

export default Details
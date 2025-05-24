import React from 'react'

export const Contact = () => {
  const handleformsubmit =(formData) =>{
    e.preventDefault();
    //const formData = new FormData(e.target);
    const formInputData= Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return <section className='section-contact'>
    <h2 className='container-title'>Contact Us</h2>
    <div className='contact-wrapper container'>
    <form onSubmit={handleformsubmit}>
      <input 
       type="text"
       className='form-control'
       required 
       autoComplete='off' 
       placeholder='enter your name' 
       name='username'/>
      
      <input 
       type="email"
       className='form-control'
       required 
       autoComplete='off' 
       placeholder='enter your email' 
       name='email'/>
      
      <textarea
      className='form-control'
      rows="10"
      placeholder='enter your message' 
      name='message'
      required 
      autoComplete='off' 
      ></textarea>

      <button type='submit' value="send">Send</button>
    </form>
    </div>
  </section>
}
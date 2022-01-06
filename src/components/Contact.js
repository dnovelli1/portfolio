import React from 'react';

const Contact = () => {
    return (
        <div className='bg-dark'>
        <div className='container border' style={{marginTop: "50px", width: "50%", backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhAa7B5UZ3LfeEz-h3S-dLr-0kxrySJjKIA&usqp=CAU)", backgroundPosition:"center", backgroundSize: "cover"}}>
            <h1>Contact Form</h1>
            <form>
                <label>name</label>
                <input type="text" name="name" className='form-control'/>

                <label>Email</label>
                <input type="email" name="user_email" className='form-control'/>

                <label>Message</label>
                <textarea name="message" rows="4" className='form-control'/>
                <input type="submit" value="Send" style={{  }}/>
            </form>
        </div>         
        </div>
    )
}
export default Contact;
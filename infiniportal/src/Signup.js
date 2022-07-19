import React from 'react';


export default Signup => {
    return (
        <>

            <h1>New Organization Registration</h1><br />
            <h3>Personal Information</h3><br/>
            <h4 className='text-left margintop-1rem'>Thank you for your interest in InfiniPortal©. Please fill out the following
                information to register for an account.
            </h4>

            <div className='signupcontainer'>
                <form className='signupForm'>
                    <div className='formSection'>
                        <div className='inputContain'>
                            <label className='formLabel' for="firstName">First Name</label>
                            <input name='firstName' placeholder='First Name' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="lastName">Last Name</label>
                            <input name='lastName' placeholder='Last Name' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="birthday">Date of Birth</label>
                            <input type="date" name='birthday' onfocus="(this. type='date')" />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="tel">Phone Number</label>
                            <input type="tel" name='tel' placeholder='555-555-5555' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="birthday">Date of Birth</label>
                            <input type="date" name='birthday' placeholder='Date of Birth' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="street">Street Name</label>
                            <input name='street' placeholder='123 Main Street' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="city">City</label>
                            <input name='city' placeholder='City Name' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="state">State</label>
                            <input name='state' placeholder='State' />
                        </div>
                    </div>
                    <h4 className='text-left margintop-1rem'>Organization Information
                    </h4>
                    <div className='formSection'>
                        <div className='inputContain'>
                            <label className='formLabel' for="contactFirstName">Contact First Name</label>
                            <input name='contactFirstName' placeholder='Contact First Name' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="contactLastName">Contact Last Name</label>
                            <input name='contactLastName' placeholder='Contact Last Name' />
                        </div>
                        
                        <div className='inputContain'>
                            <label className='formLabel' for="businessTel">Phone Number</label>
                            <input type="businessTel" name='businessTel' placeholder='555-555-5555' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="businessStreet">Street Name</label>
                            <input name='businessStreet' placeholder='123 Main Street' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="businessCity">City</label>
                            <input name='businessCity' placeholder='City Name' />
                        </div>
                        <div className='inputContain'>
                            <label className='formLabel' for="businessState">State</label>
                            <input name='businessState' placeholder='State' />
                        </div>
                    </div>
                    <button className='registerBtn'>Create Account</button>
                </form>

            </div>

        </>
    )
}



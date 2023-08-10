import { useState } from 'react';
import './PhoneNoInputs.css'

const PhoneNoInput = ({phoneNoVerified}) => {
    const [phoneNo, setPhoneNo] = useState('')
    return  (
        <div>
            <section>
                <label id='label'>PhoneNo</label>
                <input id='inputPhone' placeholder='PhoneNo...' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
            </section>
            <div className='externalSignin' id='next' onClick={() => phoneNoVerified(phoneNo)}>
                {/* Todo: Facebook Logo */}
                <span>Next</span>
            </div>
        </div>
    )
}

export default PhoneNoInput;
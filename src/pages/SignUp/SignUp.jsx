import { useState } from 'react'
import './SignUp.css'



const SignForm = (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    /* const [country, setCountry] = useState('') */
    const [confirmPassword, setConfirmPassword] = useState('')
    /* const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState(''); */
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            alert('You are IN!')
        }
    }

    const isFormValid = () => {
        return validateEmail() && validatePassword() && validateConfirmPassword() /* && validateAge()  */&& isChecked /* && country */ !== '';
    }

    /* const validateAge = () => {
        const today = new Date();
        const birthDate = new Date(birthday);
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18){
            return alert('You must be 18 years old to register')
        }else{
            return age >= 18;
        }
    }; */
    
    /* const styleBirthday = () => {
        if (birthday === '') {
            return '';
        } else {
            return validateAge() ? 'valid' : 'invalid';
        }
    };
 */
    const validateConfirmPassword = () => {
        return confirmPassword === password;
    }

    const styleConfirmPassword = () => {
        if (confirmPassword === '') {
            return '';
        } else {
            return validateConfirmPassword() ? 'valid' : 'invalid';
        }
    }

    
    function checkboxClicked(event) {
        setIsChecked(event.target.checked)
    }
    
    const validateEmail = () => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    
    const validatePassword = () => {
        return password.length > 5
    }
    
    
    const stylefullName = () => {
        if (fullName === '') {
            return ''
        }
    }
        
    const styleEmail = () => {
        if (email === '') {
            return ''
        } else {
            return validateEmail() ? 'valid' : 'invalid'
        }
    }
    
    const stylePassword = () => {
        if (password === '') {
            return ''
        } else {
            return validatePassword() ? 'valid' : 'invalid'
        }
    }
    
    
    return (
        <div className='container' id="container">
            <div className='form-container sign-up-container'></div>
        <form action='#'>
            <h1>Sign Up</h1>
                <input type="text" placeholder= "Full Name" className={stylefullName()} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <br/>
                <input type="email" placeholder= "Email" className={styleEmail()} value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <input type="password" placeholder="Password" className={stylePassword()} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <input type="password" placeholder="Confirm Password" className={styleConfirmPassword()} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        
            {/* <label>
                Country:
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Country</option>
                {countries.map(country => (
                    <option key={country.code} value={country.name}>{country.name}</option>
                    ))}
                </select> 
            </label>
            <br />
            Gender:
            <br />
            <label>
                Male
                <input type="radio" name="gender" value="small" onChange={(event) => setGender(e.target.value)} />
            </label>
            <label>
                Female
                <input type="radio" name="gender" value="small" onChange={(event) => setGender(e.target.value)} />
            </label>
            <label>
                Undisclosed
                <input type="radio" name="gender" value="small" onChange={(event) => setGender(e.target.value)} />
            </label>
            <br />
            <label>
                Date of Birth:
                <input  type="date" className={styleBirthday()} value={birthday} onChange={(e) => setBirthday(e.target.value)}/>

            </label>
            <br /> */}
            <br/>
            <label>
                Agree to terms and conditions
                <input type="checkbox" checked={isChecked} onChange={(event) => checkboxClicked(event)} />
            </label>
            <br />
            <button type="submit">
                SIGN UP
            </button>

        </form>
        </div>
    )

}

export default SignForm


/* export const SignUp = () => {
  return (

    <div>SignUp</div>
  )
} */


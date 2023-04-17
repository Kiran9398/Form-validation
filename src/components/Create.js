import { useState, } from "react"
import { useNavigate } from "react-router-dom";
export const Create = () =>
{
    const [ name, setName ] = useState();
    const [ age, setAge ] = useState();
    const [ dob, setDob ] = useState();
    const [ gender, setGender ] = useState();
    const [ relationship, setRelationship ] = useState();
    const [ school, setSchool ] = useState();
    const [ userDetails, setUserDetails ] = useState( JSON.parse( localStorage.getItem( "user-info" ) ) !== null ? JSON.parse( localStorage.getItem( "user-info" ) ) : [] );

    const navigate = useNavigate();
   
    const submitForm = (e) =>
    {
        e.preventDefault();
        const array = ( [ ...userDetails, { name, age, dob, gender, relationship, school } ] );
        setUserDetails( array );
        localStorage.setItem( "user-info", JSON.stringify( array ) );
        console.log( array )
        navigate( "/read" );
        
    }
   
    
    return (
        <>
            <form onSubmit={submitForm}>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" required
                        value={name}
                        onChange={(e) => {
                          const arr = (name, e.target.value);
                          setName(arr);
                         
                        }}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td><input type="number" required
                        value={age}
                        onChange={(e) => {
                          const arr = (age, e.target.value);
                          setAge(arr);
                        }}/></td>
                        </tr>
                        <tr>
                            <th>DOB</th>
                            <td><input type="date" required
                        value={dob}
                        onChange={(e) => {
                          const arr = (dob, e.target.value);
                          setDob(arr);
                         
                        }}/></td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td><select required value={gender}
                        onChange={(e) => {
                          const arr = (gender, e.target.value);
                          setGender(arr);
                         
                        }}>
                                <option value="">Select</option>
                                <option >Male</option>
                                <option>Female</option>
                            </select>
                        </td>
                        </tr>
<tr>
                            <th>Relationship</th>
                            <td><select required value={relationship}
                        onChange={(e) => {
                          const arr = (relationship, e.target.value);
                          setRelationship(arr);
                         
                        }}>
                                <option value="">Select</option>
                                <option >Single</option>
                                <option>Married</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <th>School</th>
                            <td><input type="text"
                        value={school}
                        onChange={(e) => {
                          const arr = (school, e.target.value);
                          setSchool(arr);
                         
                                } } />
                              
                                </td>
                        </tr>
                       
                    </tbody>
                </table>
                <button type="submit" >Submit</button>
            </form></>
    )
}

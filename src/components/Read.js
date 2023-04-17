import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Read.css";
export const Read = () => {
  //  const [ updatedCount, setUpdatedCount ] = useState( 0 )
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("user-info"))
  );
  const navigate = useNavigate();

  const editForm = (e, index) => {
    console.log(index);
    navigate("/form");
  };
  const removeInputFields = (e, index) => {
    const rows = [...details];
    const deletedArr = rows.splice(index, 1);
    setDetails(rows);
    localStorage.setItem("user-info", JSON.stringify(rows));
    //  console.log(deletedArr)
    //      console.log(rows,  index );
    //  localStorage.removeItem( "user-info", index );
    //  console.log( index );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Relationship</th>
            <th>School</th>
            <th>updates</th>
          </tr>
        </thead>
        <tbody>
          {details.map((value, index) => {
            return (
              <>
                <tr>
                  <td>{value.name}</td>

                  <td>{value.age}</td>

                  <td>{value.dob}</td>

                  <td>{value.gender}</td>

                  <td>{value.relationship}</td>
                  <td>{value.school} </td>

                  <td>
                    <button
                      onClick={(e) => {
                        editForm(e, index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        removeInputFields(e, index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
          ;
        </tbody>
      </table>
    </>
  );
};
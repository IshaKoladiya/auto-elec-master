import { useState } from "react";
import "../style/new-password.css";
import { useNavigate, useParams } from "react-router-dom";
import InputFilled from "../../components/ui/InputFilled";
import { axiosGet, axiosPut } from "../../helper/genral-helper";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const { id ,endpoints} = useParams();

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Password not match");
      return;
    }

    // axios.get("http://localhost:5000/users").then((res) => {
    // let user = null;

    // res.data.map((users) => {
    //   if (users.email === atob(email)) {
    //     console.log(users.email);
    //     user = users;
    //   }
    // });

    if (id) {
      axiosGet(`${atob(endpoints)}/${atob(id)}`).then((res) => {
        if (res) {
          const putData = { ...res.data, password: btoa(password) };
          axiosPut(`${atob(endpoints)}/${atob(id)}`, putData).then((res) => {
              console.log("updated sussessfully", res.data);
              navigate("/login");
            })
        } else {
          alert("Please check your email and try again.");
        }
      });

      
      // const putData = { ...user, password: btoa(password) };

      // axios
      //   .put(`http://localhost:5000/users/${user.id}`, putData)
      //   .then((res) => {
      //     console.log("updated sussessfully",res.data);
      //   });

      // fetch(`http://localhost:5000/users/${user.id}`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ ...user, password: btoa(password)}),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log("new pass",atob(res.password));
      //     console.log(res)
      //   });
    }
    // });

    //   fetch("http://localhost:5000/users")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     let user = null;

    //     res.map((users)=>{
    //         if (users.email === atob(email)) {
    //             console.log(users.email)
    //             user = users;
    //           }
    //     })
    //     if (user) {
    //         fetch(`http://localhost:5000/users/${user.id}`, {
    //           method: "PUT",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({ ...user, password: btoa(password) }),
    //         })
    //           .then((res) => res.json())
    //           .then((res) => {
    //             console.log("new pass",atob(res.password));
    //             console.log(res)
    //           });
    //       }
    // })
  };
  return (
    <>
      <div className="container">
        <h1>New Password</h1>
        <form onSubmit={handleSubmitPassword}>
          <InputFilled
            type="password"
            placeholder="Enter your New password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <InputFilled
            type="password"
            placeholder="Enter your Confirm password"
            onChange={(event) => {
              setConfirmPass(event.target.value);
            }}
          />
          <InputFilled type="submit" value="Save" />
        </form>
      </div>
    </>
  );
};

export default NewPassword;

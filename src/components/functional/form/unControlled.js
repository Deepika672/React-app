import { useRef } from "react";

const UncontrolledComponent = () => {
    const usernameRef =useRef(null)
    const passwordRef=useRef(null)
    const submitHandler=(event)=>{
        event.preventDefault()
        const username=usernameRef.current.value
        const password=passwordRef.current.value
        console.log(username,password)

        if(username.length>5&&password.length>5){
            alert("username and password must be less than 5 characters")
        }
        else{

        let userInfo={
            username:username,
            password:password
        }
        console.log(userInfo)
    }
    }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={usernameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            ref={passwordRef}
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default UncontrolledComponent;
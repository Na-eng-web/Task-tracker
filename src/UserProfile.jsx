import { useContext } from "react";
import { profile } from "./App.jsx";

const UserProfile = () => {
  const ab = useContext(profile);
  return (
    <div>
      <h1 id="name">Name:-{ab.name}</h1>
      <h1 id="age">Age:-{ab.age}</h1>
    </div>
  );
};

export default UserProfile;

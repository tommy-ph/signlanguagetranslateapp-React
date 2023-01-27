import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/userProvider";
import { useEffect } from "react";
import "./profile.css";

const Profile = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const deleteWord = (id) => {
    const removedItem = user.translations.filter((word, index) => index !== id);
    setUser({ ...user, translations: [...removedItem] });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null)
    navigate("/");
  };

  return (
    <div className="view-profile-container">
      <div className="profile-inner-container">
        <div className="container">
          <div className="list-header">
            <h3>Last 10 translated word</h3>
          </div>
          <div className="list-container">
            {user &&
              user.translations.map((word, key) => (
                <div className="list-words" key={key}>
                  <p>{word}</p>
                  <button className="delete-btn" onClick={() => deleteWord(key)}>delete</button>
                </div>
              ))}
          </div>
        </div>
        <div className="logout-button">
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;

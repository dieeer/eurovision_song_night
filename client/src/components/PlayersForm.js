import { useState } from "react";
import { postPlayer } from "../services/PlayersService";
import "./PlayersCard.css";
import PlayersCard from "./PlayersCard";

const avatarImages = [
  {
    id: 1,
    url: "https://i.imgur.com/ZWE1wWC.jpg",
  },
  {
    id: 2,
    url: "https://i.imgur.com/xvsSiF8.jpg",
  },
  {
    id: 3,
    url: "https://i.imgur.com/uT0Lx0z.jpg",
  },
  {
    id: 4,
    url: "https://i.imgur.com/ynlccZM.jpg",
  },
  {
    id: 5,
    url: "https://i.imgur.com/uhbXF1b.jpg",
  },
];

const backgroundImages = [
  {
    id: 1,
    url: "https://wallpaperaccess.com/full/7053062.jpg",
  },
  {
    id: 2,
    url: "https://wallpaperaccess.com/full/3871478.jpg",
  },
  {
    id: 3,
    url: "https://www.irishexaminer.com/cms_media/module_img/2847/1423988_1_articlelarge_ie-332363_c9ec5e88f00e43fe8a8492f75b2b3dd2.jpg",
  },
  {
    id: 4,
    url: "https://wallpaperaccess.com/full/39612.jpg",
  },
  {
    id: 5,
    url: '"https://escxtra.com/wp-content/uploads/ESC-2021-Logotipo-780x470.jpg"',
  },
  {
    id: 6,
    url: "https://dk135eecbplh9.cloudfront.net/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png",
  },
];

const PlayersForm = ({ addPlayers }) => {
  const [formData, setFormData] = useState({
    // name: "",
    // img: link6,
    // background:link12
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmit = (e) =>{
      e.preventDefault();
      postPlayer(formData).then((data)=>{
          addPlayers(data);

          setFormData({
              name: "",
              img: "https://i.imgur.com/ZWE1wWC.jpg",
              background:"https://dk135eecbplh9.cloudfront.net/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png"
          });

      })
  }

  const handleImg = (link) => {
    setFormData({
      ...formData,
      img: link,
    });
  };

  return (
    <>
      <section>
        <img id="api-img" src={formData.img} className="select-profile" />
        <img
          id="api-img"
          src={formData.background}
          className="select-background"
        />

        <h2>Select your avatar</h2>
        <img id="api-img" src={avatarImages[0].url} className="static" />
        <button
          onClick={() => handleImg(avatarImages[0].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={avatarImages[1].url} className="static" />
        <button
          onClick={() => handleImg(avatarImages[1].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={avatarImages[2].url} className="static" />
        <button
          onClick={() => handleImg(avatarImages[2].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={avatarImages[3].url} className="static" />
        <button
          onClick={() => handleImg(avatarImages[3].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={avatarImages[4].url} className="static" />
        <button
          onClick={() => handleImg(avatarImages[4].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>

        <h2>Apply a theme</h2>
        <img id="api-img" src={backgroundImages[0].url} className="static" />
        <button
          onClick={() => handleImg(backgroundImages[0].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={backgroundImages[1].url} className="static" />
        <button
          onClick={() => handleImg(backgroundImages[1].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={backgroundImages[2].url} className="static" />
        <button
          onClick={() => handleImg(backgroundImages[2].url)}
          className="avatar"
        >
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={backgroundImages[3].url} className="static" />
        <button onClick={() => handleImg(backgroundImages[3].url)} className="avatar">
          {" "}
          add{" "}
        </button>
        <img id="api-img" src={backgroundImages[4].url} className="static" />
        <button onClick={() => handleImg(backgroundImages[4].url)} className="avatar">
          {" "}
          add{" "}
        </button>
        <form onSubmit={onSubmit} id="players-form">
          <h2>Create new player</h2>
          <div className="formWrap">
            <label htmlFor="name">Name:</label>
            <input
              onChange={onChange}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="field"
            />
          </div>

          <input type="submit" value="Add Player" id="save" />
        </form>
      </section>
    </>
  );
};

export default PlayersForm;

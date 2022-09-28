import {useState} from "react";
import { postPlayer } from "../services/PlayersService";
import './PlayersCard.css';
import PlayersCard from "./PlayersCard";
const link = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png';
const link1 = 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png';
const link2 = 'https://w7.pngwing.com/pngs/861/742/png-transparent-fifa-18-just-for-laughs-comedy-festival-fifa-17-batdad-just-for-laughs-gags-men-s-expression-of-surprise-men-s-blue-dress-shirt-illustration-face-people-smiley.png';
const link3 = 'https://e7.pngegg.com/pngimages/446/646/png-clipart-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child.png';
const link4 = 'https://w7.pngwing.com/pngs/488/1002/png-transparent-laughter-why-do-we-laugh-humour-joke-white-house-white-house-face-head-united-states.png';
const link5 = "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png"
const PlayersForm = ({addPlayers}) => {



    // some state to hold all links (array)
    // some state to hold current index
    // on click increment index
    // if we're on the last index set to first
    // update the form data
    // display the right images
    
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        sex: "",
        img: link,
        
    })


    // const [button, setButton] = useState(link)
    // const [button1, setButton1] = useState(link1)
    // const [button2, setButton2] = useState(link2)


    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postPlayer(formData).then((data)=>{
            addPlayers(data);
            
        })
    }
        
        const handleImg = () =>{
            setFormData({       
               ...formData,
                img: link1
            });
        }
        const handleImg1 = () =>{
            setFormData({       
                ...formData,
                img: link2
            });
        }
        const handleImg2 = () =>{
            setFormData({       
                ...formData,
                img: link3
            });

        }

            const handleImg3 = () =>{
                setFormData({       
                    ...formData,
                    img: link4
                });
            }
            const handleImg4 = () =>{
                setFormData({       
                    ...formData,
                    img: link5
                });
            }
        
    






    return (
        <>
        
        <section>
        <img id="api-img" src={formData.img}  className="select-profile"/>
        <form onSubmit={onSubmit} id="players-form" >
            <h2>Add Players Here!</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} className="field"/>
            </div>
            <div className="field">
                <label htmlFor="location">Age:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="age" 
                    name="age"
                    value={formData.age} />
            </div>
            <div className="field">
                <label htmlFor="date">Sex:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="sex" 
                    name="sex" 
                    value={formData.sex} className="field"/>
            </div>


            
            <input type="submit" value="Add Player" id="save"/>

	    </form>
            
            <img id="api-img" src={link1} className="static" />
            <button onClick={handleImg} className="avatar" > add </button>
            <img id="api-img" src={link2} className="static" />
            <button onClick={handleImg1} className="avatar"> add </button>
            <img id="api-img" src={link3} className="static" />
            <button onClick={handleImg2} className="avatar" > add </button>
            <img id="api-img" src={link4} className="static" />
            <button onClick={handleImg3} className="avatar" > add </button>
            <img id="api-img" src={link5} className="static" />
            <button onClick={handleImg4} className="avatar" > add </button>
            
            
            
            
            
        </section>
        </>
    );
}

export default PlayersForm;
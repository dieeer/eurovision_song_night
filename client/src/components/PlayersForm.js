import {useState} from "react";
import { postPlayer } from "./PlayersService";
import './PlayersCard.css';
import PlayersCard from "./PlayersCard";
const link = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png';
const link1 = 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png';
const link2 = 'https://w7.pngwing.com/pngs/861/742/png-transparent-fifa-18-just-for-laughs-comedy-festival-fifa-17-batdad-just-for-laughs-gags-men-s-expression-of-surprise-men-s-blue-dress-shirt-illustration-face-people-smiley.png';
const link3 = 'https://e7.pngegg.com/pngimages/446/646/png-clipart-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child.png';
const link4 = 'https://w7.pngwing.com/pngs/488/1002/png-transparent-laughter-why-do-we-laugh-humour-joke-white-house-white-house-face-head-united-states.png';
const link5 = "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png"
const link6 = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/300372581_371952665141695_8797064267575780247_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=j3OXkXhOePcAX-n4pAd&_nc_ht=scontent-man2-1.xx&oh=00_AT90ZS880X945Hs5DKf3Dw9Ofn0BQcuUjtP6SpMLFEv6Aw&oe=63384220'
const link7 = "https://wallpaperaccess.com/full/7053062.jpg";
const link8 = "https://wallpaperaccess.com/full/3871478.jpg";
const link9 = "https://www.irishexaminer.com/cms_media/module_img/2847/1423988_1_articlelarge_ie-332363_c9ec5e88f00e43fe8a8492f75b2b3dd2.jpg";
const link10 = "https://wallpaperaccess.com/full/39612.jpg";
const link11 = "https://escxtra.com/wp-content/uploads/ESC-2021-Logotipo-780x470.jpg";
const link12 = 'https://dk135eecbplh9.cloudfront.net/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png'
const PlayersForm = ({addPlayers}) => {




    
    const [formData, setFormData] = useState({

        name: "",
        img: link6,
        background:link12
        
    })


    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postPlayer(formData).then((data)=>{
            addPlayers(data);
            
            setFormData({
                name: "",
                img: link6,
                background:link12
            });

            
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
            const background = () =>{
                setFormData({       
                   ...formData,
                   background: link7
                });
            }
            const background1 = () =>{
                setFormData({       
                   ...formData,
                   background: link8
                });
            }
            const background2 = () =>{
                setFormData({       
                   ...formData,
                   background: link9
                });
            }
            const background3 = () =>{
                setFormData({       
                   ...formData,
                   background: link10
                });
            }
            const background4 = () =>{
                setFormData({       
                   ...formData,
                   background: link11
                });
            }
        
    





    return (
        <>
        
        <section>
        
        <img id="api-img" src={formData.img}  className="select-profile"/>
        <img id="api-img" src={formData.background}  className="select-background" />
        

            <h2>Add you're avatar!</h2>
            <img id="api-img" src={link1} className="static" />
            <button onClick={handleImg} className="avatar5" > add </button>
            <img id="api-img" src={link2} className="static" />
            <button onClick={handleImg1} className="avatar5"> add </button>
            <img id="api-img" src={link3} className="static" />
            <button onClick={handleImg2} className="avatar6" > add </button>
            <img id="api-img" src={link4} className="static3" />
            <button onClick={handleImg3} className="avatar4" > add </button>
            <img id="api-img" src={link5} className="static3" />
            <button onClick={handleImg4} className="avatar4" > add </button>

            <h2>Choose you're player theme!</h2>
            <img id="api-img" src={link7} className="static1" />
            <button onClick={background} className="avatar2" > add </button>
            <img id="api-img" src={link8} className="static1" />
            <button onClick={background1} className="avatar2"> add </button>
            <img id="api-img" src={link9} className="static1" />
            <button onClick={background2} className="avatar2" > add </button>
            <img id="api-img" src={link10} className="static2" />
            <button onClick={background3} className="avatar3" > add </button>
            <img id="api-img" src={link11} className="static2" />
            <button onClick={background4} className="avatar3" > add </button>
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

     


    
            <input type="submit" value="Add Player" id="save"/>
	    </form>
        
        </section>
        </>
    );
}

export default PlayersForm;
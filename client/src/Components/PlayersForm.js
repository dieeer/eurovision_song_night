import {useState} from "react";
import { postPlayer } from "./PlayersService";
import './PlayersCard.css';

const PlayersForm = ({addPlayers}) => {
    
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
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
        })
        
        setFormData({
            name: "",
            age: "",
            sex: "",
        });
    }

    return (
        <>
        <section>
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
        </section>
        </>
    );
}

export default PlayersForm;
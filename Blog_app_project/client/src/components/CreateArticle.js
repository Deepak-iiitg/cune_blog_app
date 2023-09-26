import { useState } from "react";
import './styles.css';
import axios from 'axios';
function CreateArticle() {
    const [inputs, setInput] = useState({ title: '', category: '', descriptions: '' });
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(inputs);
        const data = await axios.post('http://localhost:8080/article',inputs);
        alert(data.data.message);
        inputs.title='';
        inputs.category = '';
        inputs.descriptions = '';
    }
    const handleSelect=(e)=>{
        setInput({...inputs,category:e.target.value});
        console.log(inputs.category);
    }
    return (
        <div class='create-form'>
            <h1 style={{ textAlign: "center" }}>Add Article</h1>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <span>Title</span>
                    <input type='text' onChange={(e) => {
                        setInput({ ...inputs, title: e.target.value })
                    }} value={inputs.title || ''} placeholder="enter title"></input>
                </div>
                <div>
                    <span>Category</span>
                    <select value={inputs.category} onChange={handleSelect}>
                        <option selected value="none">none</option>
                        <option value='Food'>Food</option>
                        <option value='Educations'>Educations</option>
                        <option value='Business'>Business</option>
                        <option value='Positions'>Positions</option>
                    </select>
                </div>
                <div>
                    <span>Description</span>
                    <textarea type='text' onChange={(e) => {
                        setInput({ ...inputs, descriptions: e.target.value })
                    }} value={inputs.descriptions || ''} placeholder="enter description .."></textarea>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}
export default CreateArticle;
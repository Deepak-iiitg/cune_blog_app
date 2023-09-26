import './styles.css';
import { useContext } from 'react';
import { blogContext } from '../App';
function Navbar(){
    const {setRender} = useContext(blogContext);
    return(
        <div className="nav">
            <span>Blogify</span>
            <span>
                <button onClick={()=>{
                    setRender('article')
                }}>All Articles</button>
            </span>
            <span>
                <button onClick={()=>{
                    setRender('add')
                }}>Add Article</button>
            </span>
        </div>
    )
}
export default Navbar;
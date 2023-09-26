import { blogContext } from "../App";
import { useContext } from "react";
import FetchArticles from "./FetchArticles";
import CreateArticle from "./CreateArticle";
function Dash(){
   const {render} = useContext(blogContext);
   if(render === 'article'){
       return <FetchArticles/>
   }else{
    return <CreateArticle/>
   }
}
export default Dash;
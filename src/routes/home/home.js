import Categories from "../../componenets/categories-data/categories-data.components";
import Directory from "../../componenets/directory/directory.components";
import "../../componenets/directory/directory.styles.scss"



const Home = () => {
 
  
  return (
    <div>

<Directory
    categories={Categories}
/>

    </div>
   
  );
}

export default Home;

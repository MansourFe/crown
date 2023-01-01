import "./componenets/directory/directory.styles.scss"

import Categories from "./componenets/categories-data/categories-data.components";
import Directory from "./componenets/directory/directory.components";
const App = () => {
 
  
  return (
    <Directory 
    categories={Categories}
    />
  );
}

export default App;

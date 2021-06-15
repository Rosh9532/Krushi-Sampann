import React, { useEffect } from 'react'
import { getAllCategory } from '../../actions/category.action';
import {useDispatch,useSelector} from 'react-redux';
import "./style.css"

/**
* @author
* @function CategoryHeader
**/

const CategoryHeader = (props) => {
    const category = useSelector(state => state.category);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllCategory())
    },[]);

    console.log(category)
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
          myCategories.push(
            <li key={category.name}>
              {
                category.parentId ? <a
                  href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                  {category.name}
                </a> :
                <span>{category.name}</span>
              }
              {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
            </li>
          );
        }
        return myCategories;
      }

  return(
    //   <div style={{backgroundColor:"#28a745",
    //   height: "40px"
    //   }}>
    <div>
          <div className="menuHeader">
          <ul>
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>
      {/* <p>{category.name}</p> */}
          </div>
       </div>
    
   )

 }

export default CategoryHeader;
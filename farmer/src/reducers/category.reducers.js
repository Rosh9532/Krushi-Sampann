import { categoryConstants } from "../actions/constants"

const initState={
    error:null,
    categories:[],
    loading:false
}

const buildNewCategories=(parentId,categories,category)=>{
    let myCategories=[];
    if(parentId==undefined){//always false
        return[
            ...categories,
            {
                _id:category._id,
                name:category.name,
                categoryImage: category.categoryImage,
                slug:category.slug,
                type:category.type,  //added new
                children:[]
            }
        ]
    }

    for(let cat of categories){

        if(cat._id==parentId){
            const newCategory={
                _id:category._id,
                name:category.name,
                slug:category.slug,
                categoryImage: category.categoryImage,
                parentId:category.parentId,    
                type:category.type,
                children:[]
            };
            myCategories.push({
                ...cat,
                children:cat.children.length > 0 ?[...cat.children,newCategory]:[newCategory] 
            })
        }else{
            myCategories.push({
                ...cat,
                children:cat.children ? buildNewCategories(parentId,cat.children,category):[]
            })
        }
           
    }
    return myCategories;
}

export default(state=initState,action)=>{
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state={
                ...state,
               
                loading:true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:   
            state={
            ...state,
            categories:action.payload.categories,
            
            
            
            }
        break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:   
            state={
            ...state,
            loading:false,
            message:action.payload.error
            }   
        break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:   
            state={
            ...state,
            loading:true,
            
            }   
        break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:  
           const category=action.payload.category;
           const updatedCategories= buildNewCategories(category.parentId,state.categories,category)
           console.log("updated categories",updatedCategories)
            state={
            ...state,
            categories:updatedCategories,
            loading:false,
        
            }   
        break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:   
            state={
            ...state,
            loading:false,
            error:action.payload.error
            
            }   
        break;
        case categoryConstants.UPDATE_CATEGORY_REQUEST:
            state={
                ...state,
                loading:true
            }
        break;
        case categoryConstants.UPDATE_CATEGORY_SUCCESS:
            state={
                ...state,
                loading:false
            }
        break;
        case categoryConstants.UPDATE_CATEGORY_FAILURE:
            state={
                ...state,
                error:action.payload.error
            }
        break;
        case categoryConstants.DELETE_CATEGORIES_REQUEST:
            state={
                ...state,
                loading:true                
            }
        break;
        case categoryConstants.DELETE_CATEGORIES_SUCCESS:
            state={
                ...state,
                loading:false              
            }
        break;
        case categoryConstants.DELETE_CATEGORIES_FAILURE:
            state={
                ...state,
                loading:false,
                error:action.payload.error             
            }
        break;
        
    }
    return state;
}
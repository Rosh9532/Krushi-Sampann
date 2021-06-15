const Category=require('../models/category');
const slugify=require('slugify');


function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    }
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        parentId: cate.parentId,
        //type: cate.type,
        children: createCategories(categories, cate._id),
      });
    }
  
    return categoryList;
  }

exports.addCategory=(req,res)=>{
    const categoryobj=new Category({
        name:req.body.name,
        slug:slugify(req.body.name)
    })
    if(req.file){
        categoryobj.categoryImage=process.env.API+'/public/'+req.file.filename;
    }
    if(req.body.parentId){
        categoryobj.parentId=req.body.parentId
    }

    categoryobj.save((err,category)=>{
        if(err){
           return res.status(500).json({
               message:"Something went wrong"
           })
        }
        if(category){
            return res.status(200).json({
                category
            })
        }
    })
}

exports.getCategory=(req,res)=>{
    Category.find({},(err,categories)=>{
      if(err){
           return res.status(500).json({
               message:"Something went wrong"
           })
      }  
      if(categories){
           const categorylist=createCategories(categories);
           return res.status(201).json({
               categorylist
           });
      }
    })
}

exports.deleteCategory=async (req,res)=>{
    const{ids}=req.body.payload
    const deletedCategories=[];
    for(let i=0;i<ids.length;i++){
      const deleteCategory=await Category.findOneAndDelete({_id:ids[i]._id})
      deletedCategories.push(deleteCategory);
    }
    if(deletedCategories.length==ids.length){
      res.status(201).json({message:"Categories removed"})
    }
    else{
      res.status(500).json({message:"Somenthing went wrong while removing"})
    }
}
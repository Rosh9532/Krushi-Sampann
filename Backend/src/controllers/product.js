const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category")

exports.createProduct = (req, res) => {
  const { name, price, district, unit, quantity, description, category } = req.body
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map(file => {
      return { img: file.filename }
    })
  }

  const product = new Product({
    name,
    slug: slugify(name),
    price,
    district,
    unit,
    quantity,
    description,
    productPicture: productPictures,
    category,
    createdBy: req.user._id
  })

  product.save((err, product) => {
    if (err) {
      return res.status(500).json({
        message: "Error in creating the product"
      })
    }
    if (product) {
      return res.status(200).json({
        product
      })
    }
  })
}


exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId })
      .populate("createdBy", 'firstName lastName username')
      .exec((err, product) => {
        if (err) {
          return res.status(500).json({ err });
        }
        if (product) {
          res.status(200).json({ product });
        }
      })
  } else {
    return res.status(500).json({ error: "Params required" });
  }
}





exports.deleteProductById = (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Product.deleteOne({ _id: productId }).exec((error, result) => {
      if (error) return res.status(500).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(500).json({ error: "Params required" });
  }
};

exports.getProducts = async (req, res) => {

  const products = await Product.find({ createdBy: req.user._id })
    .select("_id name price quantity slug description district unit productPicture category")
    .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ products });
};







exports.getProductByLocation = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id")
    .exec((error, category) => {
      if (error) {
        return res.status(500).json({ error });
      }

      if (category) {
        Product.find({ category: category._id })
          .populate("createdBy", 'firstName lastName username')
          .exec((error, products) => {
            if (error) {
              return res.status(500).json({ error });
            }

            //
            if (products.length > 0) {
              res.status(200).json({
                products,

                location: {
                  InBuldhana: "Buldhana",
                  InRatnagiri: "Ratnagiri",
                  InNasik: "Nasik",

                },
                locationWise: {
                  InBuldhana: products.filter((product) => product.district == "Buldhana"),
                  InRatnagiri: products.filter((product) => product.district == "Ratnagiri"),
                  InNasik: products.filter((product) => product.district == "Nasik")
                }

              })
            }
            //



          });
      }
    });
};




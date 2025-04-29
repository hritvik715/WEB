const homeController = (req, res) => {
  const data = {
    name: "HuXn",
    userId: 20,
  };
  // res.render("index");
  res.render("index", data);//imp-> it allow us to render our EJS content (ye index file views folder vaali hai)
};

export { homeController };

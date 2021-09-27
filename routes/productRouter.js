
// 🍀 products엔드포인트에서, get메소드로 요청할 때(제품 리스트 API)
//4.router(엔드포인트 분기) ...express.Router() 안쓰고 express()로 쓴 상태
app.get('/products', async (req, res) => {
  //1. model
  //복수의 표를 참조해야 하는 상황 (list : product + category + image)
  getProductList = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from categories;
    `; //위의 categories엔드포인트에서 get메소드로 요청할 때와 같은 내용이지만, getProduct함수에 다른 내용이 들어갈 것이 없으니 이렇게 표현 가능
  }

  //3. controller
  const productList = getProductList(); //디비에서 받아온 데이터 //함수실행시켜야함 ();으로
  res.json(productList);
});

// 🍀 products/2엔드포인트에서, get메소드로 요청할 때(제품 상세 API)
app.get('/products/2', async (req, res) => {
  getProductDetail = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from nutritions
    SELECT * from product_allergies
    SELECT * from allergies;
    `;
  } //JOIN한 것 가져오는 게 좋았으려나?
  const productDetail = getProductDetail();
  res.json(productDetail);
});

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const apiProducts: any[] = response.data; // Đổi kiểu của dữ liệu từ API

      // Biến đổi dữ liệu từ API thành dữ liệu kiểu Product
      const transformedProducts: Product[] = apiProducts.map((apiProduct) => ({
        coord: {
          lon: apiProduct.id, // Lấy giá trị thí dụ từ id sản phẩm trong API
          lat: 0, // Giả sử giá trị là 0
        },
        weather: [
          {
            id: apiProduct.id, // Lấy giá trị thí dụ từ id sản phẩm trong API
            main: apiProduct.title, // Lấy giá trị thí dụ từ title sản phẩm trong API
            desc: apiProduct.description, // Lấy giá trị thí dụ từ description sản phẩm trong API
            icon: '09d', // Giả sử giá trị là '09d'
          },
        ],
        base: 'stations',
        main: {
          temp: apiProduct.price, // Lấy giá trị thí dụ từ price sản phẩm trong API
          pre: 0, // Giả sử giá trị là 0
          humidity: 0, // Giả sử giá trị là 0
          'temp-min': 0, // Giả sử giá trị là 0
        },
      }));

      setProductList(transformedProducts);
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('result', productList);

  return (
    <div>
      {productList.map((product, index) => (
        <div key={index}>
          <h1>{`Product ${index + 1}`}</h1>
          <p>{`Latitude: ${product.coord.lat}, Longitude: ${product.coord.lon}`}</p>
          <p>{`Temperature: ${product.main.temp}`}</p>
          <p>{`Weather: ${product.weather[0].main}, Description: ${product.weather[0].desc}`}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
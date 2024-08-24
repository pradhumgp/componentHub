import { useState, useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
    setTotalPages(data.total);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      {products.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.slice(page * 10 - 10, page * 10).map((product, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 p-2 bg-white rounded-md shadow-md"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
                <div className="flex gap-3">
                  <span>{product.title}</span>
                  <span>{product.price}$</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="flex justify-center gap-3 p-8 text-3xl text-white">
          <span
            className="p-2 border rounded-sm cursor-pointer hover:text-gray-400"
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, index) => {
            return (
              <span
                key={index}
                className={`${
                  page === index + 1 ? "bg-gray-600" : ""
                } p-2 border rounded-sm cursor-pointer hover:text-gray-400`}
                onClick={() => selectPageHandler(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}
          <span
            className="p-2 border rounded-sm cursor-pointer hover:text-gray-400"
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;

import { useState, useEffect, useCallback } from "react";

const PaginationBE = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = useCallback(async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await res.json();
    setProducts(data.products);
    setTotalPages(Math.ceil(data.total / 10));
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      {products.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => {
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
        <div className="flex flex-wrap justify-center gap-1 p-4 text-3xl text-white">
          <span
            className="p-2 border rounded-sm cursor-pointer hover:text-gray-400"
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(totalPages)].map((_, index) => {
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

export default PaginationBE;

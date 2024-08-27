function Product(props) {
  return (
      <div className="p-4 flex flex-col">
        <div className="img-container pt-8 w-32 h-52 mx-auto grid place-items-center ">
          <img className=" align-middle object-cover mx-auto"src={props.productimg} alt=""></img>
        </div>
        <div className="">{props.category}</div>
        <div className="w-66 font-bold break-words lg:line-clamp-3 md:line-clamp-2 product-ctn">{props.title}</div>
        <div className="w-66 h-ctn break-words lg:line-clamp-3 md:line-clamp-2 product-ctn">{props.descript}</div>
        <div className="flex mt-2">
          <div className="mr-4 p-1">{props.price}</div>
          <div className="flex items-center px-2 w-10 likebox">{props.star}</div>
        </div>
      </div>
  );
}
export default Product;

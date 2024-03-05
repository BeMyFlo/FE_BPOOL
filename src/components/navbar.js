import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSearch, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import axios from 'axios';

function Navbar() {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //     axios.get('http://localhost:8000/category')
  //         .then(response => {
  //             setCategories(response.data.data);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching data', error);
  //         });
  // }, []);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-20">
        <div className="flex justify-between items-center h-full">
          <div>
            <img className="h-12" src="/logo.png" alt="Mô tả hình ảnh" />
          </div>
          <div className="flex h-full items-center gap-12">
            <Link to="/" className="hover:text-orange-700 font-normal">
              <div>Trang chủ</div>
            </Link>
            <Link to="/product" className="hover:text-orange-700 font-normal">
              <div>Sản phẩm</div>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/login" className="hover:underline font-normal">
              <div>Login</div>
            </Link>
            <Link to="/register" className="hover:underline font-normal">
              <div>Register</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

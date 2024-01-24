import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Navbar({cart}) {
    
   return(
//     <div className="container d-flex justify-content-between p-3">
//     <div className="left d-flex align-items-center">
//         <p className='fs-4'>Start Bootstrap</p>
//         <div className="page-Section">
//         <ul className='d-flex gap-3'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Shop</li>
//         </ul>
//         </div>
//     </div>
//     <div className="right d-flex gap-2 justify-content-center align-items-center border border-black">
//     <FontAwesomeIcon icon={faCartShopping} />  
//     <p>Cart</p>
//     <p>{cart}</p>
//     </div>
// </div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fs-4" href="#">Star Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      <div className="right d-flex gap-2 justify-content-center align-items-center border border-black">
     <FontAwesomeIcon icon={faCartShopping} />  
     <p>Cart</p>
    <p>{cart}</p>
     </div>
    </div>
  </div>
</nav>
   );
}
export default Navbar;
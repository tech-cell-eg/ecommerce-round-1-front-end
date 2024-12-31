import { Link } from "react-router-dom";

export default function Mega() {
  return (
    <div className="bg-white shadow-md w-[80%] p-8">
      <ul className="grid grid-cols-4 gap-4">
        <div className="flex flex-col border-r-2 border-gray-100 pr-4">
          {/* Men Section */}
          <div className="flex flex-col mb-4">
            <h3 className="font-bold mb-2 text-lg">Men</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">T-Shirts</Link>
              </li>
              <li>
                <Link to="/shop">Casual Shirts</Link>
              </li>
              <li>
                <Link to="/shop">Formal Shirts</Link>
              </li>
              <li>
                <Link to="/shop">Jackets</Link>
              </li>
              <li>
                <Link to="/shop">Blazers & Coats</Link>
              </li>
            </ul>
          </div>

          {/* Indian & Festive Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Indian & Festive Wear</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">Kurtas & Kurta Sets</Link>
              </li>
              <li>
                <Link to="/shop">Sherwanis</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-r-2 border-gray-100 pr-4">
          {/* Women Section */}
          <div className="flex flex-col mb-4">
            <h3 className="font-bold mb-2 text-lg">Women</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">Kurtas & Suits</Link>
              </li>
              <li>
                <Link to="/shop">Sarees</Link>
              </li>
              <li>
                <Link to="/shop">Ethnic Wear</Link>
              </li>
              <li>
                <Link to="/shop">Lehenga Cholis</Link>
              </li>
              <li>
                <Link to="/shop">Jackets</Link>
              </li>
            </ul>
          </div>

          {/* Western Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Western Wear</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">Dresses</Link>
              </li>
              <li>
                <Link to="/shop">Jumpsuits</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-r-2 border-gray-100 pr-4">
          {/* Footwear Section */}
          <div className="flex flex-col mb-4">
            <h3 className="font-bold mb-2 text-lg">Footwear</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">Flats</Link>
              </li>
              <li>
                <Link to="/shop">Heels</Link>
              </li>
              <li>
                <Link to="/shop">Boots</Link>
              </li>
              <li>
                <Link to="/shop">Sports Shoes & Floaters</Link>
              </li>
            </ul>
          </div>

          {/* Product Features Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Product Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop">360 Product Viewer</Link>
              </li>
              <li>
                <Link to="/shop">Product with video</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Kids Section */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-2 text-lg">Kids</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/shop">T-Shirts</Link>
            </li>
            <li>
              <Link to="/shop">Shirts</Link>
            </li>
            <li>
              <Link to="/shop">Jeans</Link>
            </li>
            <li>
              <Link to="/shop">Trousers</Link>
            </li>
            <li>
              <Link to="/shop">Party Wear</Link>
            </li>
            <li>
              <Link to="/shop">Innerwear & Thermal</Link>
            </li>
            <li>
              <Link to="/shop">Track Pants</Link>
            </li>
            <li>
              <Link to="/shop">Value Pack</Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}

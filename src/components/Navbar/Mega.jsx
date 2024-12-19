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
                <Link to="#">T-Shirts</Link>
              </li>
              <li>
                <Link to="#">Casual Shirts</Link>
              </li>
              <li>
                <Link to="#">Formal Shirts</Link>
              </li>
              <li>
                <Link to="#">Jackets</Link>
              </li>
              <li>
                <Link to="#">Blazers & Coats</Link>
              </li>
            </ul>
          </div>

          {/* Indian & Festive Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Indian & Festive Wear</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#">Kurtas & Kurta Sets</Link>
              </li>
              <li>
                <Link to="#">Sherwanis</Link>
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
                <Link to="#">Kurtas & Suits</Link>
              </li>
              <li>
                <Link to="#">Sarees</Link>
              </li>
              <li>
                <Link to="#">Ethnic Wear</Link>
              </li>
              <li>
                <Link to="#">Lehenga Cholis</Link>
              </li>
              <li>
                <Link to="#">Jackets</Link>
              </li>
            </ul>
          </div>

          {/* Western Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Western Wear</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#">Dresses</Link>
              </li>
              <li>
                <Link to="#">Jumpsuits</Link>
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
                <Link to="#">Flats</Link>
              </li>
              <li>
                <Link to="#">Heels</Link>
              </li>
              <li>
                <Link to="#">Boots</Link>
              </li>
              <li>
                <Link to="#">Sports Shoes & Floaters</Link>
              </li>
            </ul>
          </div>

          {/* Product Features Section */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 text-lg">Product Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#">360 Product Viewer</Link>
              </li>
              <li>
                <Link to="#">Product with video</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Kids Section */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-2 text-lg">Kids</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#">T-Shirts</Link>
            </li>
            <li>
              <Link to="#">Shirts</Link>
            </li>
            <li>
              <Link to="#">Jeans</Link>
            </li>
            <li>
              <Link to="#">Trousers</Link>
            </li>
            <li>
              <Link to="#">Party Wear</Link>
            </li>
            <li>
              <Link to="#">Innerwear & Thermal</Link>
            </li>
            <li>
              <Link to="#">Track Pants</Link>
            </li>
            <li>
              <Link to="#">Value Pack</Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}

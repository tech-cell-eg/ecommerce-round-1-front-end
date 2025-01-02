import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllSubcategories } from "../../api/subcategories/getallSubcategories";
import getcategoryById from "../../api/categories/categoryById";

export default function Mega({ closeMegaMenu }) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      const allCategory = [];
      for (let id = 1; id <= 10; id++) {
        const categoryData = await getcategoryById(id);
        if (categoryData && categoryData["sub-category"]?.length > 0) {
          allCategory.push(categoryData);
        }
      }
      setCategory(allCategory);
      setLoading(false);
    };
    getCategory();
  }, []);

  const sortSubcategories = (subcategories) => {
    return subcategories
      .filter((sub) => sub !== "No subcategories available")
      .sort((a, b) => a.localeCompare(b));
  };

  return (
    <div className="bg-white shadow-md w-[80%] p-8">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {category.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col border-r-2 border-gray-100 pr-4"
            >
              <div className="flex flex-col mb-4">
                <h3 className="font-bold mb-2 text-lg">{cat.name}</h3>
                <ul className="space-y-2">
                  {sortSubcategories(cat["sub-category"]).map((sub, index) => (
                    <li key={index}>
                      <Link to={`/shop/${cat.id}`} onClick={closeMegaMenu}>
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

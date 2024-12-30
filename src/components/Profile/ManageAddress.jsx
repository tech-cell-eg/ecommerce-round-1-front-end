import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { Button, Alert } from "flowbite-react";
import {
  fetchUserAddresses,
  createAddress,
  deleteAddress,
  updateAddress,
} from "../../api/checkout/address";
import AddAddressModal from "./models/AddAddressModal";
import EditAddressModal from "./models/EditAddressModal";

export default function ManageAddress() {
  const [addresses, setAddresses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAddresses = async () => {
      setLoading(true);
      try {
        const fetchedAddresses = await fetchUserAddresses();
        setAddresses(fetchedAddresses);
      } catch (error) {
        setAlert({
          message: "Failed to fetch addresses.",
          type: "failure",
          visible: true,
        });
      } finally {
        setLoading(false);
      }
    };
    loadAddresses();
  }, []);

  const handleAddAddress = async (newAddress) => {
    setLoading(true);
    try {
      const createdAddress = await createAddress(newAddress);
      setAddresses((prev) => [...prev, createdAddress]);
      setAlert({
        message: "Address added successfully.",
        type: "success",
        visible: true,
      });
    } catch (error) {
      setAlert({
        message: "Failed to add address. Please try again.",
        type: "failure",
        visible: true,
      });
    } finally {
      setLoading(false);
      setShowAddModal(false);
    }
  };

  const handleEditAddress = async (id, updatedAddress) => {
    setLoading(true);
    try {
      const newAddress = await updateAddress(id, updatedAddress);
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === id ? newAddress : addr))
      );
      setAlert({
        message: "Address updated successfully.",
        type: "success",
        visible: true,
      });
    } catch (error) {
      setAlert({
        message: "Failed to update address.",
        type: "failure",
        visible: true,
      });
    } finally {
      setLoading(false);
      setEditingAddress(null);
    }
  };

  const handleDeleteAddress = async (id) => {
    setLoading(true);
    try {
      await deleteAddress(id);
      setAddresses((prev) => prev.filter((address) => address.id !== id));
      setAlert({
        message: "Address deleted successfully.",
        type: "success",
        visible: true,
      });
    } catch (error) {
      setAlert({
        message: "Failed to delete address.",
        type: "failure",
        visible: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Saved Addresses</h2>
      {alert.visible && <Alert color={alert.type}>{alert.message}</Alert>}

      <Button
        onClick={() => setShowAddModal(true)}
        className="btn-primary px-8 w-fit flex items-center bg-black text-white"
      >
        <FaPlus className="mr-2" />
        Add New Address
      </Button>

      <div className="space-y-4 mt-6">
        {addresses.length === 0 ? (
          <p className="text-gray-500 text-center">No saved addresses.</p>
        ) : (
          addresses.map((address) => (
            <div
              key={address.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold">{address.name}</p>
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.state} {address.pin_code}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setEditingAddress(address)}
                >
                  <FaEdit /> Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteAddress(address.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showAddModal && (
        <AddAddressModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddAddress}
        />
      )}

      {editingAddress && (
        <EditAddressModal
          address={editingAddress}
          onClose={() => setEditingAddress(null)}
          onSave={handleEditAddress}
        />
      )}
    </section>
  );
}

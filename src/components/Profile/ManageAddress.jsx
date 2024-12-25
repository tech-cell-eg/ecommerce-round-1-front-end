import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { Button, TextInput, Label, Spinner, Modal } from "flowbite-react";
import {
  fetchUserAddresses,
  createAddress,
  deleteAddress,
  updateAddress,
} from "../../api/checkout/address";

export default function ManageAddress() {
  const [addresses, setAddresses] = useState([]);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile_number: "",
    address: "",
    area: "",
    city: "",
    state: "",
    pin_code: "",
    default_address: "0",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAddresses = async () => {
      const fetchedAddresses = await fetchUserAddresses();
      setAddresses(fetchedAddresses);
    };
    loadAddresses();
  }, []);

  const validateInputs = () => {
    const { name, mobile_number, address, area, city, state, pin_code } =
      newAddress;

    if (
      !name ||
      !mobile_number ||
      !address ||
      !area ||
      !city ||
      !state ||
      !pin_code
    ) {
      alert("All fields are required.");
      return false;
    }

    if (mobile_number.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return false;
    }

    return true;
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    setLoading(true);
    try {
      const createdAddress = await createAddress(newAddress);
      setAddresses([...addresses, createdAddress]);

      // Reset form
      setNewAddress({
        name: "",
        mobile_number: "",
        address: "",
        area: "",
        city: "",
        state: "",
        pin_code: "",
        default_address: "0",
      });
      setShowNewAddressForm(false);
    } catch (error) {
      console.error("Error creating address:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      setLoading(true);
      await deleteAddress(id);
      setAddresses(addresses.filter((address) => address.id !== id));
    } catch (error) {
      console.error("Error deleting address:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setNewAddress({
      name: address.name,
      mobile_number: address.mobile_number,
      address: address.address,
      city: address.city,
      area: address.area,
      state: address.state,
      pin_code: address.pin_code,
    });
    setShowModal(true);
  };

  const handleUpdateAddress = async () => {
    try {
      const updatedAddress = await updateAddress(editingAddress.id, newAddress);
      setAddresses(
        addresses.map((addr) =>
          addr.id === editingAddress.id ? { ...addr, ...updatedAddress } : addr
        )
      );
      setEditingAddress(null);
      setNewAddress({
        name: "",
        mobile_number: "",
        address: "",
        city: "",
        area: "",
        state: "",
        pin_code: "",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Error updating address:", error.message);
    }
  };
  return (
    <>
      <section>
        {showNewAddressForm ? (
          <form onSubmit={handleAddAddress} className="space-y-4">
            {/* Form Fields */}
            <div>
              <Label htmlFor="name">Name</Label>
              <TextInput
                id="name"
                placeholder="Enter Name"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="mobile_number">Mobile Number</Label>
              <TextInput
                id="mobile_number"
                placeholder="Enter Mobile Number"
                min={11}
                max={11}
                value={newAddress.mobile_number}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    mobile_number: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <TextInput
                id="address"
                placeholder="Enter House No., Building, etc."
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="area">Area</Label>
              <TextInput
                id="area"
                placeholder="Area, Colony, Street, etc."
                value={newAddress.area}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, area: e.target.value })
                }
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <TextInput
                  id="city"
                  placeholder="Enter City"
                  value={newAddress.city}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, city: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <TextInput
                  id="state"
                  placeholder="Enter State"
                  value={newAddress.state}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, state: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="pin_code">Pin Code</Label>
              <TextInput
                id="pin_code"
                placeholder="Enter Pin Code"
                value={newAddress.pin_code}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, pin_code: e.target.value })
                }
                required
              />
            </div>
            <Button
              type="submit"
              color="dark"
              className="w-full"
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Add New Address"}
            </Button>
          </form>
        ) : (
          <button
            type="button"
            className="btn-primary px-8 w-fit flex items-center mb-5"
            onClick={() => setShowNewAddressForm(true)}
          >
            <FaPlus className="inline-block mr-1" />{" "}
            <span>Add New Address</span>
          </button>
        )}
      </section>

      {/* Address List */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-semibold text-lg">{address.name}</p>
              <p className="text-sm text-gray-500">{address.address}</p>
              <p className="text-sm text-gray-500">
                {address.city}, {address.state} {address.zip}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleEditAddress(address)}
                className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
              >
                <FaEdit /> <span>Edit</span>
              </button>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="text-red-600 hover:text-red-800 flex items-center space-x-2"
              >
                <FaTrash /> <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
        {/* Edit Modal */}
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Edit Address</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <label className="block text-black font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded bg-white text-black"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
              />

              <label className="block text-black font-medium">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded bg-white text-black"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
              />

              <label className="block text-black font-medium">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded bg-white text-black"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
              />

              <label className="block text-black font-medium">State</label>
              <input
                type="text"
                placeholder="State"
                className="w-full p-2 border rounded bg-white text-black"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
              />

              <label className="block text-black font-medium">ZIP Code</label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-2 border rounded bg-white text-black"
                value={newAddress.zip}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zip: e.target.value })
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleUpdateAddress}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Save Changes
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

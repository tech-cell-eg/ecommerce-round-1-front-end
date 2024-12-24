import { useState, useEffect } from "react";
import { Button, Radio, TextInput, Label, Spinner } from "flowbite-react";
import {
  fetchUserAddresses,
  createAddress,
  deleteAddress,
} from "../../api/checkout/address";
import {
  setSelectedAddress,
  setActiveStep,
} from "../../redux/actions/checkoutActions";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedAddress } from "../../redux/selectors/checkoutSelectors";

const AddressSelection = () => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(selectSelectedAddress);
  const [addresses, setAddresses] = useState([]);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
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
      setShowNewAddressForm(false);
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

  const handleContinue = () => {
    if (selectedAddress) {
      dispatch(setActiveStep(2));
    } else {
      alert("Please select an address before continuing.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>

      {/* Address List Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Select a delivery address
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Is the address you&apos;d like to use displayed below? If so, click
          the corresponding &quot;Deliver Here&quot; button. Or you can enter a
          new address below.
        </p>
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`flex items-center justify-between border rounded-lg p-4 ${
                selectedAddress?.id === address.id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-start space-x-4">
                <Radio
                  id={`address-${address.id}`}
                  name="address"
                  checked={selectedAddress?.id === address.id}
                  onChange={() => dispatch(setSelectedAddress(address))} 
                  className="mt-1"
                />
                <div>
                  <p className="text-lg font-semibold">{address.name}</p>
                  <p className="text-sm text-gray-600">
                    {address.address}, {address.area}
                  </p>
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state}, {address.pin_code}
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: {address.mobile_number}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  color="light"
                  onClick={() => handleDeleteAddress(address.id)}
                  size="xs"
                >
                  Delete
                </Button>
                <Button
                  size="xs"
                  color="dark"
                  onClick={() => dispatch(setSelectedAddress(address))}
                >
                  Deliver Here
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Address Form */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Add a new address</h2>
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
          <Button
            color="light"
            className="w-full"
            onClick={() => setShowNewAddressForm(true)}
          >
            + Add New Address
          </Button>
        )}
      </div>

      {/* Continue Button */}
      <Button
        color="dark"
        className="w-full"
        onClick={handleContinue}
        disabled={!selectedAddress || loading}
      >
        {loading ? <Spinner size="sm" /> : "Continue to Payment"}
      </Button>
    </div>
  );
};

export default AddressSelection;

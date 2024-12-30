import { Modal, Button, TextInput, Label, Spinner } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultAddress = {
  name: "",
  mobile_number: "",
  address: "",
  area: "",
  city: "",
  state: "",
  pin_code: "",
  default_address: "0",
};

export default function AddAddressModal({ onClose, onSave }) {
  const [address, setAddress] = useState(defaultAddress);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSave(address).finally(() => setLoading(false));
  };

  return (
    <Modal show onClose={onClose}>
      <Modal.Header>Add New Address</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <TextInput
              id="name"
              value={address.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <Label htmlFor="mobile_number">Mobile Number</Label>
            <TextInput
              id="mobile_number"
              value={address.mobile_number}
              onChange={(e) => handleChange("mobile_number", e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <TextInput
              id="address"
              value={address.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <Label htmlFor="area">Area</Label>
            <TextInput
              id="area"
              value={address.area}
              onChange={(e) => handleChange("area", e.target.value)}
              placeholder="Enter your area"
              required
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <TextInput
              id="city"
              value={address.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Enter your city"
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <TextInput
              id="state"
              value={address.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="Enter your state"
              required
            />
          </div>
          <div>
            <Label htmlFor="pin_code">Pin Code</Label>
            <TextInput
              id="pin_code"
              value={address.pin_code}
              onChange={(e) => handleChange("pin_code", e.target.value)}
              placeholder="Enter your pin code"
              minLength={5}
              maxLength={6}
              required
            />
          </div>
          <div>
            <Label htmlFor="default_address">Default Address</Label>
            <select
              id="default_address"
              value={address.default_address}
              onChange={(e) => handleChange("default_address", e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? <Spinner size="sm" /> : "Save Address"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

AddAddressModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

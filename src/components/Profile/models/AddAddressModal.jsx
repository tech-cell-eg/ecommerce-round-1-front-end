import {
  Modal,
  Button,
  TextInput,
  Label,
  Spinner,
  Alert,
} from "flowbite-react";
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
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!address.name.trim()) formErrors.name = "Name is required.";

    if (!address.mobile_number) {
      formErrors.mobile_number = "Mobile number is required.";
    } else if (!/^\d{11}$/.test(address.mobile_number)) {
      formErrors.mobile_number = "Mobile number must be 11 digits.";
    }

    if (!address.address.trim()) formErrors.address = "Address is required.";

    if (!address.area.trim()) formErrors.area = "Area is required.";

    if (!address.city.trim()) formErrors.city = "City is required.";

    if (!address.state.trim()) formErrors.state = "State is required.";

    if (!address.pin_code) {
      formErrors.pin_code = "Pin code is required.";
    } else if (!/^\d{5}$/.test(address.pin_code)) {
      formErrors.pin_code = "Pin code must be 5 digits.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      onSave(address).finally(() => setLoading(false));
    }
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
              isInvalid={!!errors.name}
            />
            {errors.name && <Alert color="failure">{errors.name}</Alert>}
          </div>

          <div>
            <Label htmlFor="mobile_number">Mobile Number</Label>
            <TextInput
              id="mobile_number"
              value={address.mobile_number}
              onChange={(e) => handleChange("mobile_number", e.target.value)}
              placeholder="Enter your mobile number"
              required
              isInvalid={!!errors.mobile_number}
            />
            {errors.mobile_number && (
              <Alert color="failure">{errors.mobile_number}</Alert>
            )}
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <TextInput
              id="address"
              value={address.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Enter your address"
              required
              isInvalid={!!errors.address}
            />
            {errors.address && <Alert color="failure">{errors.address}</Alert>}
          </div>

          <div>
            <Label htmlFor="area">Area</Label>
            <TextInput
              id="area"
              value={address.area}
              onChange={(e) => handleChange("area", e.target.value)}
              placeholder="Enter your area"
              required
              isInvalid={!!errors.area}
            />
            {errors.area && <Alert color="failure">{errors.area}</Alert>}
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <TextInput
              id="city"
              value={address.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Enter your city"
              required
              isInvalid={!!errors.city}
            />
            {errors.city && <Alert color="failure">{errors.city}</Alert>}
          </div>

          <div>
            <Label htmlFor="state">State</Label>
            <TextInput
              id="state"
              value={address.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="Enter your state"
              required
              isInvalid={!!errors.state}
            />
            {errors.state && <Alert color="failure">{errors.state}</Alert>}
          </div>

          <div>
            <Label htmlFor="pin_code">Pin Code</Label>
            <TextInput
              id="pin_code"
              value={address.pin_code}
              onChange={(e) => handleChange("pin_code", e.target.value)}
              placeholder="Enter your pin code"
              required
              isInvalid={!!errors.pin_code}
            />
            {errors.pin_code && (
              <Alert color="failure">{errors.pin_code}</Alert>
            )}
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

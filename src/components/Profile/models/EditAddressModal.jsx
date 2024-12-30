import { Modal, Button, TextInput, Label, Spinner } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function EditAddressModal({ address, onClose, onSave }) {
  const [editedAddress, setEditedAddress] = useState({ ...address });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setEditedAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSave(address.id, editedAddress).finally(() => setLoading(false));
  };

  return (
    <Modal show onClose={onClose}>
      <Modal.Header>Edit Address</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <TextInput
              id="name"
              value={editedAddress.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="mobile_number">Mobile Number</Label>
            <TextInput
              id="mobile_number"
              value={editedAddress.mobile_number}
              onChange={(e) => handleChange("mobile_number", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <TextInput
              id="address"
              value={editedAddress.address}
              onChange={(e) => handleChange("address", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="area">Area</Label>
            <TextInput
              id="area"
              value={editedAddress.area}
              onChange={(e) => handleChange("area", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <TextInput
              id="city"
              value={editedAddress.city}
              onChange={(e) => handleChange("city", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <TextInput
              id="state"
              value={editedAddress.state}
              onChange={(e) => handleChange("state", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="pin_code">Pin Code</Label>
            <TextInput
              id="pin_code"
              value={editedAddress.pin_code}
              onChange={(e) => handleChange("pin_code", e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Save Changes"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

EditAddressModal.propTypes = {
  address: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

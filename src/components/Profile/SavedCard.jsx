import { useState, useEffect } from "react";
import { Modal, Button, TextInput, Alert } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  fetchSavedCards,
  addNewCard,
  removeCard,
} from "../../api/checkout/paymentsCard";

export default function SavedCard() {
  const [cards, setCards] = useState([]);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newCard, setNewCard] = useState({
    card_name: "",
    card_number: "",
    card_expiry_date: "",
    card_cvv: "",
  });
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await fetchSavedCards();
        if (data?.data) {
          setCards(data.data);
        } else {
          setCards([]);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
        setError(error);
      }
    };

    fetchCards();
  }, []);

  const handleAddCard = async () => {
    try {
      const response = await addNewCard(newCard);
      setCards((prevCards) => [...prevCards, response.data]);
      setAlert({
        message: "Card added successfully.",
        type: "success",
        visible: true,
      });
      setShowAddCardModal(false);
    } catch (error) {
      console.error("Error adding card:", error);
      setAlert({
        message: "Failed to add card. Please try again.",
        type: "failure",
        visible: true,
      });
      setError(error);
    } finally {
      setNewCard({
        card_name: "",
        card_number: "",
        card_expiry_date: "",
        card_cvv: "",
      });
      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
    }
  };

  const handleDeleteCard = async () => {
    try {
      await removeCard(selectedCardId);
      setCards((prevCards) =>
        prevCards.filter((card) => card.id !== selectedCardId)
      );
      setAlert({
        message: "Card deleted successfully.",
        type: "success",
        visible: true,
      });
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting card:", error);
      setAlert({
        message: "Failed to delete card. Please try again.",
        type: "failure",
        visible: true,
      });
      setError(error);
    } finally {
      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
    }
  };

  const handleCloseAddCardModal = () => {
    setShowAddCardModal(false);
    setNewCard({
      card_name: "",
      card_number: "",
      card_expiry_date: "",
      card_cvv: "",
    });
  };

  const openDeleteModal = (cardId) => {
    setSelectedCardId(cardId);
    setShowDeleteModal(true);
  };

  return (
    <section className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Saved Cards</h2>

      {/* Alert */}
      {alert.visible && (
        <Alert
          color={alert.type === "success" ? "green" : "red"}
          onDismiss={() => setAlert({ ...alert, visible: false })}
        >
          {alert.message}
        </Alert>
      )}

      {/* Add Card Button */}
      <button
        type="button"
        className="btn-primary px-8 w-fit flex items-center bg-black text-white"
        onClick={() => setShowAddCardModal(true)}
      >
        <FaPlus className="inline-block mr-1" /> <span>Add New Card</span>
      </button>

      {/* Card List */}
      <div className="my-6 space-y-4">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png"
                    alt="Card"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{card.card_name}</h4>
                  <p>
                    Card Number: **** **** **** {card.card_number.slice(-4)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary px-8 w-fit flex items-center bg-red-100 text-red-600"
                onClick={() => openDeleteModal(card.id)}
              >
                <RiDeleteBin6Line className="inline-block mr-1" />
                <span>Delete</span>
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">You have no saved cards.</p>
        )}
      </div>

      {/* Add Card Modal */}
      <Modal show={showAddCardModal} onClose={handleCloseAddCardModal}>
        <Modal.Header>Add New Card</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <TextInput
              label="Card Name"
              placeholder="Card Name"
              required
              value={newCard.card_name}
              onChange={(e) =>
                setNewCard({ ...newCard, card_name: e.target.value })
              }
            />
            <TextInput
              label="Card Number"
              placeholder="Card Number"
              min={16}
              max={16}
              required
              value={newCard.card_number}
              onChange={(e) =>
                setNewCard({ ...newCard, card_number: e.target.value })
              }
            />
            <TextInput
              label="Expiry Date"
              placeholder="MM-YY"
              required
              value={newCard.card_expiry_date}
              onChange={(e) =>
                setNewCard({ ...newCard, card_expiry_date: e.target.value })
              }
            />
            <TextInput
              label="CVV"
              placeholder="CVV"
              required
              value={newCard.card_cvv}
              onChange={(e) =>
                setNewCard({ ...newCard, card_cvv: e.target.value })
              }
            />
          </div>
          {error && <p className="text-white py-2">{error.message}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleAddCard}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Add Card
          </Button>
          <Button color="gray" onClick={handleCloseAddCardModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          <p className="text-gray-700">
            Are you sure you want to delete this card?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleDeleteCard}>
            Yes, Delete
          </Button>
          <Button color="gray" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

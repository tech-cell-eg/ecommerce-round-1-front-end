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
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({
    card_name: "",
    card_number: "",
    card_expiry_date: "",
    card_cvv: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

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
      setShowModal(false);
    } catch (error) {
      console.error("Error adding card:", error);
      setAlert({
        message: "Failed to add card. Please try again.",
        type: "failure",
        visible: true,
      });
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

  const handleCloseModal = () => {
    setShowModal(false);
    setNewCard({
      card_name: "",
      card_number: "",
      card_expiry_date: "",
      card_cvv: "",
    });
  };

  const handleDeleteCard = async (id) => {
    try {
      await removeCard({ id });
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      setAlert({
        message: "Card deleted successfully.",
        type: "success",
        visible: true,
      });
    } catch (error) {
      console.error("Error deleting card:", error);
      setAlert({
        message: "Failed to delete card. Please try again.",
        type: "failure",
        visible: true,
      });
    } finally {
      setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
    }
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
        onClick={() => setShowModal(true)}
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
                    src="/image.png"
                    alt="Card"
                    className="w-full h-full object-cover"
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
                onClick={() => handleDeleteCard(card.id)}
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
      <Modal show={showModal} onClose={handleCloseModal}>
        <Modal.Header>Add New Card</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {alert.visible && alert.type === "failure" && (
              <Alert
                color="red"
                onDismiss={() => setAlert({ ...alert, visible: false })}
              >
                {alert.message}
              </Alert>
            )}
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddCard} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Add Card
          </Button>
          <Button color="gray" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

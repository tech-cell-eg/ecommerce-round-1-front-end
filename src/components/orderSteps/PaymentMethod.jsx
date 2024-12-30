import { useEffect, useState } from "react";
import { Button, Radio, TextInput, Label, Spinner } from "flowbite-react";
import { fetchSavedCards, addNewCard } from "../../api/checkout/paymentsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPayment,
  setActiveStep,
} from "../../redux/actions/checkoutActions";
import { selectSelectedPayment } from "../../redux/selectors/checkoutSelectors";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const selectedPaymentMethod = useSelector(selectSelectedPayment);
  const [cardDetails, setCardDetails] = useState({
    card_number: "",
    card_name: "",
    card_expiry_date: "",
    card_cvv: "",
  });
  const [savedCards, setSavedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addingCard, setAddingCard] = useState(false);

  useEffect(() => {
    const loadSavedCards = async () => {
      setLoading(true);
      try {
        const response = await fetchSavedCards();
        setSavedCards(response.data || []);
      } catch (error) {
        console.error("Error fetching saved cards:", error.message);
      } finally {
        setLoading(false);
      }
    };
    loadSavedCards();
  }, []);

  const handleAddCard = async () => {
    if (
      !cardDetails.card_number ||
      !cardDetails.card_name ||
      !cardDetails.card_expiry_date ||
      !cardDetails.card_cvv
    ) {
      alert("All card fields are required.");
      return;
    }

    setAddingCard(true);
    try {
      const newCard = await addNewCard(cardDetails);
      setSavedCards([...savedCards, newCard]);
      dispatch(setSelectedPayment(newCard));
      // Reset form
      setCardDetails({
        card_number: "",
        card_name: "",
        card_expiry_date: "",
        card_cvv: "",
      });
    } catch (error) {
      console.error("Error adding new card:", error.message);
    } finally {
      setAddingCard(false);
    }
  };

  const handleContinue = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    dispatch(setActiveStep(3));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

      <div className="space-y-4">
        {loading ? (
          <Spinner size="lg" className="mx-auto" />
        ) : (
          <>
            {/* Saved Cards */}
            {savedCards?.map((card) => (
              <div
                key={card.id}
                className="border rounded-lg p-4 flex items-center"
              >
                <Radio
                  name="payment"
                  value={card.id}
                  checked={selectedPaymentMethod === card.id}
                  onChange={() => dispatch(setSelectedPayment(card.id))}
                />
                <Label className="ml-2">
                  {card.card_name} - **** **** **** {card.card_number.slice(-4)}
                </Label>
              </div>
            ))}

            {/* Add New Card */}
            <div className="border rounded-lg p-4">
              <Radio
                name="payment"
                value="new-card"
                checked={selectedPaymentMethod === "new-card"}
                onChange={() => dispatch(setSelectedPayment("new-card"))}
              />
              <Label className="ml-2">Add New Card</Label>

              {selectedPaymentMethod === "new-card" && (
                <div className="mt-4 space-y-4">
                  <TextInput
                    placeholder="Card Number"
                    value={cardDetails.card_number}
                    min={16}
                    max={16}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        card_number: e.target.value,
                      })
                    }
                  />
                  <TextInput
                    placeholder="Card Holder Name"
                    value={cardDetails.card_name}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        card_name: e.target.value,
                      })
                    }
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <TextInput
                      placeholder="MM-YY"
                      value={cardDetails.card_expiry_date}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          card_expiry_date: e.target.value,
                        })
                      }
                    />
                    <TextInput
                      placeholder="cvv"
                      value={cardDetails.card_cvv}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          card_cvv: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button
                    color="dark"
                    onClick={handleAddCard}
                    disabled={addingCard}
                  >
                    {addingCard ? <Spinner size="sm" /> : "Add Card"}
                  </Button>
                </div>
              )}
            </div>

            {/* Alternative Payment Methods */}
            <div className="border rounded-lg p-4">
              <Radio
                name="payment"
                value="google-pay"
                checked={selectedPaymentMethod === "google-pay"}
                onChange={() => dispatch(setSelectedPayment("google-pay"))}
              />
              <Label className="ml-2">Google Pay</Label>
            </div>

            <div className="border rounded-lg p-4">
              <Radio
                name="payment"
                value="paypal"
                checked={selectedPaymentMethod === "paypal"}
                onChange={() => dispatch(setSelectedPayment("paypal"))}
              />
              <Label className="ml-2">PayPal</Label>
            </div>

            <div className="border rounded-lg p-4">
              <Radio
                name="payment"
                value="cod"
                checked={selectedPaymentMethod === "cod"}
                onChange={() => dispatch(setSelectedPayment("cod"))}
              />
              <Label className="ml-2">Cash on Delivery</Label>
            </div>
          </>
        )}
      </div>

      <Button
        color="dark"
        className="w-full mt-6"
        onClick={handleContinue}
        disabled={!selectedPaymentMethod || addingCard}
      >
        Continue to Review
      </Button>
    </div>
  );
};

export default PaymentMethod;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Fetch booking data
  const { isPending: isBookingLoading, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  // Payment mutation
  const paymentMutation = useMutation({
    mutationFn: async () => {
      if (!stripe || !elements) throw new Error("Stripe not initialized");

      const card = elements.getElement(CardElement);
      if (!card) throw new Error("Card element not found");

      // Validate card
      const { error: paymentMethodError } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      if (paymentMethodError) throw new Error(paymentMethodError.message);

      // Create payment intent
      const paymentIntentRes = await axiosSecure.post(
        "/payments/create-payment-intent",
        { amountInCents: bookingInfo.price * 100, bookingId },
      );
      const clientSecret = paymentIntentRes?.data?.data?.clientSecret;
      if (!clientSecret) throw new Error("Payment intent creation failed");

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: { name: user.displayName, email: user.email },
        },
      });
      if (result.error) throw new Error(result.error.message);
      if (result.paymentIntent.status !== "succeeded")
        throw new Error("Payment failed");

      return result.paymentIntent;
    },
    onSuccess: async (paymentIntent) => {
      try {
        // Save payment record
        await axiosSecure.post("/payments", {
          bookingId,
          amount: bookingInfo.price,
          email: user?.email,
          transactionId: paymentIntent.id,
          paymentMethod: paymentIntent.payment_method_types,
        });

        // Update booking status
        await axiosSecure.patch(`bookings/${bookingId}`, {
          status: "in-review",
          paymentStatus: "paid",
          transactionId: paymentIntent.id,
        });

        // Show success message
        await darkSwal.fire({
          icon: "success",
          title: "Payment Successful!",
          html: `<strong>Transaction ID:</strong> <code>${paymentIntent.id}</code>`,
          confirmButtonText: "Go to My Bookings",
        });

        navigate("/dashboard/my-bookings");
      } catch (error) {
        throw new Error("Failed to record payment");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    paymentMutation.mutate();
  };

  if (isBookingLoading) {
    return (
      <div className="text-center text-indigo-400 py-20 animate-pulse">
        Loading Booking Info...
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl border border-indigo-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center text-indigo-400 mb-6"
        data-aos="zoom-in"
      >
        Complete Your Payment
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        {/* Booking Details Section - Fully Preserved */}
        <div className="space-y-3 text-gray-300" data-aos="fade-right">
          <p>
            <span className="text-indigo-400 font-semibold">Package:</span>{" "}
            {bookingInfo.packageId?.title}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Location:</span>{" "}
            {bookingInfo.packageId?.location}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tour Date:</span>{" "}
            {new Date(bookingInfo.tourDate).toLocaleDateString()}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Days:</span>{" "}
            {bookingInfo.packageId?.days}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Trip Type:</span>{" "}
            {bookingInfo.packageId?.tripType}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Guide:</span>{" "}
            {bookingInfo.guideName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tourist:</span>{" "}
            {bookingInfo.touristName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Amount:</span>{" "}
            <span className="text-amber-400">${bookingInfo.price}</span>
          </p>
        </div>

        {/* Payment Form Section */}
        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e0e0ff",
                    backgroundColor: "#0f172a",
                    iconColor: "#7dd3fc",
                    "::placeholder": { color: "#94a3b8" },
                  },
                  invalid: {
                    color: "#f87171",
                    iconColor: "#f87171",
                  },
                },
              }}
              className="p-4 border border-indigo-700 rounded bg-[#0f172a]"
            />

            <button
              type="submit"
              disabled={!stripe || paymentMutation.isPending}
              className={`btn w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 ${
                paymentMutation.isPending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500"
              } text-white hover:shadow-indigo-400 shadow-sm hover:scale-105`}
              data-aos="zoom-in"
            >
              {paymentMutation.isPending
                ? "Processing..."
                : `Pay $${bookingInfo.price}`}
            </button>

            {paymentMutation.error && (
              <p className="text-red-500 mt-2 text-sm" data-aos="fade-in">
                {paymentMutation.error.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

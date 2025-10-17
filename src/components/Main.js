import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import CustomerSay from "./CustomerSay";
import Login from "./Login";
import Chicago from "./Chicago";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Chicago" element={<Chicago />} />
        <Route path="/menu" element={<CustomerSay />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/orderonline" element={<Specials />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}
export default Main;

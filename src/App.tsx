import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeatBooking from './pages/search';
import RoutePage from './pages/route'; 
import ReportFeedback from './pages/report_feedback'; 
import Passenger from './pages/passenger'; 
import BookingInformation from './pages/booking'; 
import Seatfrom from './pages/seat'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeatBooking />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/report" element={<ReportFeedback />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/booking" element={<BookingInformation />} />
        <Route path="/seat" element={<Seatfrom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AcademyPage from './pages/AcademyPage'
import InstructorListPage from './pages/InstructorListPage'
import InstructorDetailPage from './pages/InstructorDetailPage'
import ReviewsPage from './pages/ReviewsPage'
import ReviewResultsPage from './pages/ReviewResultsPage'
import CourseDetailPage from './pages/CourseDetailPage'
import AcademyFreePage from './pages/AcademyFreePage'
import AcademyPremiumPage from './pages/AcademyPremiumPage'
import FAQPage from './pages/FAQPage'
import NoticePage from './pages/NoticePage'
import MyPage from './pages/MyPage'
import MyClassroomPage from './pages/MyClassroomPage'
import MyEbooksPage from './pages/MyEbooksPage'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full font-sans bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/instructors" element={<InstructorListPage />} />
            <Route path="/instructors/:id" element={<InstructorDetailPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reviews/results" element={<ReviewResultsPage />} />
            <Route path="/academy/free" element={<AcademyFreePage />} />
            <Route path="/academy/premium" element={<AcademyPremiumPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/my-classroom" element={<MyClassroomPage />} />
            <Route path="/my-ebooks" element={<MyEbooksPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

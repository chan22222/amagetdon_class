import HeroSection from '../components/HeroSection'
import ScheduleCalendar from '../components/ScheduleCalendar'
import FreeCourses from '../components/FreeCourses'
import VideoPromo from '../components/VideoPromo'
import FreeEbooks from '../components/FreeEbooks'
import SecretBooks from '../components/SecretBooks'

function AcademyPage() {
  return (
    <>
      <HeroSection />
      <VideoPromo />
      <ScheduleCalendar title="이달의 무료강의를 확인하세요" />
      <FreeCourses />
      <FreeEbooks />
      <SecretBooks />
    </>
  )
}

export default AcademyPage

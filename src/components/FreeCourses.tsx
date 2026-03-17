import { Link } from 'react-router-dom'

interface Course {
  id: number
  title: string
  instructor: string
}

const COURSES: Course[] = [
  { id: 1, title: '한번 배워서 평생 써먹는\n300 벌고 시작하는 보험 비즈니스', instructor: '강사 김나영' },
  { id: 2, title: '04년생 대학생이 릴스 하나로\n억대 매출 만든 방법 A to Z', instructor: '강사 김나영' },
  { id: 3, title: '월 300 자동 수익 프로세스,\n에이비앤비 & 단기임대 마스터 클래스', instructor: '강사 김나영' },
  { id: 4, title: '경쟁 없는 제품으로\n"월 833만원 버는" 우물 안 커머스', instructor: '강사 김나영' },
  { id: 5, title: '블로그 기반으로 연 매출 80억,\n\'블로그 실행사\' 마스터 클래스', instructor: '강사 김나영' },
  { id: 6, title: '부업으로 시작하는\n광고대행사 창업 \'마스터 클래스\'', instructor: '강사 김나영' },
]

function FreeCourses() {
  return (
    <section className="w-full bg-white py-14 max-sm:py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">무료 강의</h2>
          <Link
            to="/academy/free"
            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-600 bg-white cursor-pointer no-underline hover:bg-gray-50"
          >
            전체 보기 <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-8">
          {COURSES.map((course) => (
            <Link key={course.id} to={`/course/${course.id}`} className="no-underline group">
              <div className="bg-gray-100 rounded-xl h-[235px] flex items-center justify-center mb-3 overflow-hidden">
                <span className="text-sm text-gray-400">썸네일{course.id}<br />380*235px</span>
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-pre-line leading-snug mb-1">
                {course.title}
              </p>
              <p className="text-xs text-gray-400">{course.instructor}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeCourses

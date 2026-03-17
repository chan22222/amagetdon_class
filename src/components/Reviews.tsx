import { Link } from 'react-router-dom'

interface Review {
  name: string
  date: string
  title: string
  content: string
  rating: number
}

const REVIEWS: Review[] = [
  {
    name: 'Kiya',
    date: '2025년 9월 6일',
    title: '후회없는 선택',
    content: '진짜 아깝없이 주것다 내가 듣고싶었고, 이런게 있었으면 좋겠다 했던 정보들을 하나부터 열까지 고심해서 정리한 말에까지 커리큘럼으로 준비하게 노력하시는 강의였습니다.',
    rating: 5,
  },
  {
    name: '이정은',
    date: '2025년 9월 6일',
    title: '어디서도 볼 수 없는 미친 퀄리티에요!!',
    content: '요즘 200만원대 비싼 강의 많잖아요 근데도 강사님이 준비를 안해오시고 실망을 많이 했는데 최형기대표님 강의는 퀄리티가 진짜 놀습니다에 이렇게까지 신경 쓰는 대표님이 있을까요?',
    rating: 5,
  },
  {
    name: '이정은',
    date: '2025년 9월 6일',
    title: 'SNS에서 가장 핫한 클래스 수강 후 월 2천만 원 이상 수익 창출',
    content: '처음에는 반신반의했는데 강의를 듣고 나서 정말 많은 도움이 되었습니다.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
      <span className="text-xs text-gray-900 font-bold ml-1">{rating.toFixed(1)}</span>
    </div>
  )
}

function Reviews() {
  return (
    <section className="w-full bg-white py-16 max-sm:py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">실제 강의 수강생 후기</h2>
          <p className="text-sm text-gray-500">초보도 쉽게 할 수 있게 쉽게 알려드립니다.</p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {REVIEWS.map((review, idx) => (
            <Link
              key={idx}
              to="/reviews"
              className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-md transition-shadow no-underline"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{review.name} | {review.date}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{review.title}</h3>
              <StarRating rating={review.rating} />
              <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
                {review.content}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

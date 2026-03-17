import { Link } from 'react-router-dom'

function FreeEbooks() {
  const ebooks = [
    { id: 1, title: '한번 배워서 평생 써먹는\n300 벌고 시작하는 보험 비즈니스', price: '무료' },
    { id: 2, title: 'TOT 설계사의 하이엔드 세일즈 비법\n[설계사 플랜]', price: '무료' },
    { id: 3, title: 'TOT 설계사의 하이엔드 세일즈 비법\n[설계사 플랜]', price: '무료' },
  ]

  return (
    <section className="w-full bg-white py-14 max-sm:py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">무료 전자책</h2>
          <Link
            to="/academy"
            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-600 bg-white cursor-pointer hover:bg-gray-50 no-underline"
          >
            전체 보기 <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {ebooks.map((book) => (
            <Link key={book.id} to={`/course/${book.id}`} className="no-underline group">
              <div className="bg-gray-100 rounded-xl h-[235px] flex items-center justify-center mb-3 overflow-hidden">
                <span className="text-sm text-gray-400">썸네일{book.id}<br />380*235px</span>
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-pre-line leading-snug mb-1">
                {book.title}
              </p>
              <p className="text-sm text-gray-500">{book.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeEbooks

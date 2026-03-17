function CTASection() {
  return (
    <section className="w-full bg-white py-10 max-sm:py-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div className="bg-black rounded-xl p-10 flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:bg-gray-900 transition-colors">
            <p className="text-lg text-white font-bold text-center mb-2">
              아마겟돈 센터만 에이팅 페이지
            </p>
            <p className="text-sm text-gray-400 text-center">바로가기</p>
          </div>
          <div className="bg-black rounded-xl p-10 flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:bg-gray-900 transition-colors">
            <p className="text-lg text-white font-bold text-center mb-2">
              아마겟돈 강좌 강좌보기
            </p>
            <p className="text-sm text-gray-400 text-center">바로가기</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

export const HeroPlaceHolder = () => {
  return (
    <div className="h-[400px] m:h-[450px] lg:h-[500px] overflow-hidden relative flex justify-center animate-pulse">
      <div className="w-full h-[400px] m:h-[450px] lg:h-[500px] bg-gradient-to-t from-primary from-90% to-primary-foreground opacity-25 absolute top-0"></div>
      <div className="text-amber-50 pt-[70px] lg:pt-[125px] container absolute">
        <div>
          <div className="h-28 mb-5 bg-primary rounded max-w-3xl"></div>
          <div className="h-5 mb-1 bg-primary rounded max-w-4xl"></div>
          <div className="h-5 mb-1 bg-primary rounded max-w-4xl"></div>
          <div className="h-5 mb-5 bg-primary rounded max-w-4xl"></div>
          <div className="h-9 w-24 bg-primary rounded"> </div>
        </div>
      </div>
    </div>
  )
}

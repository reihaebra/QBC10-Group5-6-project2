
const DashboardCard = () => {
  return (
    <div className="w-80 h-40 rounded-lg bg-on-primary-light flex flex-col justify-center gap-4 pr-7">
      <figure className="w-12 h-12 rounded-full bg-primary-main py-3 px-5">$</figure>
      <div className="flex flex-col gap-1">
        <p className="font-normal text-base text-secondary-light">فروش کل</p>
        <p className="font-bold text-xl text-primary-text-light">۰ تومان</p>
      </div>
    </div>
  )
}

export default DashboardCard

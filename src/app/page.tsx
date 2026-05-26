import Image from 'next/image'
import hero1 from '@/assets/hero1.png'
import InfiniteFoodScroll from './components/foodScroll/InfiniteFoodScroll'
import FoodCard, { topChart } from './components/foodCard/foodCard'
import { foods } from '@/data/foods'
import ItemCard from './components/itemCards/ItemCard'

const page = () => {
  return (
    <div className='flex min-h-screen items-center flex-col '>
      <section className="w-full mt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Left Hero */}
          <div className="relative flex items-center overflow-hidden rounded-[28px] bg-[#2a1408] p-8 text-white lg:col-span-2 px-5">

            {/* Content */}
            <div className="relative z-10 max-w-125">
              <h1 className="text-2xl font-bold leading-tight md:text-5xl">
                Best Fast Food & Chinese Restaurant
                for Every Craving
              </h1>

              <p className="mt-5 text-sm text-neutral-300 md:text-base">
                From sizzling Chinese dishes to crispy fast food favorites —
                enjoy bold flavors, fresh ingredients, and unforgettable taste
                in every bite.
              </p>

              <button className="mt-7 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold transition hover:bg-orange-600">
                Signature Flavors
              </button>
            </div>

            {/* Main Food Image */}
            <div className="absolute bottom-0 -right-15 h-80 w-70 md:h-112.5 md:w-112.5">
              <Image
                src={hero1}
                alt="Chinese noodles"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">

            {/* Burger */}
            <div className="group relative min-h-50 overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                alt="Burger"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-5 left-5 z-10 text-white">
                <p className="text-sm text-neutral-200">Extra large</p>
                <h3 className="text-3xl font-bold">Beef Burger</h3>
              </div>

              <p className="absolute bottom-5 right-5 z-10 text-2xl font-semibold text-white">
                75.00$
              </p>
            </div>

            {/* Shawarma */}
            <div className="group relative min-h-50 overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200&auto=format&fit=crop"
                alt="Shawarma"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-5 left-5 z-10 text-white">
                <p className="text-sm text-neutral-200">Spicy</p>
                <h3 className="text-3xl font-bold">Shawarma</h3>
              </div>

              <p className="absolute bottom-5 right-5 z-10 text-2xl font-semibold text-white">
                55.00$
              </p>
            </div>
          </div>
        </div>
      </section>
      <InfiniteFoodScroll />
      <section className="mx-auto mt-10 w-full max-w-6xl p-4 ">

        <p className="mb-6 text-2xl font-bold text-center">
          Top Charts
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topChart.map((food) => (
            <FoodCard
              key={food.id}
              image={food.image}
              name={food.name}
            />
          ))}
        </div>

      </section>
    <section className="mx-auto mt-10 w-full px-4  ">
      {/* heading */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-neutral-900">
          Items
        </h2>

        <button className="text-sm font-medium text-orange-500 hover:underline">
          View all
        </button>
      </div>

      {/* items grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {foods.slice(0, 6).map((food) => (
          <ItemCard
            key={food.id}
            image={food.image}
            name={food.name}
            price={food.price}
            category={food.category}
            mealType={food.mealtype}
          />
        ))}
      </div>
    </section>
    </div>


  )
}

export default page
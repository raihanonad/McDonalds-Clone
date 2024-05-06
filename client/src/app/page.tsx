

export default async function Home() {
  let result = await fetchData();

  return (
    <div className="bg-white">
      {/* NavBar */}
      <NavBarHome />

      {/* Carousel */}
      <Carousel />

      {/* Products */}
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-bold mt-10 mb-10">
          Menu Favorit
        </h1>
        <div className="grid grid-cols-5 mt-10">
          {data.map((item: featured, idx: string) => (
            <Card key={idx} product={item} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/products">
            <button className="btn btn-wide mt-10 bg-red-600 hover:bg-red-700 ml-16">
              <h6 className="text-gray-100">Lihat Semua Menu</h6>
            </button>
          </Link>
        </div>
      </div>

      {/* Banner */}
      <Banner />
      <Footer />
    </div>
  );
}

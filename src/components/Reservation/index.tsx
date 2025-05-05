export default function Reservation() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 h-screen ">
      <h1 className="text-2xl mb-4 text-amber-950">Reservation</h1>
      <p className="text-4xl font-bold text-amber-950">Reserve your table now!</p>

      <form className="flex flex-col gap-4 mt-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="date"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="time"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
        >
          Reserve
        </button>
      </form>
    </div>
  );
}
function App() {
  return (
    <section className="w-full h-full py-32">
      <div className="container mx-auto bg-slate-300">
        <div className="p-5">
          <h1 className="font-bold text-2xl xl:text-center">
            Connect to Messaging Apps
          </h1>
          <form className="flex flex-col gap-3 mt-5 xl:w-1/2 xl:mx-auto">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="border border-gray-300 py-1 px-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-green-500 p-2 rounded-lg text-white font-bold">
              Connect
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;

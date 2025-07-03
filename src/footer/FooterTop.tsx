function FooterTop() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 rounded-2xl w-full h-auto px-6 md:px-12 py-12 max-w-screen-xl mx-auto gap-12 md:gap-24 shadow-lg">
      <div className="flex-1 flex flex-col">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          Subscribe to our newsletter
        </h1>
        <p className="text-white text-sm md:text-base font-light mt-4 leading-relaxed">
          Be the first to receive insights, updates, and expert tips on optimizing your
          financial management.
        </p>
      </div>

      <div className="flex-1 flex flex-col space-y-4 w-full max-w-md">
        <p className="text-white font-medium text-lg">Stay up to date</p>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-xl px-4 py-2 bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
          />
          <button className="rounded-xl px-5 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition">
            Subscribe
          </button>
        </div>
        <p className="text-white text-sm">
          By subscribing you agree to our{" "}
          <a className="underline hover:text-amber-300" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
export default FooterTop;

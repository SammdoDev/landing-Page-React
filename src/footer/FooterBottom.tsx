function FooterBottom() {
  return (
    <div className="w-full py-4 px-6 mt-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-black text-sm">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} CService. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;

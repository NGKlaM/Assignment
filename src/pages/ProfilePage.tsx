const ProfilePage = () => {
  return (

    <div className="container">
      <div className="profile">
        <h1>Profile cá nhân</h1>
        <div className="box">
          <div className="image">
            <img
              src="src/image/pngtree-natural-scenery-in-beautiful-island-picture-image_2873036.jpg"
              alt=""
            />
          </div>
          <div className="text">
            <p>Họ Tên: Nguyễn Kiều Lâm</p>
            <p>Tuổi: 21</p>
            <p>Quê Quán: Ba Vì Hà Nội</p>
            <p>Định Hướng: Full-stack</p>
            <p>Ngôn ngữ đã học: Js, java, C# ,PHP</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="https://flowbite.com/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="public/image/lo-go-valaw.png"
                  className="h-8"
                  alt="Flowbite Logo"
                />

              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProfilePage;

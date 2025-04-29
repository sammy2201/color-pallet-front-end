export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm text-gray-600">© 2025 Tone set</p>
          <div className="mt-4">
            <a
              href="https://facebook.com"
              className="text-blue-500 hover:underline mx-4"
              target="_blank"
              rel="noopener noreferrer">
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-500 hover:underline mx-4"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-blue-500 hover:underline mx-4"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

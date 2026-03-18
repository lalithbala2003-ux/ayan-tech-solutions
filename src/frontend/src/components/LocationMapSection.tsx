export default function LocationMapSection() {
  return (
    <section className="bg-gray-100" id="location">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Find Us</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            No: 184-187, Temple Steps, Block 3, 9th Floor, Anna Salai, Little
            Mount, Saidapet, Chennai - 600 015
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Ayan Tech Solutions Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0073765846784!2d80.21823007480432!3d13.020872287295734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ba64e66baf%3A0x5cd2e4e0e47c2527!2sAnna%20Salai%2C%20Little%20Mount%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu%20600015!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Anna+Salai+Little+Mount+Saidapet+Chennai+600015"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Location pin"
            >
              <title>Location pin</title>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

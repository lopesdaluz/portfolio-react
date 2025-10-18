import "../styles/main.css";
import myPhoto from "../assets/126307010_1004261900086017_3906871137536479823_n.jpg";

export default function Main() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10">
            <img
              src={myPhoto}
              alt="Tatiana"
              className="w-full h-full object-contain object-center scale-110"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to my portfolio
          </h2>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I am Tatiana, a Full Stack Developer based in Gothenburg, Sweden.
            With a lifelong interest in technology, I decided to fully commit to
            my passion in 2022, enrolling in the developer program at IT
            Högskolan in Gothenburg.
          </p>

          <p className="leading-relaxed">
            During my time there, I had the opportunity to complete an
            internship at Junio AB, where my team and I developed a school
            platform that allows teachers to seamlessly manage and share
            educational materials with their students.
          </p>

          <div className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-inner">
            <p className="leading-relaxed text-gray-200">
              Coming from a background rich in customer-focused roles, I bring a
              unique perspective to software development. My ability to
              understand customer needs, combined with my technical expertise,
              allows me to create solutions that are not only functional but
              also user-centric.
            </p>
          </div>

          <p className="leading-relaxed">
            I am particularly passionate about accessibility and inclusivity in
            tech, which is why WCAG (Web Content Accessibility Guidelines) is a
            key focus for me.
          </p>

          <p className="leading-relaxed">
            What excites me most about software development is the constant
            evolution of the field. I thrive on learning new technologies and
            tackling complex challenges.
          </p>

          <div className="text-center mt-12">
            <a
              href="#contacts"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg 
                hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-md shadow-primary/20"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

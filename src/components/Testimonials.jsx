import kenny from "../assets/kenny.png";
import emmafash from "../assets/emmafash.png";
import abayomi from "../assets/abayomi.png";
import olabode from "../assets/olabode.png";

const testimonials = [
  {
    img: kenny,
    author: "Kehinde Omolehim",
    position: "Founder, it8-academy",
    text: "Working alongside Daniel at it8-academy was a privilege. His technical prowess as a Backend Engineer and his natural leadership skills stood out. Daniel's ability to tutor others effectively, pass on knowledge seamlessly and commitment to quality were evident every step of the way. His exceptional coding skills and inspiring leadership make him a valuable asset to any team. I wholeheartedly recommend Daniel for his excellence and dedication",
  },
  {
    img: emmafash,
    author: "Emmanuel Fasogba",
    position: "Software Engineer, Motions.Space",
    text: "I collaborated with Daniel to ship a portfolio project in less than two weeks and it was a game-changer. His Backend Engineering expertise and innate leadership qualities set him apart. The good thing about him that I find amazing is that he's also good in frontend development and even contributed a whole lot to the frontend team. Daniel's precision in problem-solving and dedication to excellence were truly impressive. With his coding finesse and motivational leadership, Daniel is a dynamic force for any team. I enthusiastically endorse Daniel for his exceptional skills and unwavering commitment.",
  },
  {
    img: abayomi,
    author: "Abayomi Odunnusi",
    position: "Backend Engineer, Grazac",
    text: "Daniel's impact at Grazac was undeniable. A Backend Engineer with visionary leadership, he tackled challenges with finesse. Daniel's precision in problem-solving and commitment to excellence were extraordinary. His coding finesse and empowering leadership make him an invaluable team player. I wholeheartedly recommend Daniel for his remarkable skills and dedication.",
  },
  {
    img: olabode,
    author: "Olabode Sodimu",
    position: "Frontend Engineer, Grazac",
    text: "Working with Daniel on a first grade project was transformative. A Backend Engineer with a natural gift for leadership, he knows his craft so well that he never disappoints. Daniel's commitment to precision and code excellence was unmatched. He communicates and gets along so well with all team members, I think it's what makes him stood out from the others. He documents his API's to ensure they are consumed without no issue and he's always available to spell them out when the need arise. He will be an asset to any team, so I wholeheartedly recommend Daniel for his exceptional skills and unwavering dedication.",
  },
];

export default function Testimonials() {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center my-4">
        <h1 className="text-center font-bold underline underline-offset-4">
          Feedback from individuals I've worked with
        </h1>
      </div>

      <div className="flex relative py-10 overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex justify-start items-center flex-col w-full sm:mx-[20px] mx-[5px] md:mx-[50px] p-4 rounded-lg bg-gray-800"
          >
            <div className="flex flex-col items-center justify-around w-80 p-0 rounded-full">
              <div>
                <img
                  src={testimonial.img}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-center font-bold">{testimonial.author}</h1>
                <h3 className="font-medium text-gray-400">
                  {testimonial.position}
                </h3>
              </div>
            </div>
            <div className="mt-4 md:w-[300px] md:px-0 px-2">
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

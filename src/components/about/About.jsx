import profileImg from "../../images/profile-lill.jpg";

export default function About() {
  return (
    <div className="w-full bg-customWhite flex flex-col items-center">
      <div className="w-9/12 my-12 py-12 text-customBlack">
        <div className="w-full border-b-2 border-customBlue">
          <h2 className="text-6xl">ABOUT</h2>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-stretch gap-8 mt-4">
          <div className="w-full lg:flex-3 lg:w-3/5 xl:flex-4 xl:w-4/6 flex-col gap-4 flex-shrink-0">
            <p className="mb-4 xl:text-xl">
              <span className="font-semibold">Hi there!</span> My name is Lill,
              a frontend developer based in Oslo, Norway. I love transforming
              ideas into visually appealing, user-friendly, and functional
              applications. My goal is to contribute to shaping a more
              harmonious way of interacting with the ever-evolving web.
            </p>
            <p className="mb-4 xl:text-xl">
              Before diving into tech, I spent eight years as a professional
              dancer and dance teacher, a journey that taught me discipline,
              adaptability, and creative problem-solving.
            </p>
            <p className="mb-4 xl:text-xl">
              A decade in Oslo inspired a move to a tiny house on wheels, where
              living close to nature fuels my creativity and helps me maintain a
              healthy work-life balance.
            </p>
            <p className="mb-4 xl:text-xl">
              In December 2024, I graduated from a two-year frontend development
              program at Noroff Vocational School. I’m excited to bring my
              creativity and dedication to this new career path and make a
              meaningful impact in the tech world.
            </p>
            <div className="flex w-full gap-8 justify-between xl:mt-12">
              <button className="w-full py-4 px-5 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2">
                ARCHIVE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              </button>
              <button className="w-full py-4 px-5 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2">
                CONTACT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full lg:flex-2 lg:w-2/5 xl:flex-2 xl:w-2/6 flex-shrink-0">
            <img
              src={profileImg}
              alt="Image of Lill-Kristine Konst"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import avatar from "../img/body.jpg";

const About = () => {
  return (
    <div className="w-10/12 mx-auto my-20" id="about">
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="w-full lg:w-6/12">
          <h2 className="text-3xl text-white font-semibold lg:mt-0 mt-8 lg:w-1/3">
            About Me
          </h2>
          <hr className="bg-gradient-to-tr border-0 my-2 from-pink-500 to bg-indigo-500 w-1/6 pt-[.1rem]" />
          <span className="font-mono text-white/80">
            hamzankechil@gmail.com
          </span>
          <p className="my-14 text-lg text-white/90">
            Nama saya Hamzan Wahyudi, saya seorang Fullstack Web Developer dari
            Sumbawa, NTB, Indonesia. Saya sudah menjadi seorang Fullstack selama
            10 tahun dan berpengalaman di bidang lainnya, seperti berbahasa
            Inggris dan Public Speaking. Saya juga terbiasa bekerja secara tim
            ataupun personal.
          </p>
          <p className="text-lg text-white/60">Contact Me Via Email :</p>
          <form className="flex lg:w-2/3 my-4 flex-col">
            <input
              className="rounded bg-gray-700 px-4 py-2 w-full"
              type="email"
              name="mail"
              id="mail"
              placeholder="Email Address ..."
            />
            <textarea
              name="body"
              className="bg-gray-700 my-3 px-4 py-2 rounded"
              id="body"
              cols="10"
              rows="5"
              placeholder="Message"
            ></textarea>
            <a
              href="#submit"
              className="bg-gradient-to-tr from-indigo-700 to bg-pink-700 py-2 text-white/70 text-center rounded-full lg:w-1/2 w-full"
            >
              Send
            </a>
          </form>
        </div>
        <div className="lg:w-6/12 w-full">
          <div className=" shadow-lg overflow-hidden bg-white/10 rounded-lg lg:scale-90 lg:-ml-20 flex items-center justify-start">
            <img src={avatar} alt="gambar" className="lg:scale-95 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

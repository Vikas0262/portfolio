import QualiSec from "./QualiSec.jsx";
import { FaUserGraduate } from "react-icons/fa6";
import { LettersPullUp } from '../framer/LettersPullUp.jsx';

const QualificationDetails = {
    q2: {
        from: "2023",
        to: "2025",
        inst: "AKTU",
        clg: "Galgotias College of Engineering and Technology",
        addr: "Greater Noida, Uttar Pradesh",
        disc2: "Completed Master of Computer Applications (MCA) and learning full-stack development. Passionate about building clean, efficient web apps using JavaScript, React, Node.js, and MongoDB.",

        cur: true,
    },
    q1: {
        from: "2019",
        to: "2022",
        inst: "BCA",
        clg: "Sahyog College Of IT And Management Studies",
        addr: "Thane, Maharashtra",
        disc1: "Completed my graduation grade with 85% excellence and dedication.",
        disc2: "",
    },
}

function Qualification() {
    return (
        <section
            id="container"
            className="md:w-[50%] h-fit p-[2rem]"
            aria-labelledby="qualification-heading"
        >
            <div
                id="qtitle"
                className="flex"
                role="group"
                aria-label="Qualification section header"
            >
                <div
                    id="qlogo"
                    className="w-12 flex items-center justify-center rounded-full border-[0px] bg-gradient-to-t from-transparent to-slate-400/30 border-slate-400 -translate-x-[50%]"
                    aria-hidden="true"
                >
                    <FaUserGraduate
                        className="text-white scale-125"
                        aria-hidden="true"
                    />
                </div>
                <h1
                    id="qualification-heading"
                    className="sr-only"
                >
                    Qualifications - Education History
                </h1>
                <LettersPullUp
                    text="Qualification"
                    aria-hidden="true"
                />
            </div>
            <div
                id="innercont"
                className="w-full h-fit flex flex-col border-l-2 border-slate-700"
                role="list"
                aria-label="Education timeline"
            >
                {Object.keys(QualificationDetails).map((key, index) => (
                    <QualiSec
                        key={index}
                        {...QualificationDetails[key]}
                        role="listitem"
                    />
                ))}
            </div>
        </section>
    );
}

export default Qualification;
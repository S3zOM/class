"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Volume2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

export default function ClassAlbum() {
  const playerRef = useRef<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (window.YT) {
        initPlayer();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.onload = () => {
        window.onYouTubeIframeAPIReady = initPlayer;
      };
      document.head.appendChild(script);
    };

    const initPlayer = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "vCTRNKPJr40",
        playerVars: {
          loop: 1,
          playlist: "vCTRNKPJr40",
          autoplay: 0,
          mute: 0,
        },
      });
    };

    loadYouTubeAPI();
  }, []);

  const teacher = { name: "Батцоож багш", role: "Анги удирдсан багш" };

  const classPresident = [
    { name: "Ганчимэг", role: "Ангийн дарга" },
    { name: "Бямбадэмбэрэл", role: "Ангийн дарга" },
  ];

  const students = [
    { name: "Алтаншагай", role: "Сурагч" },
    { name: "Амина", role: "Сурагч" },
    { name: "Ананд", role: "Сурагч" },
    { name: "Бат-Эрдэнэ", role: "Сурагч" },
    { name: "Билигдэй", role: "Сурагч" },
    { name: "Зоригтбаатар", role: "Сурагч" },
    { name: "Ирмүүн", role: "Сурагч" },
    { name: "Мандуул", role: "Сурагч" },
    { name: "Номин", role: "Сурагч" },
    { name: "Номин-Эрдэнэ", role: "Сурагч" },
    { name: "Нямбаяр", role: "Сурагч" },
    { name: "Нямзул", role: "Сурагч" },
    { name: "Оргил", role: "Сурагч" },
    { name: "Оюунтөгс", role: "Сурагч" },
    { name: "Удирдагч", role: "Сурагч" },
    { name: "Уранбилэг", role: "Сурагч" },
    { name: "Урангоо", role: "Сурагч" },
    { name: "Хүслэн", role: "Сурагч" },
    { name: "Энхцолмон ", role: "Сурагч" },
    { name: "Энэрэлсайхан", role: "Сурагч" },
  ];

  const eventNames = [
    "Хичээлийн эхний өдөр",
    "Багш болж үзсэн нь",
    "Урлагын үзлэг болсон нь",
    "Pajama day болсон нь",
    "Сурагчдын чуулганаар орсон нь",
  ];

  const chaosTexts = [
    "😴 Унтаж байна",
    "🤫 Нууцаар ярьж байна",
    "😂 Инээгээд сууж байна",
    "📱 Утсаа оролдож байна",
    "🤓 Хичээл сонсож байна",
    "😈 Багшийг ширтэж байна",
  ];

  const eventPhotos = [
    ["/pic3.png", "/pic2.png", "/pic9.png"],
    ["/pic10.png", "/pic12.png", "/pic16.png"],
    ["/pic13.png", "/pic20.png", "/pic21.png"],
    ["/pic19.png", "/pic30.png", "/pic7.png"],
    ["/pic6.png", "/pic4.png", "/pic11.png"],
  ];

  const eventExplanations = [
    "3 сарын дараа бие биенээ анх харсан өдөр болсон 👀 ",
    "Багш нарын баяраар бид  бүгд багш болон хичээл орсон 🔥",
    "Маш стресстэй, хөгжилтэй өдөр байсан 🫠",
    "Бүгд унтлагынхаа хувцастай ирсэн (зарим нь мурьсан🤪)",
    "Олон юм мэдэж, харж авсан 👀",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50 text-slate-800 px-6 py-8 overflow-hidden">
      {/* Background music */}
      <div className="hidden">
        <div id="youtube-player"></div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl border-2 border-red-300 bg-green-100">
            <img
              src="pic1.png"
              alt="School Logo"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <span className="font-semibold text-lg text-red-700">
            Шинэ Өнөөдөр 🎄
          </span>
        </div>
        <span className="text-sm text-green-600">2025 Анги ❄️</span>
      </div>

      {/* Music button */}
      <button
        onClick={() => playerRef.current?.playVideo()}
        className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition hover:bg-red-700"
      >
        <Volume2 className="w-4 h-4" />
        Дуу асаах 🎵
      </button>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-red-700">
          11a ангийн ЭМХ ЗАМБАРААГҮЙ дурсамж ❄️
        </h1>
        <p className="mt-4 text-green-600">
          Хэт шуугиантай, хэт хөгжилтэй анги 😵‍💫
        </p>
      </motion.div>

      {/* Classroom */}
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Teacher */}
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="border-2 border-dashed border-slate-400 rounded-2xl p-6 text-center bg-slate-50"
          >
            <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
              <Users className="w-10 h-10 text-slate-500" />
            </div>
            <p className="font-semibold">{teacher.name}</p>
            <p className="text-sm text-slate-500">{teacher.role}</p>
            <p className="text-xs text-slate-400 mt-1">
              "Одоо дуугүй суу!!!" 😤
            </p>
          </motion.div>
        </div>

        {/* Presidents */}
        <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
          {classPresident.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: i === 0 ? -5 : 5, scale: 1.05 }}
              className="rounded-2xl border border-yellow-300 p-4 text-center bg-yellow-50"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-yellow-200 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-yellow-700">{p.role}</p>
              <p className="text-xs text-slate-400">"Багш харж байна!" 👀</p>
            </motion.div>
          ))}
        </div>

        {/* Desk rows */}
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="grid grid-cols-4 gap-6">
            {students.slice(row * 4, row * 4 + 4).map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: Math.random() * 8 - 4, y: -10 }}
                animate={{ y: [0, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                }}
                className="rounded-xl border border-slate-200 p-4 text-center bg-white shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm font-medium">{s.name}</p>
                <p className="text-xs text-slate-400">{s.role}</p>
                <p className="text-[11px] text-slate-300 mt-1">
                  {chaosTexts[Math.floor(Math.random() * chaosTexts.length)]}
                </p>
              </motion.div>
            ))}
          </div>
        ))}

        {/* EVENTS */}
        <div className="mt-28">
          <h2 className="text-4xl font-bold text-center mb-12">
            🎉 Бидний оролцсон зүйлс
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2, 3, 4, 5].map((event) => (
              <motion.div
                key={event}
                whileHover={{
                  scale: 1.02,
                  rotate: Math.random() * 2 - 1,
                }}
                onClick={() => setSelectedEvent(event)}
                className="border-2 border-red-300 rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer relative group"
              >
                {/* Photo placeholder */}
                <img
                  src={eventPhotos[event - 1][0]}
                  alt={eventNames[event - 1]}
                  className="w-full h-56 object-cover"
                />

                {/* Hover text */}
                <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-700 text-xl font-bold">
                    Дарна уу! 🎄
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">
                    {eventNames[event - 1]}
                  </h3>
                  <p className="text-slate-600">
                    Энд тайлбараа бичнэ. Бид юу хийсэн, яагаад инээдтэй байсан,
                    хэн унтсан 😴, хэн орилсон 📣 гэх мэт.
                  </p>
                  <p className="text-sm text-slate-400">
                    "Энэ өдөр мартагдахгүй!" 😆
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-green-50 p-8 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-4xl font-bold mb-8 text-center">
              🎉 {eventNames[selectedEvent - 1]} 🎉
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {eventPhotos[selectedEvent - 1].map((photo, i) => (
                <motion.img
                  key={i}
                  src={photo}
                  alt={`Эвент ${selectedEvent} зураг ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-slate-800 text-xl leading-relaxed">
                {eventExplanations[selectedEvent - 1]}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-700">
          🏫 Манай ангийнхан 🎅
        </h2>
        <div className="max-w-2xl mx-auto">
          <img
            src="class.png"
            alt="Манай ангийн зураг"
            className="w-full h-96 object-cover rounded-2xl shadow-lg mb-6"
          />
          <p className="text-lg text-slate-600 leading-relaxed">
            Бид бүгээрээ хамт байсан сайхан үеүүд. Хичээл, тоглоом, бүгд
            мартагдашгүй байсан.
          </p>
        </div>
        <div className="mt-12 text-green-600 text-sm">
          ⚠️ 11a анги • Зул сарын мэнд! 🎄❄️ © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

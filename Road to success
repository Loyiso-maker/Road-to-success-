// ROAD TO SUCCESS — DEPLOYMENT SETUP // // QUICK DEPLOY GUIDE: // 1. Create a free account on Vercel or Netlify // 2. Upload this React project // 3. Click Deploy // 4. Your website will go live instantly // // Recommended Free Hosting: // - https://vercel.com // - https://netlify.com // // Recommended Stack: // - React + Tailwind CSS // - Framer Motion Animations // - LocalStorage Persistence // // Future Upgrades: // - Cloud Database // - User Authentication // - AI Productivity Coach // - Mobile App Version // - Notifications & Reminders

import { useEffect, useMemo, useState } from "react"; import { motion } from "framer-motion";

export default function RoadToSuccess() { const [goalInput, setGoalInput] = useState(""); const [reflection, setReflection] = useState(""); const [lastSaved, setLastSaved] = useState(""); const [dailyAffirmation, setDailyAffirmation] = useState("");

const affirmations = [ "You are building the future you once dreamed about.", "Consistency is your real superpower.", "Every disciplined day changes your life.", "Small progress is still progress.", "You were not made to stay average.", "Your future is watching your daily habits.", "Discipline today creates freedom tomorrow.", "Keep going. Your success is being built quietly.", "You are closer than you think.", "Your legacy is created one day at a time.", ];

const [history, setHistory] = useState(() => { const savedHistory = localStorage.getItem("road-to-success-history"); return savedHistory ? JSON.parse(savedHistory) : []; }); const [goals, setGoals] = useState(() => { const saved = localStorage.getItem("road-to-success-goals"); return saved ? JSON.parse(saved) : [ { id: 1, text: "Wake up at 5 AM", completed: false, }, { id: 2, text: "Work on music for 2 hours", completed: false, }, { id: 3, text: "Read 20 pages", completed: false, }, ]; });

useEffect(() => { localStorage.setItem("road-to-success-goals", JSON.stringify(goals));

const today = new Date().toLocaleDateString();

const newHistoryEntry = {
  date: today,
  completed: completedGoals,
  total: goals.length,
  percentage: completionRate,
};

setHistory((prev) => {
  const filtered = prev.filter((item) => item.date !== today);
  const updated = [...filtered, newHistoryEntry];

  localStorage.setItem(
    "road-to-success-history",
    JSON.stringify(updated)
  );

  return updated;
});
localStorage.setItem(
  "road-to-success-last-save",
  new Date().toLocaleString()
);

setLastSaved(new Date().toLocaleString());

}, [goals]);

useEffect(() => { const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

const savedAffirmationDate = localStorage.getItem(
  "road-to-success-affirmation-date"
);

const today = new Date().toDateString();

if (savedAffirmationDate !== today) {
  localStorage.setItem(
    "road-to-success-daily-affirmation",
    randomAffirmation
  );

  localStorage.setItem(
    "road-to-success-affirmation-date",
    today
  );

  setDailyAffirmation(randomAffirmation);
} else {
  const savedAffirmation = localStorage.getItem(
    "road-to-success-daily-affirmation"
  );

  if (savedAffirmation) {
    setDailyAffirmation(savedAffirmation);
  }
}

const savedReflection = localStorage.getItem("road-to-success-reflection");
const savedDate = localStorage.getItem("road-to-success-last-save");

if (savedDate) {
  setLastSaved(savedDate);
}

if (savedReflection) {
  setReflection(savedReflection);
}

}, []);

useEffect(() => { localStorage.setItem("road-to-success-reflection", reflection); localStorage.setItem( "road-to-success-last-save", new Date().toLocaleString() );

setLastSaved(new Date().toLocaleString());

}, [reflection]);

const completedGoals = goals.filter((goal) => goal.completed).length;

const analytics = useMemo(() => { const incompleteGoals = goals.length - completedGoals;

return {
  completed: completedGoals,
  incomplete: incompleteGoals,
  productivity:
    completionRate >= 80
      ? "High"
      : completionRate >= 50
      ? "Moderate"
      : "Low",
};

}, [completedGoals, goals.length, completionRate]);

const completionRate = useMemo(() => { if (goals.length === 0) return 0; return Math.round((completedGoals / goals.length) * 100); }, [completedGoals, goals.length]);

const addGoal = () => { if (!goalInput.trim()) return;

const newGoal = {
  id: Date.now(),
  text: goalInput,
  completed: false,
};

setGoals([newGoal, ...goals]);
setGoalInput("");

};

const toggleGoal = (id) => { setGoals( goals.map((goal) => goal.id === id ? { ...goal, completed: !goal.completed } : goal ) ); };

const deleteGoal = (id) => { setGoals(goals.filter((goal) => goal.id !== id)); };

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, }, }, };

return ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-black text-white flex items-center justify-center p-6" > <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-sm" > <motion.div variants={fadeUp} initial="hidden" animate="visible" className="bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 mb-8 overflow-hidden relative" > <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"></div>

<div className="relative z-10">
        <p className="text-zinc-400 uppercase tracking-[0.3em] text-xs mb-3">
          Daily Affirmation
        </p>

        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed max-w-3xl">
          “{dailyAffirmation}”
        </h2>

        <p className="text-zinc-500 mt-4 text-sm">
          Start your day with focus, discipline, and belief.
        </p>
      </div>
    </motion.div>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Road to Success
        </h1>
        <p className="text-zinc-400 mt-3 text-base md:text-lg max-w-xl">
          Your private discipline room. Build consistency, track your goals,
          and measure your progress every single day.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 min-w-[220px]">
        <p className="text-zinc-400 text-sm">Daily Completion</p>
        <h2 className="text-4xl font-bold mt-2">{completionRate}%</h2>

        <div className="w-full bg-zinc-800 h-2 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>

        <p className="text-zinc-500 text-sm mt-2">
          {completedGoals} of {goals.length} goals completed
        </p>
      </div>
    </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="grid md:grid-cols-3 gap-6 mb-8"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <p className="text-zinc-400 text-sm">Goals Completed</p>
        <h3 className="text-3xl font-bold mt-2">{completedGoals}</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <p className="text-zinc-400 text-sm">Total Goals</p>
        <h3 className="text-3xl font-bold mt-2">{goals.length}</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <p className="text-zinc-400 text-sm">Discipline Status</p>
        <h3 className="text-xl font-semibold mt-2">
          {completionRate >= 70 ? "Locked In" : "Keep Pushing"}
        </h3>
      </div>
    </motion.div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addGoal();
            }
          }}
          placeholder="Write today's goal..."
          className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addGoal}
          className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Add Goal
        </motion.button>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01 }}
            key={goal.id}
            className="flex items-center justify-between bg-black border border-zinc-800 rounded-2xl p-4"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
                className="w-5 h-5"
              />

              <span
                className={`text-lg transition ${
                  goal.completed
                    ? "line-through text-zinc-500"
                    : "text-white"
                }`}
              >
                {goal.text}
              </span>
            </div>

            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-red-400 hover:text-red-300 transition text-sm"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Progress Analytics</h2>
        <span className="text-zinc-500 text-sm">
          Daily Performance Overview
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-black border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">Completed Goals</p>
          <h3 className="text-4xl font-bold mt-2">
            {analytics.completed}
          </h3>
        </div>

        <div className="bg-black border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">Remaining Goals</p>
          <h3 className="text-4xl font-bold mt-2">
            {analytics.incomplete}
          </h3>
        </div>

        <div className="bg-black border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">Productivity Level</p>
          <h3 className="text-3xl font-bold mt-2">
            {analytics.productivity}
          </h3>
        </div>
      </div>

      <div className="bg-black border border-zinc-800 rounded-2xl p-6">
        <div className="flex justify-between mb-3">
          <span className="text-zinc-400">Daily Progress</span>
          <span className="text-white font-semibold">
            {completionRate}%
          </span>
        </div>

        <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-700"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          {[35, 52, 68, completionRate].map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-full bg-white rounded-t-xl transition-all duration-700"
                style={{ height: `${value + 20}px` }}
              ></div>
              <span className="text-zinc-500 text-xs mt-2">
                Week {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">History & Calendar</h2>
        <span className="text-zinc-500 text-sm">
          Your consistency timeline
        </span>
      </div>

      <div className="grid md:grid-cols-7 grid-cols-3 gap-3 mb-8">
        {history.slice(-7).map((day, index) => (
          <div
            key={index}
            className="bg-black border border-zinc-800 rounded-2xl p-4 text-center"
          >
            <p className="text-zinc-500 text-xs mb-2">{day.date}</p>

            <div
              className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-sm font-bold ${
                day.percentage >= 70
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              {day.percentage}%
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {history
          .slice()
          .reverse()
          .map((entry, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="font-semibold text-lg">{entry.date}</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  {entry.completed} of {entry.total} goals completed
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-40 bg-zinc-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: `${entry.percentage}%` }}
                  ></div>
                </div>

                <span className="font-bold text-lg">
                  {entry.percentage}%
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">Daily Reflection</h2>

      <motion.textarea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts, lessons, and progress here..."
        className="w-full h-40 bg-black border border-zinc-700 rounded-2xl p-4 text-white outline-none focus:border-white transition resize-none"
      ></motion.textarea>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 border-t border-zinc-800 pt-6">
      <div>
        <p className="text-zinc-400 text-sm">Auto-Save Status</p>
        <p className="text-green-400 text-sm mt-1">
          All progress saved automatically
        </p>
      </div>

      <div className="text-right">
        <p className="text-zinc-500 text-sm">Last Saved</p>
        <p className="text-white text-sm mt-1">
          {lastSaved || "Waiting for first save..."}
        </p>
      </div>
    </div>

    <div className="mt-6 text-center text-zinc-500 text-sm">
      Built for discipline, consistency, and legacy.
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
          Road to Success
        </span>
      </div>
    </div>
  </motion.div>
</motion.div>

); }

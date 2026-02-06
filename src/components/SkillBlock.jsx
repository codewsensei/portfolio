export default function SkillBlock({ name, desc, icon }) {
  return (
    <div className="skill group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
      {/* ICON */}
      <div className="mb-4 text-3xl text-white/80 group-hover:text-white transition">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-2">{name}</h3>

      <p className="text-white/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

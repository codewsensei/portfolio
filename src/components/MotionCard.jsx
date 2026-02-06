import { motion } from 'framer-motion'


export default function MotionCard({ title, desc }) {
return (
<motion.div
whileHover={{ scale: 1.05 }}
className="p-6 rounded-xl bg-white/5 border border-white/10"
>
<h3 className="text-xl font-semibold mb-2">{title}</h3>
<p className="text-white/70">{desc}</p>
</motion.div>
)
}